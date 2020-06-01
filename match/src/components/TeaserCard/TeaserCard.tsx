import React from 'react';
import './TeaserCard.css';
import { CardStatePropTypes } from '@/globalState/teaserCardType';



interface TeaserCardPropTypes {
    cardData: CardStatePropTypes;
    teaserCardIndex: number;
    filteredTeaserSet: (index: number) => void;
}

const TeaserCard = (props: TeaserCardPropTypes):JSX.Element => {
    const { cardData, teaserCardIndex, filteredTeaserSet } = props;

    const [activeCards, setActiveCards] = React.useState([]);

    const cardImage = cardData.flipped ? require(`../../icons/${cardData.icon}.png`) : require(`../../icons/atoms.png`);
    
    const cardStyle = cardData.flipped ? `CardWrapperHeads` : "CardWrapperTails Back";
    const iconAnimation = cardData.flipped ? 'FlippedIn' : 'FlipOut';
    const animationStyles = cardData.flipped ? 'AnimationIn Back' : 'AnimationOut';


    const setStateHandler = (data: CardStatePropTypes, itemIndex: number):void => {
        filteredTeaserSet(itemIndex);
        setActiveCards([
            ...activeCards,
            data
        ]);
    }

    
    return (
        <div 
            className={`${cardStyle} ${animationStyles}`} 
            onClick={():void => cardData.flipped ? null : setStateHandler(cardData, teaserCardIndex)}>
            <div className='ImageWrapper'>
                <img className={iconAnimation} src={cardImage} alt='icon' />
            </div>
        </div>
    )
}

export default TeaserCard