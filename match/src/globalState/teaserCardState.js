import { brainData } from '../data/brainData';
import { atom, selector } from 'recoil';

export const teaserCardState = atom({
    key: 'teaserCard',
    default: brainData,
  });


  export const filteredTeaser = selector({
    key: teaserCardState,
    set: (( {get,set }, updatedTeaser) => {
      
        const currentState = get({key: 'teaserCard'});

        const filteredValues = currentState.map(teaser => {
          if(teaser.id === currentState[updatedTeaser].id){
            const teaserState = !teaser.flipped;
            const newObj = {...teaser}
            newObj.flipped = teaserState
            console.log(newObj , 'new obj')
            
            return newObj
          }
          return teaser;
        });

        console.log(filteredValues, 'filtered values')
        
        set(teaserCardState, filteredValues)
    })
    });