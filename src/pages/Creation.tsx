import React from "react";
import Form from "../components/Form/Form";
import Footer from "../components/NavBar/Footer";
import style from "./style.module.css";
import NavBar from "../components/NavBar/NavBar";

export default function Creation() {
  return (
    <div className={style.BGP}>
      <NavBar />
      <div className={style.auxFormC}>
        <div className={style.formContainer}>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
