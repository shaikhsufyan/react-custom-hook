import React from 'react'
import { useEffect, useState } from 'react';
import useCount from './useCount';


const Cart = () => {
    
    const [num, increment] = useCount()
  
    return (
       <>
       <h1>{num}</h1>
        <button onClick={increment}>CartMsg</button>
       </>
    );
}

export default Cart