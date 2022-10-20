import styled from "styled-components";
import Item from "./Item";
import { IsCard } from "../store";
import HandleCards from "../hooks/HandleCards";

const ListBlock = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  gap: 10px;
`;

export default function List() {
  const { cards } = HandleCards();

  return (
    <ListBlock>
      {cards.map((card: IsCard) => (
        <Item key={card.id} card={card} />
      ))}
    </ListBlock>
  );
}
