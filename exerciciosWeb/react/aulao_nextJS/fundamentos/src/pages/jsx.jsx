export default function JSX(){
    const titulo =  <h1 className="m-9">JSX e um conceito central</h1>
    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }
    return (
        <div>
            {titulo}
            {subtitulo()}
            
            <h3>{JSON.stringify({nome: `Joao`, idade: 30})}</h3>
        </div>
    )
}