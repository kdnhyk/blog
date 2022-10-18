import styled from "styled-components";
import Item from "./Item";
import Cards, { IsCard } from "../store";

const ListBlock = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 6rem);
  grid-template-rows: repeat(auto-fill, 2.5rem);
  gap: 0.5rem;
  overflow: auto;
`;

export default function List() {
  const { cards } = Cards();

  return (
    <ListBlock>
      {cards.map((card: IsCard) => (
        <Item key={card.id} card={card} />
      ))}
    </ListBlock>
  );
}
