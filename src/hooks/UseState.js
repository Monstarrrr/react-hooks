import React, { useState } from 'react';

export default function UseStateExample() {
    const [state, setState] = useState({ count: 0,theme: "blue"})
    const count = state.count
    const theme = state.theme
    
    function incrementCount() {
        setState(prevState => {
            return { 
                ...state,
                count: prevState.count + 1 
            }
        })
    }
    
    function decrementCount() {
        setState(prevState => {
        return {
            ...state,
            count: prevState.count - 1
        }
        })
    }
    
    return (
        <div className="UseState">
        <button onClick={incrementCount}>+</button>
        <span>{count}{theme}</span>
        <button onClick={decrementCount}>-</button>
        </div>
    );
}