import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

type Card = {
  id: string;
  name: string;
  image: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperaments?: string;
};

export default function Card(props: Card) {
  return (
    <div className={style.contenedor}>
      <h4>{props.name}</h4>
      <div className={style.image}>
        <img src={props.image} width='60px' height='60px' alt='' />
      </div>
      <div className={style.informacion}>
        {props.height ? (
          <h6>Height:{" " + props.height + " cm."}</h6>
        ) : (
          <span></span>
        )}
        <h6>Weight:{" " + props.weight + " kgs."}</h6>
        <h6>Temperaments:{" " + props.temperaments + "."}</h6>
        {props.lifeSpan ? (
          <h6>Life Span:{" " + props.lifeSpan + "."}</h6>
        ) : (
          <Link to={`/dogs/${props.id}`}>
            <button>Ver Perfil</button>
          </Link>
        )}
      </div>
    </div>
  );
}
