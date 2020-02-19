const initialState = {
    todos: [
        { id: 1, todo: 'Walk the dog' },
        { id: 2, todo: 'Hold my beer!' }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.id)
            }

        case 'ADD_TODO':
            return{
                ...state,
                todos: [...state.todos,{id:state.todos.length+1,todo:action.todo}]
            }


        default:
            return state;
    }

}

export default reducer