import React, { useState } from "react";

export default function SearchBar(onSearch: (value: string) => string[]) {
  const [breed, setBreed] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(breed);
      }}
    >
      <input
        type='text'
        placeholder='Buscar Raza...'
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button type='submit'>Buscar</button>
    </form>
  );
}
