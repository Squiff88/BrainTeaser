import React from 'react';
import TeaserCard from '../TeaserCard/TeaserCard';
import { useSetRecoilState, useRecoilValue, selector, useRecoilState } from 'recoil';
import { teaserCardState, filteredTeaser } from '../../globalState/teaserCardState'


const TeaserBoard = () => {
    
    const [cardState, setCardState] = useRecoilState(teaserCardState);
    const filteredTeaserSet = useSetRecoilState(filteredTeaser);

    // console.log(cardState, 'teaser state')
    const setStateHandler = (itemIndex) => {
        filteredTeaserSet(itemIndex);
        // setCardState(cardState)
        
          
        }

    return (
        <div className='BoardWrapper'>
            {cardState.map((data, index) => <TeaserCard data={data} key={data.id} setStateHandler={setStateHandler} teaserIndex={index} /> )}
        </div>
    )
}

export default TeaserBoard;