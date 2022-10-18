import styled from "styled-components";
import { Cards } from "../store/Cards";
import Card from "./Card";

const MainBlock = styled.div`
  height: 100%;
`;
const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  h1 {
    margin: 10px 0;
  }
  h3 {
    margin-right: 10px;
  }
`;

const CardsBlock = styled.div`
  padding: 0 15px;
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
  gap: 20px;
`;

export default function Main() {
  return (
    <MainBlock>
      <TitleBlock>
        <h1>BLOG</h1>
        <h3>Sort By</h3>
      </TitleBlock>
      <CardsBlock>
        {Cards.map((card) => (
          <Card
            id={card.id}
            imageSorce={card.imageSorce}
            title={card.title}
          ></Card>
        ))}
      </CardsBlock>
    </MainBlock>
  );
}
