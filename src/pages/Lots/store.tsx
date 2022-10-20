import { atom } from "recoil";

export interface IsCard {
  id: number;
  name: string;
  isActive: boolean;
  isWin: boolean;
}

const initialState: IsCard[] = [
  { id: 0, name: "", isActive: false, isWin: false },
  { id: 1, name: "", isActive: false, isWin: false },
];

export const cardsState = atom({
  key: "cardsState",
  default: initialState,
});

export const cardIdState = atom({
  key: "cardIdState",
  default: 2,
});
