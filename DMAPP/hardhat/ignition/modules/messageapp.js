// // This setup uses Hardhat Ignition to manage smart contract deployments.
// // Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GovMessageAppModule", (m) => {

  
  const govMessageApp = m.contract("GovMessageApp"); // match the Solidity contract name

  return { govMessageApp };
});
