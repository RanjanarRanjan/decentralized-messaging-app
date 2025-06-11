const { expect } = require("chai");

describe("GovMessageApp", function () {
  let govMessageApp, admin, user;

  beforeEach(async function () {
    [admin, user] = await ethers.getSigners();
    const GovMessageApp = await ethers.getContractFactory("GovMessageApp");
    govMessageApp = await GovMessageApp.deploy();
    await govMessageApp.waitForDeployment(); // Hardhat v2.21+
  });

  it("should set the deployer as admin", async function () {
    expect(await govMessageApp.admin()).to.equal(admin.address);
  });

  it("should allow admin to approve a user", async function () {
    await govMessageApp.approveUser(user.address);
    const approved = await govMessageApp.isUserApproved(user.address);
    expect(approved).to.be.true;
  });

  it("should allow approved user to post a message", async function () {
    await govMessageApp.approveUser(user.address);
    await govMessageApp.connect(user).postMessage("Hello world");
    const messages = await govMessageApp.getAllMessages();
    expect(messages.length).to.equal(1);
    expect(messages[0].content).to.equal("Hello world");
  });
});
