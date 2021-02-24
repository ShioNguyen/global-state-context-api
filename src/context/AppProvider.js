import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    readlist: localStorage.getItem('readlist')
        ? JSON.parse(localStorage.getItem('readlist'))
        : [],

    read: localStorage.getItem('read')
        ? JSON.parse(localStorage.getItem('read'))
        : [],
}

const AppContext = createContext(initialState);

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem('readlist', JSON.stringify(state.readlist));
        localStorage.setItem('read', JSON.stringify(state.read));
    }, [state]);

    const addBookToReadlist = (book) => {
        dispatch({type: 'ADD_BOOK_TO_READLIST', payload: book});
    }
    const addBookToRead = (book) => {
        dispatch({type: 'ADD_BOOK_TO_READ', payload: book});
    }

    return (
        <AppContext.Provider value={{
            readlist: state.readlist,
            read: state.read,
            addBookToReadlist,
            addBookToRead,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};
