import { useWeb3React } from '@web3-react/core';
import { Contract, ethers, Signer } from 'ethers';
import {
    ChangeEvent,
    MouseEvent,
    ReactElement,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';

import RandomArtifact from "../artifacts/contracts/Random.sol/Random.json"
import { Provider } from '../utils/provider';




const StyledRndLabel = styled.label`
    font-weight: bold;
`;

const StyledRndDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 135px 2.7fr 1fr;
    grid-gap: 10px;
    place-self: center;
    align-items: center;
`;

const StyledRndButton = styled.button`
    width: 150px;
    height: 2rem;
    border-radius: 1rem;
    border-color: blue;
    cursor: pointer;
`;


export function Random(): ReactElement {

    const context = useWeb3React<Provider>();
    const { library, active } = context;

    const [coin, setCoin] = useState("empty")
    const [signer, setSigner] = useState<Signer>();

    useEffect((): void => {
        if (!library) {
            setSigner(undefined);
            return;
        }

        setSigner(library.getSigner());
    }, [library]);



    function handleRndButtonClick(event: MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();

        // only deploy the Greeter contract one time, when a signer is defined
        if (!signer) {
            return;
        }

        async function getRandomContract(signer: Signer): Promise<void> {
            const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

            // Connect to the network, ver2:
            // let provider = ethers.getDefaultProvider();

            const rndContract = new ethers.ContractFactory(RandomArtifact.abi, RandomArtifact.bytecode, signer)


            const rndContract2 = rndContract.attach(contractAddress)

            const cc = await rndContract2.deployed()

            /* const _coinSide = await rndContract.toss() */


            setCoin(cc.address)

        }

        getRandomContract(signer)



    }

    return (
        <>
            <StyledRndDiv>
                <StyledRndLabel>Coin state: {coin}</StyledRndLabel>
                <StyledRndButton onClick={handleRndButtonClick} >
                    Toss Coin
                </StyledRndButton>
            </StyledRndDiv>
        </>
    )
} 
