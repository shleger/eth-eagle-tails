import { ethers } from "hardhat";


//hh run --network localhost tasks/deploy.ts
async function main() {
    const Random = await ethers.getContractFactory('Random');
    const random = await Random.deploy();

    await random.deployed();

    console.log('Random contract deployed ', random.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
