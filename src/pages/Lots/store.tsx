import { useState } from "react";

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

export default function Cards() {
  const [cards, setCards] = useState(initialState);

  let nextId = 2;
  const toAddCard = () => {
    setCards((prev) =>
      prev.concat({
        id: nextId++,
        name: "",
        isActive: false,
        isWin: false,
      })
    );
  };
  const toDelCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };
  const toActivateCard = (id: number) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isActive: true } : card))
    );
  };
  const toUnactivateCard = (id: number) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, isActive: false } : card))
    );
  };
  const toWinCard = () => {
    setCards((prev) => prev.map((card) => ({ ...card, isWin: false })));
  };
  const toReset = () => {
    setCards((prev) =>
      prev.map((card) => ({ ...card, name: "", isActive: false, isWin: false }))
    );
  };
  const toChangeCardName = (newCard: IsCard) => {
    console.log(cards);
    setCards((prev) =>
      prev.map((card) =>
        card.id === newCard.id ? { ...card, name: newCard.name } : card
      )
    );
  };
  const toDrawLots = (lotsnum: number) => {
    const totalList: number[] = [];
    // 개선
    const lotsList = new Set([-1]);
    // 개선
    cards.map((card) => (card.isActive ? totalList.push(card.id) : null));
    while (lotsList.size < lotsnum + 1) {
      lotsList.add(totalList[Math.floor(Math.random() * totalList.length)]);
    }
    setCards((prev) =>
      prev.map((card) =>
        !card.isActive
          ? { ...card, isWin: true }
          : lotsList.has(card.id)
          ? { ...card, isWin: true }
          : { ...card, isWin: false }
      )
    );
  };
  const toEnterAutoInput = () => {
    let num = 1;
    setCards((prev) =>
      prev.map((card) =>
        !card.isActive ? { ...card, name: "익명" + (num++).toString() } : card
      )
    );
  };

  return {
    cards,
    toAddCard,
    toDelCard,
    toActivateCard,
    toUnactivateCard,
    toWinCard,
    toReset,
    toChangeCardName,
    toDrawLots,
    toEnterAutoInput,
  };
}
