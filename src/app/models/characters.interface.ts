export interface Characters {
  count: number;
  next: string;
  previous: null;
  results: Character[];
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: 'female' | 'male' | 'n/a';
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string | Date;
  edited: string | Date;
  url: string;
}
