import React, { useState, useEffect, ReducerState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import Footer from "../components/NavBar/Footer";
import NavBar from "../components/NavBar/NavBar";
import Paginado from "../components/NavBar/Paginado";
import { getDogs, getTemperaments } from "../actions/actions";
import styled from "styled-components";
import { GetDog, GetTemperament } from "../utils/interfaces";
import { colors } from "../utils/theme";

interface RootState {
  dogs: GetDog[];
}
interface RootTemps {
  temperaments: GetTemperament[];
}
const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://i.ibb.co/7gHY2FH/perros2amplio.jpg");
`;
const FilterTopContainer = styled.div`
  widht: 80%;
`;
const FilterContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
const DogContainer = styled.div`
  height: 72vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vh;
  align-items: center;
  justify-items: center;
  border: 2px;
  padding: 3px;
  &::-webkit-scrollbar {
    width: 0.4rem;
    background-color: ${colors.ulprimary};
    border: 1px solid ${colors.filledPrimary};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secundary};
    border-radius: 3px;
  }
  @media screen and (max-width: 760px) {
    width: 92vw;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5vh;
    overflow-x: auto;
  }
  @media screen and (max-width: 560px) {
    width: 94vw;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.3vh;
    overflow-x: auto;
  }
  @media screen and (max-width: 360px) {
    width: 94vw;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5vh;
    overflow-x: auto;
  }
`;
export default function Home() {
  const dispatch = useDispatch<any>();
  const allDogs = useSelector((state: RootState) => state.dogs);
  const allTemperaments = useSelector((state: RootTemps) => state.temperaments);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [door, setDoor] = useState(0);
  const [door2, setDoor2] = useState(1);
  const [totalDogs, setTotalDogs] = useState<any>([]);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const filtDogs = [...allDogs].sort(function (a, b): number {
      if (b.name > a.name) return -1;
      if (b.name < a.name) return 1;
      return 0;
    });
    setTotalDogs(filtDogs);
  }, [setTotalDogs, allDogs]);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDog = currentPage * 8;
  const indexOfFirstDog = indexOfLastDog - 8;

  const paginado = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  const handleSelect = function (e: { target: { value: string } }) {
    // eslint-disable-next-line array-callback-return
    const filteredTemp = allDogs.filter((d) => {
      if (d.temperament) {
        if (d.temperament.includes(e.target.value)) return d;
      }
    });

    setTotalDogs(filteredTemp);
  };

  const handleWeightSort = function () {
    if (door === 0) {
      const byWeight = [...totalDogs].sort(function (a, b) {
        return a.weight.slice(-2) - b.weight.slice(-2);
      });
      setTotalDogs(byWeight);
      setDoor(1);
    } else {
      // eslint-disable-next-line array-callback-return
      const filtDogs = [...totalDogs].sort(function (a, b) {
        if (b.name > a.name) return -1;
        if (b.name < a.name) return 1;
        return 0;
      });
      setTotalDogs(filtDogs);
      setDoor(0);
    }
  };

  const handleChecked = function () {
    if (checked === false) {
      if (checked2 === false) {
        const filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === false
        );
        setTotalDogs(filteredBreeds);
        if (door === 1) {
          handleWeightSort();
        }
      } else {
        setTotalDogs(allDogs);
        if (door === 1) {
          handleWeightSort();
        }
      }
      return setChecked(true);
    } else {
      if (checked2 === false) {
        setTotalDogs(allDogs);
        if (door === 1) {
          handleWeightSort();
        }
      } else {
        const filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === true
        );
        setTotalDogs(filteredBreeds);

        if (door === 1) {
          handleWeightSort();
        }
      }
      return setChecked(false);
    }
  };
  const handleChecked2 = function () {
    if (checked2 === false) {
      if (checked === false) {
        const filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === true
        );
        setTotalDogs(filteredBreeds);
        if (door === 1) {
          handleWeightSort();
        }
      } else {
        setTotalDogs(allDogs);
        if (door === 1) {
          handleWeightSort();
        }
      }
      return setChecked2(true);
    } else {
      if (checked === false) {
        setTotalDogs(allDogs);
      } else {
        const filteredBreeds = allDogs.filter(
          (p) => p.id.toString().includes("b") === false
        );
        setTotalDogs(filteredBreeds);
        if (door === 1) {
          handleWeightSort();
        }
      }
      return setChecked2(false);
    }
  };
  const onSearch = function (breed: string) {
    if (breed.length) {
      const searchedBreeds = [...allDogs].filter((e) =>
        e.name.toLowerCase().includes(breed.toLowerCase())
      );
      if (searchedBreeds.length === 0)
        alert("No existe ninguna raza que coincida");
      setTotalDogs(searchedBreeds);
    }
  };

  return (
    <ContainerPrincipal>
      <NavBar />
      <FilterTopContainer>
        <div>
          <div>
            {door === 0 ? (
              <button onClick={() => handleWeightSort()}>Peso</button>
            ) : (
              <button onClick={(door) => handleWeightSort()}>A-Z</button>
            )}
            {door2 === 1 ? (
              <button
                onClick={() => {
                  setDoor2(0);
                }}
              >
                Ascendente
              </button>
            ) : (
              <button
                onClick={() => {
                  setDoor2(1);
                }}
              >
                Descendente
              </button>
            )}
          </div>
          <div>
            <label>
              <input
                type='checkbox'
                checked={checked}
                onChange={handleChecked}
              />
              Razas Conocidas
            </label>
            <label>
              <input
                type='checkbox'
                checked={checked2}
                onChange={handleChecked2}
              />
              Nuevas Razas
            </label>
          </div>

          <div>
            <select
              name='temperaments'
              placeholder='Filtre por temperamento'
              onChange={handleSelect}
            >
              <option key={"h"} value={"default"}>
                Filtre por temperamento
              </option>
              {allTemperaments.map((e) => {
                return (
                  <option key={e.id} value={e.temperament}>
                    {e.temperament}
                  </option>
                );
              })}
            </select>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Filtros Off
            </button>
          </div>
        </div>
      </FilterTopContainer>
      <DogContainer>
        {door2 === 1
          ? totalDogs
              .slice(indexOfFirstDog, indexOfLastDog)
              .map(
                (e: {
                  id: string;
                  name: string;
                  weight: string;
                  image: string;
                  temperament: string | undefined;
                }) => {
                  return (
                    <Card
                      key={e.id}
                      id={e.id}
                      name={e.name}
                      weight={e.weight}
                      image={e.image}
                      temperaments={e.temperament}
                      height={""}
                      lifeSpan={""}
                    />
                  );
                }
              )
          : totalDogs
              .slice(
                totalDogs.length -
                  (indexOfLastDog < totalDogs.length
                    ? indexOfLastDog
                    : totalDogs.length),
                totalDogs.length - indexOfFirstDog
              )
              .reverse()
              .map(
                (e: {
                  id: string;
                  name: string;
                  weight: string;
                  image: string;
                  temperament: string | undefined;
                }) => {
                  return (
                    <Card
                      key={e.id}
                      id={e.id}
                      name={e.name}
                      weight={e.weight}
                      image={e.image}
                      temperaments={e.temperament}
                      height={""}
                      lifeSpan={""}
                    />
                  );
                }
              )}
      </DogContainer>
      <Paginado totalDogs={totalDogs.length} paginado={paginado} />
      <Footer />
    </ContainerPrincipal>
  );
}
