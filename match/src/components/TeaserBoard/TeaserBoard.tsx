import React from 'react';
import './TeaserBoard.css';
import TeaserCard from '../TeaserCard/TeaserCard';
import { CardStatePropTypes } from '../../store/teaserCardType';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { flipTeaserCard } from '../../store/selectorHandlers';
import { teaserCards } from '../../store/atomState';
import { flipBackCard } from '../../store/helpers/flipCard'

interface TeaserBoardPropTypes {
    startTime: (input) => void;
    stopTimer: (input) => void;
    timer: boolean;
}

const TeaserBoard = (props: TeaserBoardPropTypes):JSX.Element => {

    const { startTime, stopTimer, timer } = props;

    const [availableCards, setAvailableCards] = useRecoilState(teaserCards);
    const teaserStateOut = useRecoilValue(teaserCards);
    const filteredTeaserSet = useSetRecoilState(flipTeaserCard);
  
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

    const filters = (data) => {
        if(!timer){
            startTime(true)
        }
    
        return filteredTeaserSet(data)
    }
    
    const allFlipped = availableCards.filter(card => !card.matched)

    if(allFlipped.length === 0 && flippedCards.length === 0){
        stopTimer(true);
    }
    

    let loading = false;
    if(flippedCards.length === 2 && flippedCards.length % 2 === 0 && flippedCards.some(card => !card.matched)){
        loading = true;
        setTimeout(() => {
            const flipped = flipBackCard(availableCards, false);
            setAvailableCards(flipped)
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
                        filteredTeaserSet={filters} 
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



// ATOMS IN DIFFERENT FILES

// USE HOOK TO TAKE LOGIC FROM SELECTORS