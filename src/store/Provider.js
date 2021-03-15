import React, { createContext, useReducer } from 'react';
import todoInitialState from './initialStates/todoInitialState';
import todoReducer from './reducers/todoReducer';

const GlobalContext = createContext();

const Provider = ({ children }) => {
    
    const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);

    return (
        <GlobalContext.Provider value={{
            todoState,
            todoDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export {
    GlobalContext,
    Provider
}
