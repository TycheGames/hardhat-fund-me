require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

//goerli testnet
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL

//BNB testnet
const BNBTESTNET_RPC_URL = process.env.BNBTESTNET_RPC_URL

//BNB mainnet
const BNBMAINNET_RPC_URL = process.env.BNBMAINNET_RPC_URL

//bscscan api key
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY

//goerli
module.exports = {
    //solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        bnbtestnet: {
            url: BNBTESTNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 97,
            blockConfirmations: 6,
        },
        bnbmainnet: {
            url: BNBMAINNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 56,
        },
    },
    gasReporter: {
        //enabled => true work or false not work
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        // coinmarketcap: COINMARKETCAP_API_KEY,
        //测算不同链上的gas费用
        //MATIC => polygon
        //ETH => Ethereum mainnet
        //BNB => Binance
        //AVAX => Avalanche
        //HT => Heco
        token: "MATIC",
    },
    etherscan: {
        //apiKey: ETHERSCAN_API_KEY,
        //bsc api key
        apiKey: BSCSCAN_API_KEY,
    },
}
