import { Link } from "react-router-dom";
import styled from "styled-components";
import { IsCard } from "../store/Cards";

const CardBlock = styled.div`
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: 0.4s;
    transform: translateY(-5px);
  }
`;

const ImgBlock = styled.img`
  width: 100%;
`;

const TitleBlock = styled.div``;

export default function Card({ id, imageSorce, title }: IsCard) {
  const onClick = () => {};

  return (
    <Link to={`/${title}`}>
      <CardBlock onClick={onClick}>
        <ImgBlock alt="img" src={imageSorce}></ImgBlock>
        <TitleBlock>{title}</TitleBlock>
      </CardBlock>
    </Link>
  );
}
