import { Dictionary } from "./dictionary";
const dic = new Dictionary<string, number>();
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
