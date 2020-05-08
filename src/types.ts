import { Color, Mark } from "./enums";

// export type Deck = Card[]; //类型别名

export interface Card {
  getString(): string;
}

export interface NormalCard extends Card {
  color: Color;
  mark: Mark;
}
export interface Joker extends Card {
  type: "big" | "small"; //字面量类型
}
