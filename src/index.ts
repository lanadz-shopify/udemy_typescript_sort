import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
const numbersCollection = new NumbersCollection([0, -5, -1, 120, 21, 12]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
console.log(numbersCollection.data);
