import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  //Lo ponemos con un if para q no devuelva undefined si apretamos el = 
  //Sin haber apretado otro numero u operador antes.
  const calcularResultado = () => {
    if(input) { 
      setInput(evaluate(input))
    } else {
      alert('Por favor ingrese valores para realizar los calculos!')
    }
  }


  return (
    <div className="App">
      <div className='fcc-logo-container'>
        <img
          src={freeCodeCampLogo}
          className='fcc-logo'
          alt='Logo de Free Code Camp' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>

        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >
            CLEAR
          </BotonClear>
        </div>
        <div className='footer'> 
        <p>&copy;Sebastian Paternostro 2023</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
