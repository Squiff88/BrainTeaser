import { atom } from 'recoil';
import { brain } from '../data/brainData';



export const teaserCards = atom({
    key: 'teaserCard',
    default: brain
  });
