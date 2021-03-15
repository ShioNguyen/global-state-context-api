import React, { createContext, useReducer } from 'react';
import todoInitialState from './initialStates/todoInitialState';
import todoRedcuer from './reducers/todoReducer';

export const GlobalContext = createContext();

export const Provider = ({children}) => {

    const [todoState, todoDispatch] = useReducer(todoRedcuer, todoInitialState);

    return (
        <GlobalContext.Provider value={{
            todoState,
            todoDispatch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
