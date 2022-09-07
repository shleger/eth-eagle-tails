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
import GreeterArtifact from '../artifacts/contracts/Greeter.sol/Greeter.json';
import { Provider } from '../utils/provider';
import { SectionDivider } from './SectionDivider';

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

    const [coin, setCoin] = useState("empty")


    function handleRndButtonClick(event: MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();

        setCoin("Eagle")

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
