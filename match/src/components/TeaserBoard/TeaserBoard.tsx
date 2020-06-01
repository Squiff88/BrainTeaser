import React from 'react';
import TeaserCard from '../TeaserCard/TeaserCard';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { teaserCardState, flipTeaserCard, one, flipCardOut } from '../../globalState/teaserCardState';
import { CardStatePropTypes } from '../../globalState/teaserCardType';
import './TeaserBoard.css';


const TeaserBoard = ():JSX.Element => {
    
    const [availableCards, setAvailableCards] = useRecoilState(teaserCardState);
    
    const teaserStateOut = useRecoilValue(one);
    const filteredTeaserSet = useSetRecoilState(flipTeaserCard);
    const flipBack = useSetRecoilState(flipCardOut);


    React.useEffect(() => {
        setAvailableCards(teaserStateOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teaserStateOut, filteredTeaserSet ])

    let flippedCards:CardStatePropTypes[] = [];
    flippedCards = availableCards.filter(card => {
        if(card.flipped && !card.matched){
            return card;
        }
        return null;
    });


    let loading = false;
    if(flippedCards.length === 2 && flippedCards.length % 2 === 0 && flippedCards.some(card => !card.matched)){
        loading = true;
        setTimeout(() => {
            flipBack(availableCards);
            loading = false;
        }, 1200);
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
                    flippedCards={flippedCards}
                    loading={loading}
                />
                )}
            )}
        </div>
    )
}

export default TeaserBoard;