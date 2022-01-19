import React, { useContext } from 'react'
import { ThemeContext } from '../UseContext/ThemeContext'

export default function ComponentOne() {
    console.log("Component 1 updated")
    
    const {user, setUser} = useContext(ThemeContext)
    
    return (                
        <>
            <button onClick={() => setUser("Hello")}>Get "hello" from Component 1</button>
            <h2>
                Component 1 - <pre>{JSON.stringify(user, null, 2)}</pre>
            </h2>
        </>
    )
}
