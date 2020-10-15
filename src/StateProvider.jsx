import React, { createContext, useContext, useReducer } from 'react'
import ReducerComp from './reducer'

const initialState = {
    basket: [],
    user: null
  };
  export const StateContext = createContext();

export const StateProvider = ({ children }) =>{
const [state, dispatch] = useReducer(ReducerComp, initialState);
     
    return(
    <StateContext.Provider value={{
        state,
        dispatch
        
        }}>
        {children}
    </StateContext.Provider>
);
}

export const useStateValue = () => useContext(StateContext);