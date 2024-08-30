import { TIME } from './Words/TIME';
import { HOME } from './Words/HOME';
import { PERSON } from './Words/PERSON';
import { YOU } from './Words/YOU';
import { WORLD } from './Words/WORLD';
import { DAY } from './Words/DAY';
import { LIFE } from './Words/LIFE';
import { FRIEND } from './Words/FRIEND';
import { LIKE } from './Words/LIKE';

// Create an object mapping names to functions
const wordAnimations = {
    TIME,
    HOME,
    PERSON,
    YOU,
    WORLD,
    DAY,
    LIFE,
    FRIEND,
    LIKE
};

// Extract the word names from the object
const wordList = Object.keys(wordAnimations);

export {
    wordAnimations,
    wordList
};

