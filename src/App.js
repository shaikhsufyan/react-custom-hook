import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart';
import useCount from './Components/useCount';
 

function App() {
  const [num, increment] = useCount();

  return (
     <>
     <h1>{num}</h1>
      <button onClick={increment}>Add</button>
      <Cart/>
     </>
  );
}

export default App;
