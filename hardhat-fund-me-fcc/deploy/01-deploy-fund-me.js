// First Method
// async function deployFunc(hre) {
//   console.log("Hi")
// }
// module.exports.default = deployFunc

// Second Method
// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
// }

// Third Method
// Nameless async function
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
}
