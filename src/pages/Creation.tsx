import React from "react";
import Form from "../components/Form/Form";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Creation() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
