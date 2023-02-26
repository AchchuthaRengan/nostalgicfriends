// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NostalgicFriends {

  //currency
  uint public totSales;
  uint public maxSales;

  //address
  address public creator;
  address public donation;

  //typeconv
  mapping (address => bool) sales;


  constructor() {

    //initiation
    totSales = 0;
    maxSales = 100;
    //The Giving Block Company's brain tumor society Inc.
    donation = 0x73cd39c255F9FcB641b81060115F9Ee50b35322a;
  }

  //funcchecksales - confirmation - readonly
  function checkSales() public view returns (bool){
    return totSales < maxSales;
  }

  //funchandlecheckuser - Information - readonly
  function handleCheckUser() public view returns (bool){
    return sales[msg.sender];
  }

  //funchandlepurchase - Transaction - payable
  function handlePurchase() public payable returns (bool) {
    //validations

    //checking for product
    require(checkSales() == true, "Oops!, Can't do that");
    //checking the value of the amount
    require(msg.value == 0.02 ether,"Please provide the exact price.");
    //Checking for existing buyer
    require(handleCheckUser() == false, "Sorry!, You can buy it only once!");

    //spilting

    //creator - 70%
    payable(creator).transfer(msg.value * 70 / 100);
    //donation - 30%
    payable(donation).transfer(msg.value * 30 / 100);

    //setup for buyer to buy once
    sales[msg.sender] = true;

    //increment for count
    totSales = totSales + 1;

    return true;

  }



}
