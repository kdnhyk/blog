import styled from "styled-components";
import List from "./components/List";
import Input from "./components/Input";

const LotsBlock = styled.div`
  width: 60vw;
  min-width: 480px;
  height: 60vh;
  min-height: 16rem;
  margin: 0 auto;
  margin-top: 30px;
  background: grey;
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &::-webkit-scrollbar {
      width: 0.25rem;
      height: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      background: black;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }
`;

export default function Lots() {
  return (
    <LotsBlock>
      <List />
      <Input />
    </LotsBlock>
  );
}
