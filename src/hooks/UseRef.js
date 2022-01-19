import React, { useState, useRef, useEffect } from 'react'

export default function UseRef() {
    const countRef = useRef(0);
  
    // ONCLICK
    const handle = () => {
      countRef.current++;
      console.log(`Clicked ${countRef.current} times`);
    };
    
    console.log('I rendered!'); // Rendered once
    
    return (
        <button onClick={handle}>Click me</button>
    )
}
