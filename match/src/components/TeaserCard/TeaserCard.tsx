import React from 'react';
import './TeaserCard.css';
import { CardStatePropTypes } from '@/store/teaserCardType';



interface TeaserCardPropTypes {
    cardData: CardStatePropTypes;
    flippedCards: CardStatePropTypes[];
    teaserCardIndex: number;
    filteredTeaserSet: (index: number) => void;
    loading: boolean;
}

const TeaserCard = (props: TeaserCardPropTypes):JSX.Element => {
    const { cardData, teaserCardIndex, filteredTeaserSet, flippedCards, loading } = props;

    const [activeCards, setActiveCards] = React.useState([]);

    const cardImage = cardData.flipped ? require(`../../icons/${cardData.icon}.png`) : require(`../../icons/atoms.png`);
    
    const cardStyle = cardData.flipped ? `CardWrapperHeads` : "CardWrapperTails";
    const iconAnimation = cardData.flipped ? 'FlippedIn' : 'FlipOut';
    const animationStyles = cardData.flipped ? 'AnimationIn' : 'AnimationOut';


    const setStateHandler = (data: CardStatePropTypes, itemIndex: number):void => {
        filteredTeaserSet(itemIndex);
        setActiveCards([
            ...activeCards,
            data
        ]);
    }

    let flipCardHandler = true;
    // Disable opening cards if two are already flipped
    if(flippedCards.length >= 2 ){
        flipCardHandler = false;
    }

    const cardHandler = () => {
        if(flipCardHandler){
            if(cardData.flipped || loading){
                return null;
            }
            setStateHandler(cardData, teaserCardIndex);
 
        }
        return null;
    }

    return (
        <div 
            className={`${cardStyle} ${animationStyles}`} 
            onClick={cardHandler}>
            <div className='ImageWrapper'>
                <img className={iconAnimation} src={cardImage} alt='icon' />
            </div>
        </div>
    )
}

export default TeaserCard