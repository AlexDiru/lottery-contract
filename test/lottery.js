const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery", function () {
  it("Should purchase an entry with correct wei", async function () {
    const wei = 10_000;

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy(wei);
    await lottery.deployed();

    console.log(await lottery.purchaseEntry({ value: wei}))

    expect(await lottery.purchaseEntry({ value: wei})).to.emit(lottery, "EntryPurchased")   
  })


  it("Should revert an entry with incorrect wei", async function () {
    const wei = 10_000;

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy(wei);
    await lottery.deployed();

    expect(lottery.purchaseEntry()).to.be.revertedWith("The purchase value must be exactly the entry cost");
  })
})