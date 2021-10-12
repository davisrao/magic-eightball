import ANSWERS from './answers';
import { useState } from 'react';
import { choice } from './helpers';
import './Eightball.css';

/** Provides a random answer to your question
 *  
 *  Props: answers
 * 
 *  State: 
 *      - message (string)
 *      - color (string)
 *  
 *  App -> Eightball
 */

function Eightball({ answers=ANSWERS }){
    const [message,setMessage] = useState("Think of a question!");
    const [color, setColor] = useState("black");
    const [answer, setAnswer] = useState({
            msg: "Think of a question!",
            color: "black",
    });

    const style = {
        backgroundColor: color,
    }

    function handleClick() {
        const answer = choice(answers);
        setMessage(answer.msg);
        setColor(answer.color);
        // setAnswer(answer.msg)
    }

    return (
        <div style={style} className="Eightball" onClick={handleClick}>
            <p className="Eightball-message">{message}</p>
        </div>
    )

}

export default Eightball;