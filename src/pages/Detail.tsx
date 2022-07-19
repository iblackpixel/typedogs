import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBreed } from "../actions/actions";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import style from "./style.module.css";
function Detail() {
  const { id } = useParams();
  const dispatch: (x: any) => void = useDispatch();
  useEffect(() => {
    if (typeof id === "string" || typeof id === "number") {
      dispatch(getBreed(id));
    }
  }, [dispatch, id]);
  const breed = useSelector((state: any) => state.breed);
  return (
    <div className={style.BGP}>
      <NavBar />
      <div className={style.auxFormC}>
        <div className={style.formContainer}>
          <div className={style.card}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
