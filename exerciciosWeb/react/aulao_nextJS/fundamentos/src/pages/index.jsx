import Navegador from "@/components/Navegador"
import { wrap } from "lodash"

export default function Inicio(){
    return (
        <div>    
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            height: '10vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#a5d23d"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegacao #01" destino="/navegacao" cor="#33d9ad"/>
        </div>
        <div style={{
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'end',
            padding:'0px 20px',
            height:'80vh',
            flexDirection:'column'
        }}>
        <h1 className="m-8">Fundamentos de Next.js & React</h1>
        <br />
        <h2 className="m-8">Vamos estudar esse Framework.</h2>
        </div>
        </div>
    )
}