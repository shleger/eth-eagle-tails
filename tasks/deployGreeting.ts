import { ethers } from "hardhat";


//hh run --network localhost tasks/deploy.ts
async function main() {
    const Greeter = await ethers.getContractFactory('Greeter');
    const greeter = await Greeter.deploy('Hello, Hardhat!');

    await greeter.deployed();

    console.log('Greeter deployed to:', greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
