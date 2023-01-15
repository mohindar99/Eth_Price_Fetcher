//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */

const dotenv = require("dotenv");
   dotenv.config();


   module.exports = {
    solidity: "0.8.4",
  
    networks: {
      goerli: {
        url: `${process.env.REACT_APP_GOERLI_RPC_URL}`,
        accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`],
      },
    },
    etherscan: {
      apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
    },
  };
