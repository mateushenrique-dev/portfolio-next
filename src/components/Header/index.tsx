import styled from "styled-components";
import MenuWrapper from "../Menu";
import { ToggleTheme } from "./ToggleTheme";

const Header = styled.header`
  max-width: 1240px;
  padding: 0 30px;
  margin: 0 auto;
`;

export default function HeaderWrapper() {
  return (
    <Header>
      <MenuWrapper />
      <ToggleTheme />
    </Header>
  );
}