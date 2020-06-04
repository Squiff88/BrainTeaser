
// Helper Function to flip back cards
export const flipBackCard = (filteredValues, flipSide) => {
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


// Helper Function to flip in cards
export const flipCard = (currentState, index) => {
    const updatedState = currentState.map(card => {
        if(card?.id === currentState[index]?.id){

          const teaserState = !card.flipped;
          const updateCard = {...card}
          updateCard.flipped = teaserState

          return updateCard
        }
        return card;
    });

    return updatedState;
}