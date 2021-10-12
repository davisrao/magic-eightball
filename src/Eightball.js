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
    const defaultAnswer = {msg:"Think of a question!",color: "black"};
    // including set use state for message/color as alternate answer
    // const [message,setMessage] = useState("Think of a question!");
    // const [color, setColor] = useState("black");
    const [answer, setAnswer] = useState(defaultAnswer);

    const style = {
        backgroundColor: answer.color,
    }

    function handleClick() {
        // commented lines below are alternate solutions
        // const answer = choice(answers);
        // setMessage(answer.message);
        // setColor(answer.color);
        setAnswer(choice(answers))
    }

    function resetEightBall(){
        setAnswer(defaultAnswer)
    }

    return (
        <div>
        <div style={style} className="Eightball" onClick={handleClick}>
            <p className="Eightball-message">{answer.msg}</p>
        </div>
        <button className="Eightball-button" onClick={resetEightBall}>Reset My Fortune</button>
        </div>
    )

}

export default Eightball;