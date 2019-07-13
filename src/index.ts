import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([0, -5, -1, 120, 21, 12]);

let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('aasdwrgijashdAUIF');
sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-500);
linkedList.add(1500);
linkedList.add(500);

sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
