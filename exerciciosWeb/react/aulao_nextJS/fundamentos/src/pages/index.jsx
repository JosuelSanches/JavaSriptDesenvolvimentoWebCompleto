import Link from 'next/link'

export default function Inicio(){
    return (
        <div>
            <Link href='/estiloso'>Estiloso</Link>
            <h1 className="m-8">Fundamentos de Next.js & React</h1>
            <h2 className="m-8">Vamos estudar esse Framework.</h2>
        </div>
    )
}