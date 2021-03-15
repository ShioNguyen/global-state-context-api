import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS } from '../types/todoTypes';

const getTodos = () => (dispatch) => {
    dispatch({type: GET_TODOS});
}

const addTodo = (newTodo) => (dispatch) => {
    dispatch({type: ADD_TODO, payload: newTodo});
}

const deleteTodo = (id) => (dispatch) => {
    dispatch({type: DELETE_TODO, payload: id});
}

const completeTodo = (id) => (dispatch) => {
    dispatch({type: COMPLETE_TODO, payload: id});
}

export {
    getTodos,
    addTodo,
    deleteTodo,
    completeTodo,
}
