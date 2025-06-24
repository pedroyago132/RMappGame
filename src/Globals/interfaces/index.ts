
export interface Character {
  id: number;
  name: string;
  status: string
  species: string;
  type: string;
  gender: string
  origin: LocationAndOrigin;
  location: LocationAndOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface LocationAndOrigin {
  name: string;
  url: string;
}


export interface DetalhesCliente {
  email: string;
  nascimento: string;
}

export interface Venda {
  data: string;
  valor: number;
}

export interface EstatisticasCliente {
  vendas: Venda[];
}

export interface InfoCliente {
  nomeCompleto: string;
  detalhes: DetalhesCliente;
}

export interface Cliente {

  info: InfoCliente;
  estatisticas: EstatisticasCliente;
  
}

export interface Meta {
  registroTotal: number;
  pagina: number;
}

export interface Redundante {
  status: string;
}


export interface ApiResponseClient {
  data: {
    clientes: Cliente[];
  };
}