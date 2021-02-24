export default (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK_TO_READLIST':
            return {
                ...state,
                readlist: [action.payload, ...state.readlist],
            };
        case 'ADD_BOOK_TO_READ':
            return {
                ...state,
                read: [action.payload, ...state.read],
            };
        default:
            return state;
    }
}
