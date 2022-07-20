import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NewBreed } from "../../utils/interfaces";
//import { getTemperaments } from "../../actions/actions";
import styled from "styled-components";

const StyledForm = styled.form`
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBreed>();

  const onSubmit: SubmitHandler<NewBreed> = async (data) => {
    const doggo = await Axios.post(
      "https://hidden-fortress-17520.herokuapp.com/dog/",
      data
    );
    alert("Raza creada");
    navigate("../home", { replace: true });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register("name")} />
      <input placeholder='Height' {...register("height")} />
      <input placeholder='Weight' {...register("weight")} />
      <input placeholder='Life Span' {...register("lifespan")} />
      <select multiple {...register("temperaments")}>
        <option disabled value='Elija una o varias opciones'>
          Elija una o varias opciones
        </option>
        <option value='Brave'>Brave</option>
        <option value='Horrendus'>Horrendus</option>
        <option value='Magician'>Magician</option>
      </select>
      <input type='submit' />
    </StyledForm>
  );
}
