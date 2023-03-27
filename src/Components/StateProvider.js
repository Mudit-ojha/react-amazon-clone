import React,{createContext, useContext, useReducer} from "react";

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap the app and provide the datalayer to every layer
export const StateProvider = ({
    reducer, initialState, children
}) =>(
    <StateContext.Provider value= {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull the information from the datalayer
export const useStateValue = () => useContext (StateContext);