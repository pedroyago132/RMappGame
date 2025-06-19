import { Character } from '../../Globals/interfaces/index';
import { CharactersState } from '../../Globals/types';

// Normalmente faço uso dessas "Enums" em meus códigos, mas seguindo as isntruções preparei esse modelo
//mais focado em manutabilidade e sustenção

export const GET_CHARACTERS_SUCESS_ENUM = 'GET_CHARACTERS_SUCCESS' ;


export const getCharactersSuccess = (characters: Character[], nextPage: string | null) => ({
  type: GET_CHARACTERS_SUCESS_ENUM,
  payload: {
    characters,
    nextPage
  }
});


// Tipo unificado de todas as actions
export type CharacterActions = 
  | ReturnType<typeof getCharactersSuccess>
