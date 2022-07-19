import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { getTemperaments } from "../../actions/actions";

type FormData = {
  name: string;
  height: string;
  weight: string;
  lifespan: string;
  temperaments: string[];
};

export default function Form() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const doggo = await Axios.post(
      "https://hidden-fortress-17520.herokuapp.com/dog/",
      data
    );
    alert("Raza creada");
    navigate("./home", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name")} />
      <label>Height</label>
      <input {...register("height")} />
      <label>Weight</label>
      <input {...register("weight")} />
      <label>Life Span</label>
      <input {...register("lifespan")} />
      <select multiple {...register("lifespan")}>
        <option value='Brave'>Brave</option>
        <option value='Horrendus'>Horrendus</option>
        <option value='Magician'>Magician</option>
      </select>
      <input type='submit' />
    </form>
  );
}
