import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../store/Provider';
import { completeTodo, deleteTodo } from '../store/actions/todoActions';

import TodoForm from './TodoForm';

export default function Todos() {

    const { todoState, todoDispatch } = useContext(GlobalContext);

    const [todos, setTodos] = useState([]);

    function handleDelete(id) {
        deleteTodo(id)(todoDispatch);
    }

    function handleComplete(id) {
        completeTodo(id)(todoDispatch);
    }

    useEffect(() => {
        setTodos(todoState.todos);
    }, [todoState.todos]);

    return (
        <div className='todo-list'>
            <TodoForm/>
            <ul>
                {todos.length > 0 && todos.map(todo => {
                    return (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}> 
                            {todo.title}
                            <input type="checkbox" onChange={() => handleComplete(todo.id)}/>
                            <button onClick={() => handleDelete(todo.id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
