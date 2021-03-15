import React, { useContext, useState } from 'react';
import { GlobalContext } from '../store/Provider';
import { addTodo } from '../store/actions/todoActions';

export default function TodoForm() {
    
    const {todoDispatch} = useContext(GlobalContext);

    const [title, setTitle] = useState('');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newTodo = {
            id: new Date().getTime().toString(),
            title,
            completed: false,
        }
        addTodo(newTodo)(todoDispatch);
        setTitle('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
}
