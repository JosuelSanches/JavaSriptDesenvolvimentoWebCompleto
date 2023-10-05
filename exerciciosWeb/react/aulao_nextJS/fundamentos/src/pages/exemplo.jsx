import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export default function exemplo(){
    return(
        <Layout titulo="Usando componentes">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprendendo Next.js na pratica."/>

        </Layout>
    )
}