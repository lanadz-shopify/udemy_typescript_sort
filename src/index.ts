import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([0, -5, -1, 120, 21, 12]);

// numbersCollection.sort();
console.log('Number Collection: ', numbersCollection);
console.log('Number Collection: ', numbersCollection.sort());

const charsCollection = new CharactersCollection('aasdwrgijashdAUIF');
console.log('String: ', charsCollection);
console.log('String: ', charsCollection.sort());

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-500);
linkedList.add(1500);
linkedList.add(500);
console.log('Linked List: ');
linkedList.print();
linkedList.sort();
console.log('Linked List sorted: ');
linkedList.print();
