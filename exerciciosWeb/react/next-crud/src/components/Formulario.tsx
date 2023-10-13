import { useState } from "react";

import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto="Codigo" 
                    valor={id}
                    className="mb-4"
                    />
            ) : false}
            <Entrada
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
                />
            <Entrada
                texto="Idade" 
                tipo="number" 
                valor={idade} 
                valorMudou={setIdade}
                className="mb-4"
                />
                <div className=" flex justify-end mt-7">
                    <Botao className="mr-2 bg-gradient-to-r from-yellow-500 to-yellow-400"
                        onClick={()=> props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? 'alterar' : 'Salvar'}
                    </Botao>
                    <Botao className="bg-gradient-to-r from-red-500 to-red-700"  onClick={props.cancelado} >
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}