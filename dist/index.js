Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_1 = require("./dictionary");
const dic = new dictionary_1.Dictionary();
dic.set("a", 1);
dic.set("a", 11);
dic.set("b", 22);
console.log(dic.size);
dic.forEach((k, v) => {
    console.log(`${k}:${v}`);
});
console.log(dic.has("a"));
console.log(dic.delete("a"));
dic.forEach((k, v) => {
    console.log(`${k}:${v}`);
});
console.log(dic.size);
console.log(dic.get("b"));
