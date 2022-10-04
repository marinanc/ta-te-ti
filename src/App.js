import { useState } from 'react';
import './App.css';

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

  return (
    <div className="container">
      
    </div>
  );
}

export default App;
