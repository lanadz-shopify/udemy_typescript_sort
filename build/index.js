"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([0, -5, -1, 120, 21, 12]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
console.log(numbersCollection.data);
