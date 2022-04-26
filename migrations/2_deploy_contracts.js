const ShambaAssistantToken = artifacts.require("ShambaAssistantToken");

module.exports = function (deployer) {
  deployer.deploy(ShambaAssistantToken, 1000000);
};
