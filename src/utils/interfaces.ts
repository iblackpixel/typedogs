export interface ReducerState {
  dogs: JSON[];
  temperaments: JSON[];
  breed: JSON[];
}

export interface NewBreed {
  name: string;
  height: string;
  weight: string;
  lifespan: string;
  temperaments: string[];
}

export interface GetDog {
  id: number;
  name: string;
  image: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperament: string;
}

export interface GetBreed {
  id: number;
  name: string;
  image: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperament: string;
  temperaments: string;
}
export interface GetTemperament {
  temperament: string;
  id: string;
}
