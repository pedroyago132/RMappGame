import React, { createContext, JSX, useContext, useReducer } from 'react';
import { Action, CharactersState, CharactersContextType } from '../../Globals/types';
import { GET_CHARACTERS_SUCESS_ENUM, GET_GRAPHS_DETAIL } from '../actions/CharacterActions';
import { Character } from '../../Globals/interfaces';

const AppContext = createContext<CharactersContextType | undefined>(undefined);

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
  nextPage: null,
  hasMore: true,
  days: [{
    day: '',
    infoDays: {
      valueSell: 0,
      mostClientBuyerName: '',
      mostValueClientPerBuyName: '',
      mostFrequencyBuyClientName: ''

    }
  }],
  clients: {
    data: {
      clientes: [
        {

          info: {
            nomeCompleto: "Ana Beatriz",
            detalhes: {
              email: "ana.b@example.com",
              nascimento: "1992-05-01"
            }
          },
          estatisticas: {
            vendas: [
              { data: "2024-01-01", valor: 150 },
              { data: "2024-01-02", valor: 50 },
              { data: "2024-01-03", valor: 50 },
              { data: "2024-01-04", valor: 50 }
            ]
          },

        },

        {
          info: {
            nomeCompleto: "Pedro yago",
            detalhes: {
              email: "ana.b@example.com",
              nascimento: "1992-05-01"
            }
          },
          estatisticas: {
            vendas: [
              { data: "2024-01-02", valor: 500 },
              { data: "2024-01-01", valor: 250 }
            ]
          },
        },

        {
          info: {
            nomeCompleto: "Kimberly",
            detalhes: {
              email: "ana.b@example.com",
              nascimento: "1992-05-01"
            }
          },
          estatisticas: {
            vendas: [
              { data: "2024-01-05", valor: 100 },
              { data: "2024-01-05", valor: 90 }
            ]
          },

        }

      ],

    },
  }
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

       case GET_GRAPHS_DETAIL:
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

      console.log('Personagens::::::::', data)
      return data.results;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw error;
    }
  };

    // 1. Retorna apenas o nome do cliente com maior número de vendas
   const getNomeClienteComMaisVendas = ():  string => {
    if (!state?.clients?.data?.clientes?.length) return 'Nenhum cliente encontrado';
    
    const cliente = state.clients.data.clientes.reduce((prev, current) => 
      (prev.estatisticas.vendas.length > current.estatisticas.vendas.length) 
        ? prev 
        : current
    );

    //acioanr reducer::::::
    return cliente.info.nomeCompleto;
  };

    // 3. Retorna apenas o nome do cliente com maior frequência de compras
    const getNomeClienteComMaiorFrequencia = (): string=> {
      if (!state?.clients?.data?.clientes?.length) return 'Nenhum cliente encontrado';
      
      let clienteMaiorFreq: any
      let maxFrequencia = 0;
      
      state.clients.data.clientes.forEach(cliente => {
        const freqPorData: Record<string, number> = {};
        let maxFreqCliente = 0;
        
        cliente.estatisticas.vendas.forEach(venda => {
          freqPorData[venda.data] = (freqPorData[venda.data] || 0) + 1;
          if (freqPorData[venda.data] > maxFreqCliente) {
            maxFreqCliente = freqPorData[venda.data];
          }
        });
        
        if (maxFreqCliente > maxFrequencia) {
          maxFrequencia = maxFreqCliente;
          clienteMaiorFreq = cliente;
        }
      });
      
      return clienteMaiorFreq.info.nomeCompleto 
    };

  return (
    <AppContext.Provider value={{ state, fetchCharacters,getNomeClienteComMaisVendas,getNomeClienteComMaiorFrequencia }}>
      {children}
    </AppContext.Provider>
  );
}