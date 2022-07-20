import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const NavBarContainer = styled.nav`
  height: 15vh;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.primary};
`;

const Logo = styled.span`
  font-family: Haettenschweiler, Lato, "Arial Narrow Bold", sans-serif;
  font-style: italic;
  font-size: 4rem;
  color: ${colors.secundary};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;
const DetailLog = styled.span`
  font-family: Haettenschweiler, Lato;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${colors.secundary};
`;

function NavBar() {
  return (
    <NavBarContainer>
      <StyledLink to='/home'>
        <Logo>TipeDogs</Logo>
      </StyledLink>
      <StyledLink to='/dog'>
        <DetailLog>Crear Raza</DetailLog>
      </StyledLink>
    </NavBarContainer>
  );
}

export default NavBar;
