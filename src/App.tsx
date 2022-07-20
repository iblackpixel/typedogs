import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Creation from "./pages/Creation";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dogs/:id' element={<Detail />} />
        <Route path='/dog' element={<Creation />} />
      </Routes>
    </div>
  );
}

export default App;
