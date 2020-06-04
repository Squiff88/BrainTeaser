
import { selector } from 'recoil';
import { teaserCards } from './atomState';
import { flipCard } from './helpers/flipCard';



export const flipTeaserCard = selector({
  key: 'flipCard',
  set: (( {get,set }, updatedCard) => {

    // Get current state
    const currentState = get({key: 'teaserCard'});

    
    let flippedCards = [];
    let filteredValues;
    
    
    filteredValues = flipCard(currentState, updatedCard);

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
          if(pairOne?.id === card?.id || pairTwo?.id === card?.id){
            const matchedCard = {...card};
            matchedCard.matched = true;
            flippedCards.push(matchedCard);

            return matchedCard
          }
          return card;
        });

        return set(teaserCards, filteredValues);
      }
    }

    return set(teaserCards, filteredValues);
  })
});