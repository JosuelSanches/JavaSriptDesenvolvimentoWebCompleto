import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import React, { useEffect, useState } from 'react';
import useClientes from "../hooks/useClientes";

export default function Home() {

  const {clientes,
    cliente,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    novoCliente ,
    tabelaVisivel,
    exibirTabela
  
  } = useClientes()
 
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
          {tabelaVisivel? (

          <>
          <div className="justify-end flex">
          <Botao className="mb-4"
          onClick={novoCliente}>
            Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes}
          clienteSelecionado={selecionarCliente}
          clienteExcluido={excluirCliente}></Tabela>
          </>
          ):(
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
          )}
          </Layout>
    </div>
  )
}
