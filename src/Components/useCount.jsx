import React from 'react'
import { useEffect, useState } from 'react';


const useCount = () => {
    const [num, setNum] = useState(0);

    useEffect(()=>{
        if(num >=1){
          document.querySelector("title").innerHTML="msg"+"("+num+") ";
        }
      })
    const increment = () =>{
        return(
            setNum(num+1)
        )
    }
     return [num, increment]
}

export default useCount