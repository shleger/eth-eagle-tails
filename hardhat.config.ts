import * as dotenv from 'dotenv';

dotenv.config();


module.exports = {
    solidity: "0.8.9",
    networks: {
        hardhat: {
            chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
        }
    }
};


/*
// auto false mining ( 1 sec)
module.exports = {
    solidity: "0.8.9",
    paths: {
        artifacts: './frontend/src/artifacts'
    },
    networks: {
        hardhat: {
            mining: {
                auto: false,
                interval: 1000
            },
            accounts: [
                {
                    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
                    balance: '10000000000000000000000'
                },
                {
                    privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
                    balance: '10000000000000000000000'
                },
                {
                    privateKey: '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
                    balance: '10000000000000000000000'
                }
            ],
            chainId: 1337
        },
        ropsten: {
            url: process.env.ROPSTEN_URL || '',
            accounts:
                process.env.TEST_ETH_ACCOUNT_PRIVATE_KEY !== undefined
                    ? [process.env.TEST_ETH_ACCOUNT_PRIVATE_KEY]
                    : []
        }
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: 'USD'
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
}

*/


// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

// Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
// Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

// Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
// Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
