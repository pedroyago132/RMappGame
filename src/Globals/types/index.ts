import { Character } from "../interfaces";

export type CharactersContextType = {
  state: CharactersState;
  fetchCharacters: () => Promise<void>;
};

export type CharactersState = {
  characters: Character[];
  loading: boolean;
  error: string | null;
  nextPage: string | null;
  hasMore: boolean;
};

export type RootStackParamList = {
  navigate(): void;
  Home: undefined;
  charactersList:undefined;
};

// Extend o tipo global para usar em qualquer lugar
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type Action = 
  | { type: 'GET_CHARACTERS_SUCCESS'; payload: {
        characters: Character[];
        nextPage: string | null;
      } }