import React, { useEffect, useState, useMemo } from 'react'

export default function UseMemo() {
    
    const [ number, setNumber ] = useState(0)
    const [ dark, setDark ] = useState(false)
    
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    }, [dark])
    
    useEffect(() => {
        console.log("Theme changed")
    }, [themeStyles])
    
    return (
        <div>
            <input 
                type="number" 
                value={number} 
                onChange={e => setNumber(parseInt(e.target.value))} 
            />
            <button 
                onClick={e => setDark(prevDark => !prevDark)}
            >
                Change theme
            </button>
            <div style={themeStyles}>
                {doubleNumber}
            </div>
        </div>
    )
}

function slowFunction(number) {
    for (let i = 0; i < 1000000000; i++) {}
    return number*2
}