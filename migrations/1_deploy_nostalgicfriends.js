const NostalgicFriends = artifacts.require("NostalgicFriends");
//Contract to Deploy
module.exports = function (deployer){
    deployer.deploy(NostalgicFriends);
}
