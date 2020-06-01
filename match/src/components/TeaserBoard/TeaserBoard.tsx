import React from 'react';
import TeaserCard from '../TeaserCard/TeaserCard';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { teaserCardState, flipTeaserCard, teaserCardStateOut, flipCardOut } from '../../globalState/teaserCardState';
import { CardStatePropTypes } from '../../globalState/teaserCardType';
import './TeaserBoard.css';


const TeaserBoard = ():JSX.Element => {
    
    const [availableCards, setAvailableCards] = useRecoilState(teaserCardState);
    const cardsCurrentState = useRecoilValue(teaserCardState);
    const teaserStateOut = useRecoilValue(teaserCardStateOut);
    const filteredTeaserSet = useSetRecoilState(flipTeaserCard);

    
    const flipBack = useSetRecoilState(flipCardOut);

    React.useEffect(() => {
        setAvailableCards(cardsCurrentState)
    }, [setAvailableCards, cardsCurrentState, availableCards, teaserStateOut]);

    React.useEffect(() => {
        setAvailableCards(teaserStateOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teaserStateOut])


    const flippedCards:CardStatePropTypes[]  = availableCards.filter(card => card.flipped);
    console.log(flippedCards, 'flipped maina ')
    if(flippedCards.length >= 2 && flippedCards.length % 2 === 0 && flippedCards.some(card => !card.matched)){
        setTimeout(() => {
            flipBack(availableCards);
        }, 700)
    }
    

    return (
        <div className='BoardWrapper'>
            {availableCards.map((data, index) => {
                return (
                <TeaserCard 
                    cardData={data} 
                    key={data.id ?? Math.random() * 13 / 29} 
                    filteredTeaserSet={filteredTeaserSet} 
                    teaserCardIndex={index} 
                />
                )}
            )}
        </div>
    )
}

export default TeaserBoard;