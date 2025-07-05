import React from 'react';
import { ClienteCard, TextContainer, Nome, Email, VendasCount } from './styles'; // Ajuste os imports conforme sua estrutura
import { Cliente } from '../../Globals/interfaces';
import { PropsCardComponent } from '../../pages/Graphs';
import { Props } from '../../Globals/types';


export const ClienteComMaisNumeroDeVenda: React.FC<Props>  = ({navigation ,clienteMaisVenda}) => {


  return (
    <ClienteCard 
      onPress={() => navigation.navigate('ClienteDetail', { cliente: clienteMaisVenda })}
    >
      <TextContainer>
        <Nome>{clienteMaisVenda.info.nomeCompleto}</Nome>
        <Email>{clienteMaisVenda.info.detalhes.email}</Email>
        <VendasCount>
          {clienteMaisVenda.estatisticas.vendas.length} vendas
        </VendasCount>
      </TextContainer>
    </ClienteCard>
  );
};