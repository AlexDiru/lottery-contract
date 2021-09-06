const Greeter = artifacts.require("Greeter");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(Greeter);
};