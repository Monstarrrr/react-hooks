import React, { useMemo, useState } from 'react';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseContext from './hooks/UseContext/UseContext';
import { ThemeContext } from './hooks/UseContext/ThemeContext'

function App() {
  
  const [ user, setUser ] = useState('')
  
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      <ThemeContext.Provider value={{ user, setUser }}>
        <UseContext />
      </ThemeContext.Provider>

    </div>
  )
}

export default App;
