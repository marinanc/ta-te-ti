import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

/*Todas las posibles combinaciones para ganar*/
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const App = () => {

  /*turn -> variable para el estado
   *setTurn -> función para modificar el estado
   *useState('X') -> inicializar la variable con X
   */
  const [turn, setTurn] = useState('X');

  /*El contenido de los cuadrados*/
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [winningSquares, setWinningSquares] = useState([]);

  /*Para guardar el resultado*/
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  /*Resetear la partida al terminar*/
  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([])
  }

  /*Verificar si hay un ganador*/
  const checkForWinner = newSquares => {
    for(let i=0; i<winningPositions.length; i++){
      const[a, b, c] = winningPositions[i];
      if(newSquares[a] !== null && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        //hay un ganador
        endGame(newSquares[a], winningPositions[i]);
        return;
      }
    }

    if(!newSquares.includes(null)) {
      //empate
      endGame(null, Array.from(Array(10).keys()));
      return;
    }

    setTurn(turn === 'X' ? 'O' : 'X'); //Si el turno es de X, cambiar al turno de O. Sino cambiar al turno de X
  }

  /*Cuando se hace click en un cuadrado*/
  const handleClick = square => {
    let newSquares = [...squares]; //copia de los squares en una nueva variable
    newSquares.splice(square, 1, turn); //En la posición elegida (square puede ir de 0 a 8) coloca X o O (depende de turn)
    setSquares(newSquares);

    checkForWinner(newSquares);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null); //Para impedir que se pueda seguir clickeando...
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1
      });
    }
    setWinningSquares(winningPositions);

    /*Esperar 2 segundos para resetear la partida*/
    setTimeout(reset, 2000);
  }

  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>
  );
}

export default App;
