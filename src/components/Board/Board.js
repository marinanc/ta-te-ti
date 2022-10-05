const Board = ({squares}) => {
    
    /*Función que recibe un conjunto de valores, y mapea cada valor a un elemento HTML*/
    const createSquares = values => (
        values.map( value => (
            <div>{value}</div>
        ))
    );

    return (
        <div className="board">
            <div className="row">
                {createSquares([0,1,2])}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>
        </div>
    );
}

export default Board;