// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

contract GovMessageApp {
    address public admin;
    mapping(address => bool) public approvedUsers;

    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event UserApproved(address user);
    event MessagePosted(address sender, string content, uint256 timestamp);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyApprovedUser() {
        require(approvedUsers[msg.sender], "Not an approved user");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function approveUser(address _user) public onlyAdmin {
        approvedUsers[_user] = true;
        emit UserApproved(_user);
    }

    function postMessage(string calldata _content) public onlyApprovedUser {
        messages.push(Message(msg.sender, _content, block.timestamp));
        emit MessagePosted(msg.sender, _content, block.timestamp);
    }

    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }

    function isUserApproved(address _user) public view returns (bool) {
        return approvedUsers[_user];
    }
}
