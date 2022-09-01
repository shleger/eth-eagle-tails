# Starter React Typescript Ethers.js Hardhat Project

Init fork from:  https://github.com/ChainShot/hardhat-ethers-react-ts-starter.git


Fix new push for: --depth 1
https://stackoverflow.com/questions/29748197/how-to-clone-seed-kick-start-project-without-the-whole-history

git rev-parse --verify master >> .git/info/grafts
git filter-branch -- --all
git replace --convert-graft-file



This repo contains a Hardhat and React Dapp starter project. The React Dapp in the `frontend` dir of this repo interacts with Hardhat's example `Greeter.sol` smart contract running on a local blockchain. The Hardhat `Greeter.sol` example contract is the boilerplate contract that Hardhat creates when creating a new Hardhat project via `yarn hardhat init`.

The React Dapp in this repo looks like this:

![React Dapp](https://res.cloudinary.com/divzjiip8/image/upload/c_scale,w_1280/v1641785505/Screen_Shot_2022-01-03_at_3.52.58_PM_n7ror7.png)

The Dapp uses the [@web3-react npm package's](https://www.npmjs.com/package/web3-react) injected web3 provider to connect to MetaMask and demonstrates the following functionality:
* Connecting a Dapp to the blockchain
* Reading account data from the blockchain
* Cryptographically signing digital messages
* Deploying new instances of a smart contract
* Reading and writing data to and from the deployed smart contract

This repo can be useful to anyone looking to get a local Ethereum blockchain running and to get a Dapp up and communicating with the local node quickly.

Additionally, this repo is a companion project to [ChainShot](https://www.chainshot.com)'s [How to Build a React Dapp with Hardhat and MetaMask](https://medium.com/p/9cec8f6410d3) Medium article. The article and this GitHub repo are recommended for anyone wanting to build up their web3 skills and are helpful resources for anyone interested in joining any of [ChainShot's bootcamps](https://www.chainshot.com/bootcamp).

The smart contract and Hardhat node part of this project were created by installing the [Hardhat npm package](https://www.npmjs.com/package/hardhat) and bootstrapping a Hardhat project by running: `yarn hardhat init`. For more details you can read more in the [Hardhat README doc](https://github.com/nomiclabs/hardhat). The `frontend` part of this project was created using [Create React App](https://github.com/facebook/create-react-app).

Pull this project down from GitHub, cd into the project directory and run the following commands to get setup and running.

```shell
yarn
yarn compile
yarn hardhat node
```

The commands above will install the project dependencies, compile the sample contract and run a local Hardhat node on port `8545`, using chain id `31337`.

After running the above tasks checkout the frontend [README.md](https://github.com/ChainShot/hardhat-ethers-react-ts-starter/tree/main/frontend/README.md) to run a React Dapp using ethers.js that will interact with the sample contract on the local Hardhat node.

Some other hardhat tasks to try out are:

```shell
yarn hardhat accounts
yarn hardhat clean
yarn hardhat compile
yarn hardhat deploy
yarn hardhat help
yarn hardhat node
yarn hardhat test


@types/mocha @types/node dotenv ts-node

// "devDependencies": {
  //   "@nomiclabs/hardhat-ethers": "^2.0.0",
  //   "@nomiclabs/hardhat-etherscan": "^2.1.3",
  //   "@nomiclabs/hardhat-waffle": "^2.0.0",
  //   "@typechain/ethers-v5": "^7.0.1",
  //   "@typechain/hardhat": "^2.3.0",
  //   "@types/chai": "^4.2.21",
  //   "@types/mocha": "^9.0.0",
  //   "@types/node": "^12.0.0",
  //   "@typescript-eslint/eslint-plugin": "^4.29.1",
  //   "@typescript-eslint/parser": "^5.7.0",
  //   "chai": "^4.2.0",
  //   "dotenv": "^10.0.0",
  //   "eslint": "^7.29.0",
  //   "eslint-config-prettier": "^8.3.0",
  //   "eslint-config-standard": "^16.0.3",
  //   "eslint-plugin-import": "^2.25.3",
  //   "eslint-plugin-node": "^11.1.0",
  //   "eslint-plugin-prettier": "^3.4.0",
  //   "eslint-plugin-promise": "^5.1.0",
  //   "ethereum-waffle": "^3.0.0",
  //   "ethers": "^5.0.0",
  //   "hardhat": "^2.8.0",
  //   "hardhat-gas-reporter": "^1.0.4",
  //   "prettier": "^2.3.2",
  //   "prettier-plugin-solidity": "^1.0.0-beta.13",
  //   "solhint": "^3.3.6",
  //   "solidity-coverage": "^0.7.16",
  //   "ts-node": "^10.1.0",
  //   "typechain": "^5.1.2",
  //   "typescript": "^4.5.2"
  // },
  
```
