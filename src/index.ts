import { Deck } from "./deck";

// let a: string | number;//联合类型
const deck = new Deck();
deck.shuffle();
deck.print();
const result = deck.publish();
result[0].print();
result[1].print();
result[2].print();
result[3].print();
