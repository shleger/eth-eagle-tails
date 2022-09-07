import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";


describe('Greeter', function (): void {
    it("Should return greeting", async function (): Promise<void> {
        const Greeter = await ethers.getContractFactory('Greeter');
        const greeter = await Greeter.deploy('Hello, world!');
        await greeter.deployed();

        expect(await greeter.greet()).to.equal('Hello, world!');

        const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

        // wait until the transaction is mined
        await setGreetingTx.wait();

        expect(await greeter.greet()).to.equal('Hola, mundo!');
    });
});
