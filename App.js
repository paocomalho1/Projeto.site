import React, { Component } from 'react';
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Cabecalho from './components/cabecalho';
import Clientes from './components/clientes';
import Corpo from './components/corpo';
import Rodape from './components/rodape';

class App extends Component {

   
  render() { 
    return (
      <>
        <Cabecalho/>
        <main>
        <Corpo/>
        <Clientes/>
        </main>
        <Rodape/>
      </>
    );
  }
}
 
export default App;
