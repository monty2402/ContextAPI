import React from "react";
import { useContext } from 'react';
import counterContext from '../Context/CounterContext'

export default function Counter(){
    const counterState = useContext(counterContext);
    return(
        <div>
            <button onClick={(click) => {
                counterState.setCount(counterState.count+1)}}>increment</button>
        </div>
    )
}