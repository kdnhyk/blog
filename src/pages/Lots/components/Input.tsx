import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import HandleCards from "../hooks/HandleCards";

export default function Input() {
  const {
    cards,
    toReset,
    toDrawLots,
    toAddCard,
    toEnterAutoInput,
    toActivateCard,
    toWinCard,
  } = HandleCards();

  const totalCardsNum = cards.length;

  const [lotsnum, setLotsnum] = useState("0");

  const options = Array.from(
    { length: totalCardsNum + 1 },
    (undefined, i) => i
  );

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLotsnum(e.target.value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    toWinCard();
    setIsOpen(false);
  };

  const ontoEnterAutoInput = () => {
    toEnterAutoInput();
    cards.map((card) => toActivateCard(card.id));
  };

  const onStart = () => {
    if (lotsnum === "0") {
      alert("당첨수를 입력하세요");
      return null;
    }
    const toActivateCardCardsNum = cards.filter((card) => card.isActive).length;
    if (toActivateCardCardsNum !== totalCardsNum) {
      ontoEnterAutoInput();
    }
    toDrawLots(parseInt(lotsnum, 10));
    openModal();
  };

  const lotsCards = cards.filter((card) => card.isActive && card.isWin);

  return (
    <InputBlock>
      <SelectWrapperBlock>
        <h4 className="input-select-left">총 {cards.length}명 중</h4>
        <select onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <h4 className="input-select-right">명</h4>
      </SelectWrapperBlock>
      <ButtonBlock onClick={toAddCard}>추가</ButtonBlock>
      <ButtonBlock onClick={toReset}>초기화</ButtonBlock>
      <ButtonBlock bgColor="#6966FF" onClick={onStart}>
        시작
      </ButtonBlock>
      <ButtonBlock onClick={ontoEnterAutoInput}>자동입력</ButtonBlock>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} lotsCards={lotsCards} />
      )}
    </InputBlock>
  );
}

const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 1px;
  margin-top: 10px;
`;

const SelectWrapperBlock = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBlock = styled.button<{ bgColor?: string }>`
  background: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  color: white;
`;
