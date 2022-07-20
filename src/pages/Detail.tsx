import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBreed } from "../actions/actions";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import { GetBreed } from "../utils/interfaces";
import styled from "styled-components";
import { colors } from "../utils/theme";
interface RootBreed {
  breed: GetBreed;
}

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
  height: 50vh;
  width: 35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  border: 2px solid;
  border-color: ${colors.secundary};
`;

const CardContainer = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;

function Detail() {
  const { id } = useParams();
  const dispatch: (x: any) => void = useDispatch();
  useEffect(() => {
    if (typeof id === "string" || typeof id === "number") {
      dispatch(getBreed(id));
    }
  }, [dispatch, id]);
  const breed = useSelector((state: RootBreed) => state.breed);
  return (
    <ContainerPrincipal>
      <NavBar />
      <AuxContainer>
        <CardContainer>
          <div>
            <Card
              id={breed.id}
              name={breed.name}
              weight={breed.weight}
              height={breed.height}
              image={breed.image}
              lifeSpan={breed.lifeSpan}
              temperaments={
                !breed.temperament ? breed.temperaments : breed.temperament
              }
            />
          </div>
        </CardContainer>
      </AuxContainer>
      <Footer />
    </ContainerPrincipal>
  );
}

export default Detail;
