import React, { useState, useEffect } from 'react';

export default function UseEffect() {
    const [ resourceType, setResourceType ] = useState('posts')
    const [ items, setItems ] = useState([])
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
    
    // API CALL
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])
    
    // WINDOW RESIZE
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    
    // CLEANUP WITH RETURN FUNCTION
    useEffect(() => {
        console.log('Something in useEffect')
        return () => ( // has to be a function
            console.log("Something in return useEffect (clean up)")
        )
    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>POSTS</button>
                <button onClick={() => setResourceType('users')}>USERS</button>
                <button onClick={() => setResourceType('comments')}>COMMENTS</button>
            </div>
            <h1>
                {resourceType}
            </h1>
            <h2>{windowWidth}</h2>
            {/* 
                Important: Do not use the index as the map() key, use an id instead! 
            */}
            {items.map(item => {
                return (
                    <pre key={item.id}>{JSON.stringify(item)}</pre>
                )
            })}
        </>
    )
}