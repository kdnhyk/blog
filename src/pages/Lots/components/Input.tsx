import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Cards from "../store";

const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 0.125em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .input-select {
    grid-column: span 2;
    display: flex;
    width: 100%;
    border: 2px solid #c7b6ff;
    border-radius: 0.3rem;
    box-sizing: border-box;
    position: relative;
    .input-select-left {
      background: white;
      color: black;
      border-top-left-radius: 0.2rem;
      border-bottom-left-radius: 0.2rem;
      padding: 0 0.2rem 0 0.2rem;
    }
    select {
      flex-grow: 1;
      border-left: 2px solid #c7b6ff;
      border-right: 2px solid #c7b6ff;
      font-size: 1rem;
      option {
        background-color: $bg;
        color: $col;
      }
    }
    .input-select-right {
      background: white;
      color: black;
      border-top-right-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      padding: 0 0.2rem 0 0.2rem;
    }
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    animation: modal-bg-show 0.3s;
    .modal-section {
      position: relative;
      z-index: 100;
      width: 12.5em;
      height: fit-content;
      max-height: 80vh;
      margin: 0 auto;
      border-radius: 0.25rem;
      background: $bg;
      color: $col;
      border: 1px solid $col;
      animation: modal-show 0.3s;

      overflow: auto;
      header {
        width: 100%;
        height: fit-content;
        padding: 0.25rem;
        border-bottom: 1px solid $col;
        box-sizing: border-box;
        position: relative;
        .modal-button {
          height: 1rem;
          font-size: 1rem;
          background: transparent;
          color: $col;
          position: absolute;
          top: 0;
          right: 0;
          &:hover {
            color: lighten($col, 10%);
          }
          &:toactivatecard {
            color: lighten($col, 15%);
          }
        }
      }
      main {
        padding: 0.25rem;
      }
    }
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
function Input() {
  const {
    cards,
    toReset,
    toDrawLots,
    toAddCard,
    toEnterAutoInput,
    toActivateCard,
    toWinCard,
  } = Cards();

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
      <div className="input-select">
        <h4 className="input-select-left">총 {cards.length}명 중</h4>
        <select onChange={onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <h4 className="input-select-right">명</h4>
      </div>
      <button onClick={toAddCard}>추가</button>
      <button onClick={toReset}>초기화</button>
      <button onClick={onStart}>시작</button>
      <button onClick={ontoEnterAutoInput}>자동입력</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal} lotsCards={lotsCards} />
      )}
    </InputBlock>
  );
}

export default Input;
