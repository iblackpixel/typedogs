import React, { MouseEvent, useState } from "react";

type ButtonProps = {
  key: number;
  value: number;
  handleclick: () => void;
};

interface PropsPaginado {
  totalDogs: [];
  paginado: (pageNumbers: number) => void;
}

export default function Paginado({ totalDogs, paginado }: PropsPaginado) {
  const [pagina, setPagina] = useState<number>();
  const handlePage = function (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    const number: number = parseInt(e.currentTarget.value);
    // totalDogs.paginado(number);
    setPagina(number);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDogs.length / 8); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button
                key={number}
                value={number}
                onClick={(e) => {
                  handlePage(e);
                }}
              >
                {number}
              </button>
            );
          })}
      </ul>
    </nav>
  );
}
