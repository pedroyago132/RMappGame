import { RouteProp } from "@react-navigation/native";
import { ApiResponseClient, Character, Cliente, InfoCliente } from "../interfaces";

export type CharactersContextType = {
  state: CharactersState;
  fetchCharacters: () => Promise<void>;
  getNomeClienteComMaisVendas: () => string;
  getNomeClienteComMaiorFrequencia: () => string;
};

type Venda = {
  data: string;
  valor: number;
};

type Estatisticas = {
  vendas: Venda[];
};

type DetalhesCliente = {
  email: string;
  nascimento: string;
};
type ClientsData = {
  clientes: Cliente[];
};

type AppState = {
  clients: {
    data: ClientsData;
  };
 
};

// Props do componente (caso receba o state por props)
export type ClientesAnalyticsProps = {
  state: AppState;
};


export type CharactersState = {
  characters: Character[];
  loading: boolean;
  error: string | null;
  nextPage: string | null;
  hasMore: boolean;
  days: [{
    day: string,
    infoDays: {
      valueSell: number,
      mostClientBuyerName: string,
      mostValueClientPerBuyName: string,
      mostFrequencyBuyClientName: string
    }
  }],
  clients:ApiResponseClient
};

export type CharacterPropsPageView = {
  character: any;
  route(): void;
  navigate(): void;
};

export type ClienteDetailRouteProp = RouteProp<StackParamListDataClient, 'ClienteDetail'>;

export type ClienteDetailProps = {
  route: ClienteDetailRouteProp;
  navigation: any; // Ou use o tipo específico de navegação
};

export type RootStackParamList = {
  navigate(): void;
  Home: undefined;
  ClientesList: undefined;
  ClientesDetail: { cliente: Cliente,item:any };
};

// Extend o tipo global para usar em qualquer lugar
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type StackParamListDataClient = {

      Home:undefined;
  ClientesList: undefined;
  ClienteDetail: { cliente: Cliente};
  Graphs:{cliente:Cliente};
};

export type StackParamListDataClientDetail = {

      Home:undefined;
  ClientesList: undefined;
  ClienteDetail: { item:any };
  Graphs:{cliente:Cliente};
};

export type Action =
  | {
    type: 'GET_CHARACTERS_SUCCESS'; payload: {
      characters: Character[];
      nextPage: string | null;
    }
  } | {
    type: 'GET_GRAPHS_DETAIL'; payload: {
      characters: Character[];
      nextPage: string | null;
    }
  }