import ANSWERS from './answers';
import { useState } from 'react';
import { choice } from './helpers'

function Eightball({answers = ANSWERS}){
    const [message,setMessage] = useState("Think of a question!");
    const [color, setColor] = useState("black");

    //return html with defaults, on click choice of random color
    // and random message

}