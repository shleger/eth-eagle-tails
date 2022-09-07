//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Random {

    string private coin;
    
    constructor(){
	coin = "rndInit";
    }

    function toss() public view returns (string memory) {
	console.log("Current side is %s", coin);
	return coin;
    }

	
}
