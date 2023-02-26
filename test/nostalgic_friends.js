const NostalgicFriends = artifacts.require("NostalgicFriends");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NostalgicFriends", function (accounts) {
  //test1 - first deploy
  it("should assert true", async function () {
    await NostalgicFriends.deployed();
    return assert.isTrue(true);
  });

  //test2 - address match - ***Passing***
  it("should return authorised accounts", async function () {
    const contract = await NostalgicFriends.deployed();
    const creator = await contract.creator.call();
    const donation = await contract.donation.call();

    assert.isTrue(creator == 0x0BDa6E6407985aE34C54dDa2a9B594c1E6C8548D);
    assert.isTrue(donation == 0xFFB18fDb79Ce35799d82D6d3C3CFE29f81BF14d4);
  });

  //test - get and send eth - creator - ***passing***
  it("should provide to creator", async function () {
    const contract = await NostalgicFriends.deployed()

    const initialBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]));

    const purchase = await contract.handlePurchase.sendTransaction({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether")
    });

    const commission = web3.utils.toBN(web3.utils.toWei("0.014", "ether"))
    const finalBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]));
        
    assert.equal(
      initialBalance.add(commission).toString(), 
      finalBalance.toString()
    )
  });

  //test - get and send eth - donation - ***passing***
  it("should provide donation", async function () {
    const contract = await NostalgicFriends.deployed()

    const initialBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[8]));

    const purchase = await contract.handlePurchase.sendTransaction({
      from: accounts[5],
      value: web3.utils.toWei("0.02", "ether")
    })

    const commission = web3.utils.toBN(web3.utils.toWei("0.006", "ether"))
    const finalBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[8]))
    
    assert.equal(
      initialBalance.add(commission).toString(), 
      finalBalance.toString()
    )
  });

});
