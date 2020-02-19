const initialState = {
    todos: [
        { id: 1, todo: 'Walk the dog' },
        { id: 2, todo: 'Hold my beer!' }
    ]
}

const reducer = (state = initialState,action) => {
    console.log(action);

    return state;

}

export default reducer