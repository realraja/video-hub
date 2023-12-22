


import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const globalContext = createContext();

const GlobalIndex = ({children}) => {

    const [course,setCourse] = useState('raja') 

    useEffect(()=>{        
      let courseId = Cookies.get('course');

      setCourse(courseId)
   },[setCourse])
  return (
    <globalContext.Provider value={{course,setCourse}}>
      {children}
    </globalContext.Provider>
  )
}

export default GlobalIndex
