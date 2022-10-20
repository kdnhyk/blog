import styled from "styled-components";
import { IsCard } from "../store";
import HandleCards from "../hooks/HandleCards";

const ItemBlock = styled.div`
  width: 150px;
  height: 60px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover,
  & .item-input:focus {
    margin-bottom: 0.1rem;
    box-shadow: 0rem 0.1rem 0.2rem rgb(0, 0, 0, 4%);
  }
  &.toActivateCard {
    &.win {
      background: $card-win;
    }
    &.lose {
      background: $card-toActivateCard;
    }
  }
  &.toUnactivateCard {
    background: $card-toUnactivateCard;
    &.win {
      background: transparent;
      .item-input {
        display: none;
      }
    }
  }
`;

const NameInputBlock = styled.input`
  width: 4rem;
  height: 1rem;
  padding: 0.25rem;
  &:focus {
    outline: 2px solid #c7b6ff;
  }
`;

interface IsItem {
  card: IsCard;
}

export default function Item({ card }: IsItem) {
  const { toActivateCard, toUnactivateCard, toChangeCardName, toDelCard } =
    HandleCards();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    toChangeCardName({ ...card, name });
    if (name === "") {
      toActivateCard(card.id);
    } else if (name !== "") {
      toUnactivateCard(card.id);
    }
  };
  const onRemove = () => {
    toDelCard(card.id);
  };
  const istoActivateCard = card.isActive
    ? "toActivateCard"
    : "toUnactivateCard";
  const isWin = card.isWin ? "win" : "lose";

  return (
    <ItemBlock className={`item ${istoActivateCard} ${isWin}`}>
      <NameInputBlock
        placeholder="이름"
        value={card.name}
        onChange={onChange}
      />
      <button className="item-button" onClick={onRemove}>
        x
      </button>
    </ItemBlock>
  );
}
