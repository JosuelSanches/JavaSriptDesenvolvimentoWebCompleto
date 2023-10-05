import { useState } from "react";
import Layout from "@/components/Layout";


export default function Estado(){
    const [numero, setNumero] = useState(0)// React Hooks.O estado guarda o valor e uma funcao em um array

    function incrementar(){
        setNumero(numero + 1)
    }
    return(
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>incrementar</button>

        </Layout>
    )
}