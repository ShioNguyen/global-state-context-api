import React, { useContext } from 'react';
import { GlobalContext } from '../store/Provider';

export default function Navbar() {

    const { todoState } = useContext(GlobalContext);
    return (
        <div className="navbar">
            <h1>Todo App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {todoState.todos.length}</li>
            </ul>
        </div>
    )
}
