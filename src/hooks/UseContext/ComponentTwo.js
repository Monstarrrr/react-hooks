import React, { useContext } from 'react'
import { ThemeContext } from '../UseContext/ThemeContext'
import {login} from './login'

export default function ComponentOne() {
    console.log("Component 2 updated")
    
    const {user, setUser} = useContext(ThemeContext)
    
    return (                
        <>
            <button onClick={async () => {
                const user = await login();
                setUser(user)
            }}>
                Get user from API
            </button>
            
            <h2>
                Component 2 - <pre>{JSON.stringify(user, null, 2)}</pre>
            </h2>
        </>
    )
}
