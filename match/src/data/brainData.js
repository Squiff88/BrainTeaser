
// Shuffle initial data
function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const brainData = [
    {matched: false, pair:1 ,id: 2 , icon: 'audio', flipped: false,},
    {matched: false, pair:2 ,id: 3, icon: 'bike', flipped: false,},
    {matched: false, pair:3 ,id: 5, icon: 'chemistry', flipped: false,},
    {matched: false, pair:1 ,id: 1 , icon: 'audio', flipped: false, },
    {matched: false, pair:2 ,id: 4, icon: 'bike', flipped: false,},
    {matched: false, pair:3 ,id: 6, icon: 'chemistry', flipped: false,},
    {matched: false, pair:4 ,id: 8, icon: 'lemonade', flipped: false,},
    {matched: false, pair:5 ,id: 9, icon: 'rocket', flipped: false,},
    {matched: false, pair:7 ,id: 14, icon: 'summer', flipped: false,},
    {matched: false, pair:6 ,id: 11, icon: 'fire', flipped: false,},
    {matched: false, pair:5 ,id: 10, icon: 'rocket', flipped: false,},
    {matched: false, pair:6 ,id: 12, icon: 'fire', flipped: false,},
    {matched: false, pair:8 ,id: 16, icon: 'pizza', flipped: false,},
    {matched: false, pair:4 ,id: 7, icon: 'lemonade', flipped: false,},
    {matched: false, pair:7 ,id: 13, icon: 'summer', flipped: false,},
    {matched: false, pair:8 ,id: 15, icon: 'pizza', flipped: false,}
]


const shuffledBrainData = () => shuffle(brainData);

// shuffle cards before initiation of the game
export const brain = shuffledBrainData();