import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const App = () => {

  /*turn -> variable para el estado
   *setTurn -> función para modificar el estado
   *useState('X') -> inicializar la variable con X
   */
  const [turn, setTurn] = useState('X');

  /*El contenido de los cuadrados*/
  const [squares, setSquares] = useState(Array(9).fill(null));

  /*Para guardar el resultado*/
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  /*Verificar si hay un ganador*/
  const checkForWinner = squares => {
    setTurn(turn === 'X' ? 'O' : 'X'); //Si el turno es de X, cambiar al turno de O. Sino cambiar al turno de X
  }

  /*Cuando se hace click en un cuadrado*/
  const handleClick = square => {
    let newSquares = [...squares]; //copia de los squares en una nueva variable
    newSquares.splice(square, 1, turn); //En la posición elegida (square puede ir de 0 a 8) coloca X o O (depende de turn)
    setSquares(newSquares);

    checkForWinner(newSquares);
  }

  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
