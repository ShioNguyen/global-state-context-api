
import {ADD_TODO} from '../types/todoTypes';

export const addTodo = (newTodo) => (dispatch) => {
    dispatch({ type: ADD_TODO, payload: newTodo });
}
