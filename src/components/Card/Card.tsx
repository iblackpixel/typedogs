import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/theme";

type Card = {
  id: string | number;
  name: string;
  image: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperaments?: string;
};

const CardContainer = styled.div`
  border: 2px;
  border-color: ${colors.third};
  border-style: groove;
  background-color: ${colors.fourth};
  height: auto;
  width: 22vw;
  justify-self: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 760px) {
    width: 28vw;
  }
  @media screen and (max-width: 560px) {
    width: 42vw;
    height: 30vh;
  }
  @media screen and (max-width: 360px) {
    width: 62vw;
    height: 35vh;
  }
`;
const CardTitle = styled.span`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-family: Lato, sans-serif;
  font-weight: lighter;
  font-style: italic;
  color: ${colors.filledSecundary};
`;
const ImageContainer = styled.div`
  height: 15vh;
  width: 15vh;
  border: 0.5%;
  border-color: ${colors.filledSecundary};
  border-style: groove;
`;

const DetailLine = styled.span`
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 600;
  color: ${colors.filledSecundary};
`;
const DetailContainer = styled.div`
  height: auto;
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Card(props: Card) {
  return (
    <CardContainer>
      <CardTitle>{props.name}</CardTitle>
      <ImageContainer>
        <img src={props.image} width='100%' height='100%' alt={props.name} />
      </ImageContainer>
      <DetailContainer>
        {props.height ? (
          <DetailLine>Height:{" " + props.height + " cm."}</DetailLine>
        ) : (
          <span></span>
        )}
        <DetailLine>Weight:{" " + props.weight + " kgs."}</DetailLine>
        <DetailLine>Temperaments:{" " + props.temperaments + "."}</DetailLine>
        {props.lifeSpan ? (
          <DetailLine>Life Span:{" " + props.lifeSpan + "."}</DetailLine>
        ) : (
          <Link to={`/dogs/${props.id}`}>
            <button>Ver Perfil</button>
          </Link>
        )}
      </DetailContainer>
    </CardContainer>
  );
}
