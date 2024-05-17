import React, { useState } from "react";
import { createContext } from "react";

const counterContext = createContext();

export const CounterProvider = (props) => {
    const [count , setCount] = useState(0);
    const value = {count , setCount}
    return(
        <counterContext.Provider value={value}>
            {props.children}
        </counterContext.Provider>
    )
}
export default counterContext;