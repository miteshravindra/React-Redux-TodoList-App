const initialState = {
    todos: [
        { id: 1, todo: 'Walk the dog' },
        { id: 2, todo: 'Hold my beer!' }
    ]
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'DELETE_TODO':
            return {
                ...state,
                todos:state.todos.filter(todo => todo.id !== action.id)
            }

        case 'ADD_TODO':
            return{
                ...state,
                // todos: state.todos.push({id:state.todos.length,todo:action.todo})
                todos: [...state.todos,{id:state.todos.length,todo:action.todo}]
            }


        default:
            return state;
    }

}

export default reducer