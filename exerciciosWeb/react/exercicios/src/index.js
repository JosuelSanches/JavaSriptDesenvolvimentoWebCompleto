import React from 'react'
import ReactDOM from 'react-dom'

//import { BoaTarde, BoaNoite } from './componentes/multiplos'
import NomeQEuQuiser from './componentes/multiplos'

import BomDia from './componentes/BomDia'
    ReactDOM.render(
        <div>
            <BomDia nome="Carlos Almeida" />
            <NomeQEuQuiser.BoaTarde nome="Bruna Souza"/>
            <NomeQEuQuiser.BoaNoite nome="Joao Benute"/>
        </div>
    , document.getElementById('root'))