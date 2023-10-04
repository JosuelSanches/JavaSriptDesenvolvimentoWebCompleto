export default function Cabecalho(props){
    //props e somente de leitura
    //caso queira modificalo e preciso mudar o estado
    return(
       <header>
        <h1>{props.titulo}</h1>
       </header>
    )
}