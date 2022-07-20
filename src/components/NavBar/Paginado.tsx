import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

type ButtonProps = {
  key: number;
  value: number;
  handleclick: () => void;
};

interface PropsPaginado {
  totalDogs: number;
  paginado: (pageNumbers: number) => void;
}
const PageContainer = styled.nav`
  height: 8vh;
`;
const PageList = styled.ul`
  margin: 0.2vh;
  padding-inline-start: 2vw;
`;
const PageButton = styled.button`
  background-color: ${colors.secundary};
  color: ${colors.primary};
  border: solid 1px ${colors.primary};
  border-radius: 8px;
  transition: 0.6s;
  &:hover {
    background-color: ${colors.primary};
    border-radius: 8px;
    color: black;
    border: solid 1px ${colors.secundary};
  }
  &:visited {
    /* color: ${colors.secundary}; */
    text-decoration: none;
  }
  @media screen and (max-width: 360px) {
    width: 8vw;
    padding: 0;
  }
`;

export default function Paginado({ totalDogs, paginado }: PropsPaginado) {
  const [pagina, setPagina] = useState<number>();
  const handlePage = function (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    const number: number = parseInt(e.currentTarget.value);
    paginado(number);
    setPagina(number);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDogs / 8); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageContainer>
      <PageList>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <PageButton
                key={number}
                value={number}
                onClick={(e) => {
                  handlePage(e);
                }}
              >
                {number}
              </PageButton>
            );
          })}
      </PageList>
    </PageContainer>
  );
}
