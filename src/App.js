import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {

const [mostarFormulario, actualizarMostrar] = useState(true)

const cambiarMostrar = () => {
  actualizarMostrar(!mostarFormulario)
}

  return (
    <div>

      <Header />
      { mostarFormulario === true ? <Formulario/>: <></>}
     
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
    </div>
  );
}

export default App;
