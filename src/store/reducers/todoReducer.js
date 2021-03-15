
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
           return {
               ...state,
               todos: [...state.todos, action.payload],
            };
        
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.payload)],
            };
        
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    };
                    return todo;
                })]
            }
        default:
            return state;
    }
}

export default todoReducer;
