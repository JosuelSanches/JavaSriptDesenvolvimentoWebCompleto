import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Anna Beatriz De Souza Carvalho', 34, '1'),
    new Cliente('Bia Monteiro Leao', 45, '2'),
    new Cliente('Carlos Renk Louzada', 23, '3'),
    new Cliente('Pedro Henrique Mendes Filho', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.idade)
  }
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
      `}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
        </Layout>
    </div>
  )
}
