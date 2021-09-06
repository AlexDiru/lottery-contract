//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NonceRegister is Ownable {

    mapping(address => bool) public nonceList;

    constructor() {}

    function addToRegister(address _knownNonce) public onlyOwner {
        nonceList[_knownNonce] = true;
    }

    function isNonce(address _toCheck) public view returns (bool) {
        return nonceList[_toCheck];
    }

}