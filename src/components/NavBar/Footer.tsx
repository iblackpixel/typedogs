import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const FooterContainer = styled.div`
  height: 12vh;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${colors.primary};
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const FooterSignature = styled.div`
  font-family: Haettenschweiler, Lato;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  color: ${colors.filledSecundary};
`;
const FooterLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledFaGithub = styled(FaGithub)`
  font-size: 2rem;
  color: ${colors.filledSecundary};
`;
const StyledFalinkedin = styled(FaLinkedin)`
  font-size: 2rem;
  color: ${colors.filledSecundary};
`;
export default function Footer() {
  return (
    <FooterContainer>
      <SignatureContainer>
        <FooterSignature>Henry Dogs</FooterSignature>
        <FooterSignature>Por Roque Iván Moyano</FooterSignature>
      </SignatureContainer>
      <SignatureContainer>
        <FooterLink
          href='https://github.com/iblackpixel'
          target='_blank'
          rel='noreferrer'
        >
          <StyledFaGithub />
        </FooterLink>
        <FooterLink
          href='https://www.linkedin.com/in/roque-iván-moyano-a5b0b7203'
          target='_blank'
          rel='noreferrer'
        >
          <StyledFalinkedin />
        </FooterLink>
      </SignatureContainer>
    </FooterContainer>
  );
}
