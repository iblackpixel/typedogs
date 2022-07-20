import React from "react";
import Form from "../components/Form/Form";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import styled from "styled-components";
import { colors } from "../utils/theme";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://i.ibb.co/7gHY2FH/perros2amplio.jpg");
`;
const AuxContainer = styled.div`
  height: 430px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border: 2px solid;
  border-color: ${colors.filledSecundary};
`;
const FormContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;
export default function Creation() {
  return (
    <ContainerPrincipal>
      <NavBar />
      <AuxContainer>
        <FormContainer>
          <Form />
        </FormContainer>
      </AuxContainer>
      <Footer />
    </ContainerPrincipal>
  );
}
