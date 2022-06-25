const { network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let bnbUsdPriceFeedAddress

    bnbUsdPriceFeedAddress = networkConfig[chainId]["bnbUsdPriceFeed"]

    const args = [bnbUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log(`fundMe contract address:${fundMe.address}`)

    //verify
    await verify(fundMe.address, args)

    log(
        "-------------------------------------------------------------------------"
    )
}

module.exports.tags = ["bsc", "fundme"]
