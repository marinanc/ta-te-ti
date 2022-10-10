import classNames from 'classnames';
import './Square.css';

const Square = ({ value, onClick, turn, winner }) => {

    const handleClick = () => {
        (turn !== null && value === null) && onClick(); //Si es el turno de alguien y si value es null (es decir, no es X ni 0), ejecutar onClick
    }

    let squareClass = classNames({
        square: true,
        [`square--${value}`]: value !== null, //solamente si value es distino de null
        winner: winner
    });

    return(
        <div className={squareClass} onClick={() => handleClick()}>

        </div>
    )
}

export default Square;