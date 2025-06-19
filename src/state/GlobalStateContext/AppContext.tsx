import React, { createContext, JSX, useContext, useReducer } from 'react';
import {  Action,CharactersState, CharactersContextType } from '../../Globals/types';
import { GET_CHARACTERS_SUCESS_ENUM } from '../actions/CharacterActions';
import { Character} from '../../Globals/interfaces';

const AppContext = createContext<CharactersContextType | undefined>(undefined);

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
  nextPage: null,
  hasMore: true,
};
const reducer = (state: CharactersState = initialState, action: Action): CharactersState => {
  switch (action.type) {
    case GET_CHARACTERS_SUCESS_ENUM:
      return {
        ...state,
        loading: false,
        characters: [...state.characters, ...action.payload.characters],
        nextPage: action.payload.nextPage,
        hasMore: !!action.payload.nextPage
      };
    default:
      return state;
  }
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchCharacters = async (): Promise<void> => {
    
    try {
      const url = state.nextPage || 'https://rickandmortyapi.com/api/character';
      const response = await fetch(url);
      const data = await response.json();
      
      dispatch({
        type: GET_CHARACTERS_SUCESS_ENUM,
        payload: {
          characters: data.results,
          nextPage: data.info.next
        }
      });
      
      console.log('Personagens::::::::',data)
      return data.results;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw error;
    }
  };
 
  return (
    <AppContext.Provider value={{ state, fetchCharacters}}>
      {children}
    </AppContext.Provider>
  );
}