import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
const numbersCollection = new NumbersCollection([0, -5, -1, 120, 21, 12]);

let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('aasdwrgijashdAUIF');
sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);
