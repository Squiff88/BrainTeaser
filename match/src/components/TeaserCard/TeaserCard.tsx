import React from 'react';
import './TeaserCard.css';
import { useSetRecoilState, useRecoilValue, selector, useRecoilState } from 'recoil';
import { teaserCardState, filteredTeaser } from '../../globalState/teaserCardState'

const TeaserCard = (props) => {

    const { data, teaserIndex, setStateHandler } = props;



    console.log('hey')

    const cardStyle = data.flipped ? 'CardWrapperHeads' : "CardWrapperTails";
    const cardImage = data.flipped ? require(`../../icons/${data.icon}.png`) : require(`../../icons/atoms.png`)

    return (
        <div className={cardStyle} onClick={() => setStateHandler(teaserIndex)}>
            <img src={cardImage} alt='icon' />
        </div>
    )
}

export default TeaserCard