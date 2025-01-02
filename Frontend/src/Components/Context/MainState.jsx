import React ,{useState, useContext, useReducer} from 'react'
import { cartReducer } from '../Reducer/Reducer'


const MainContext = createContext() 

const [state, dispatch] = useReducer(cartReducer,
    {
        products: products,
        cart: []
    }

)

const MainState = () => {
  return (
  <MainContext.Provider value={{state, dispatch}}>
     {props.children}
  </MainContext.Provider>
  )
}

export default MainState
