const hre = require("hardhat");
async function main() {
 
  const converter = await hre.ethers.getContractFactory("converter");
  const Converter = await converter.deploy();

  await Converter.deployed();

  console.log(`contract deployed at the address of ${Converter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
