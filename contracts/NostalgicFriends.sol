// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NostalgicFriends {

  //currency
  uint public totSales;
  uint public maxSales;

  //wallet
  address public creator;
  address public donation;

  //typeconv
  mapping (address=>bool) sales;

  constructor() {
    totSales = 0;
    maxSales = 100;
    creator = msg.sender;
    //The Giving Block Company's brain tumor society Inc.
    donation = 0x73cd39c255F9FcB641b81060115F9Ee50b35322a;

    //For Testing - Ganache
    //creator = 0x0BDa6E6407985aE34C54dDa2a9B594c1E6C8548D;
    //donation = 0xFFB18fDb79Ce35799d82D6d3C3CFE29f81BF14d4;
  }

  //funcchecksales - readonly
  function checkSales() public view returns (bool) {
    return totSales < maxSales;
  }

  //funccheckuser - readonly
  function handleCheckUser() public view returns (bool) {
    return sales[msg.sender];
  }

  //funcpurchase - payable
  function handlePurchase() public payable returns (bool) {
    //conditions

    //checking for product
    require(checkSales() == true, "Oops!, Can't do that");
    //checking the value of the amount
    require(msg.value == 0.02 ether,"Please provide the exact price.");
    //Checking for existing buyer
    require(handleCheckUser() == false, "Sorry!, You can buy it only once!");

    //Spliting
    payable(creator).transfer(msg.value * 70 / 100);
    payable(donation).transfer(msg.value * 30 / 100);
    
    sales[msg.sender] = true;

    totSales = totSales + 1;
    return true;
  }

}
