import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://i.ibb.co/7gHY2FH/perros2amplio.jpg");
`;
const Title = styled.h2`
  text-align: center;
  height: auto;
  width: 60vw;
  font-family: Impact, Haettenschweiler, Lato, "Arial Narrow Bold", sans-serif;
  font-size: 4em;
  color: ${colors.filledSecundary};
  margin-top: 0;
  margin-left: 10%;
  margin-right: 10%;
  padding: 3%;
  background-color: ${colors.primary};
  @media screen and (max-width: 560px) {
    width: 94vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const ButtonContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  margin-left: 10%;
  margin-right: 12%;
`;
const HomeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 33vw;
  font-size: 1.8em;
  font-family: Impact, Haettenschweiler, Lato, "Arial Narrow Bold", sans-serif;
  color: ${colors.secundary};
  margin-top: 1%;

  padding: 3%;
  background-color: ${colors.primary};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;
const MarkerContainer = styled.div`
  height: 20vh;
  width: 50vw;
  background-color: ${colors.secundary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 30px;
  color: ${colors.filledPrimary};
  margin-bottom: 0;
  padding: 3%;
  @media screen and (max-width: 560px) {
    width: 94vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const Pocket = styled.span`
  font-family: Impact, "Haettenschweiler", "Arial Narrow Bold", sans-serif;
  font-size: 1em;
  display: flex;
  align-items: center;
  margin-left: 2%;
  margin-right: 2%;
`;
export default function Landing() {
  return (
    <ContainerPrincipal>
      <Title>Henry Dogs</Title>
      <ButtonContainer>
        <StyledLink to={"/home"}>
          <HomeButton>Ingresa!</HomeButton>
        </StyledLink>
      </ButtonContainer>
      <MarkerContainer>
        <Pocket>Presentado por:</Pocket>
        <Pocket>Roque Iván Moyano</Pocket>
      </MarkerContainer>
    </ContainerPrincipal>
  );
}
