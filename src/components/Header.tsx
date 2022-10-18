import styled from "styled-components";

const HeaderBlock = styled.div`
  height: 42px;
  margin-bottom: 30px;
  display: flex;
  justify-content: right;
`;

const HambergerBlock = styled.div`
  margin: 10px 10px 0px 0px;
`;

export default function Header() {
  return (
    <HeaderBlock>
      <HambergerBlock></HambergerBlock>
    </HeaderBlock>
  );
}
