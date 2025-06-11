// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.20",
// };
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
    // sepolia:{
    //   url:"https://eth-sepolia.g.alchemy.com/v2/qaJx07iBpSgacM2cq5JTgn934BQ23gxb",
    //   //`https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_KEY}`,
    //   accounts:[ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80]
    //   //[process.env.PRIVATE_KEY]
      
    // }
  },
  solidity: "0.8.20",
};