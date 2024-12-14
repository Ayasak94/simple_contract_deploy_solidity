
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Замените на ваш Infura URL
      accounts: ["YOUR_PRIVATE_KEY"] // Замените на ваш приватный ключ
    }
  }
};
