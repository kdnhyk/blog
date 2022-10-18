import { useParams } from "react-router";
import styled from "styled-components";
import { IsCard, Cards } from "../store/Cards";

const InCardBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgBlock = styled.img`
  width: 100%;
`;

const TitleBlock = styled.div``;

const DescriptionBlock = styled.div``;

export default function InCard() {
  const { id } = useParams();
  const Card: IsCard | undefined = Cards.find((card) => card.id === Number(id));

  return (
    <InCardBlock>
      <ImgBlock alt="img" src={Card && Card.imageSorce}></ImgBlock>
      <TitleBlock>{Card && Card.title}</TitleBlock>
      <DescriptionBlock>{Card && Card.description}</DescriptionBlock>
    </InCardBlock>
  );
}
