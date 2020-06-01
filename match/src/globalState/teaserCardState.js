import { brainData } from '../data/brainData';
import { atom, selector } from 'recoil';

// Helper Function to flip the cards
const flipCardHandler = (filteredValues, flipSide) => {
  filteredValues = filteredValues.map((card, index) => {
    if(card.flipped && !card.matched){
      const newObj = {...card};
      newObj.flipped = flipSide;

      return newObj
    }
    return card;
  })

  return filteredValues
}


export const teaserCardState = atom({
    key: 'teaserCard',
    default: brainData,
  });

export const teaserCardStateOut = atom({
    key: 'teaserCardOut',
    default: brainData,
});


export const flipCardOut = selector({
  key: teaserCardStateOut,
  set: (( {get,set }, updatedCard) => {
    const flipOut = flipCardHandler(updatedCard, false);
    console.log(flipOut, 'flipe out !!!! 💣💣💣💣💣')
    return set(teaserCardStateOut, flipOut);
  })
})


export const flipTeaserCard = selector({
  key: teaserCardState,
  set: (( {get,set }, updatedCard) => {

    // Get current state
    const currentState = get({key: 'teaserCard'});

    console.log(updatedCard, 'what is the updated maina ? ? ? ? ')

    let flippedCards = [];
    let filteredValues;

    filteredValues = currentState.map(card => {
        if(card?.id === currentState[updatedCard]?.id){
          const teaserState = !card.flipped;
          const updateCard = {...card}
          updateCard.flipped = teaserState
          
          return updateCard
        }
        return card;
    });

    // eslint-disable-next-line array-callback-return
    filteredValues.map(card => {
      if(card.flipped){
        // Save all flipped cards for comparison later
        flippedCards.push(card)
      }
    });

    
    // Comparison of flipped pair
    if(flippedCards.length % 2 === 0) {
      // Exclude all matched cards so far;
      flippedCards = flippedCards.filter(card => !card.matched);

      const pairOne = flippedCards[0];
      const pairTwo = flippedCards[1];
      
      if(pairOne?.pair === pairTwo?.pair){
        // Updated matched pair
        filteredValues = filteredValues.map((card, index) => {
          if(pairOne.id === card.id || pairTwo.id === card.id){
            const matchedCard = {...card};
            matchedCard.matched = true;
            flippedCards.push(matchedCard);

            return matchedCard
          }
          return card;
        });

        return set(teaserCardState, filteredValues);
      }
    }

    return set(teaserCardState, filteredValues);
  })
});