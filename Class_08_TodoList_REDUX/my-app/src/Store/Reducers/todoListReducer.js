const initialState = {

    todos: [],
    newTodoValue: "",
    completedTodo: 0,
    allTodosCounter: 0

}


export const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                newTodoValue: ""
            }

        case "SET_NEW_TODO_VALUE":
            return {
                ...state,
                newTodoValue: action.payload
            }


        case "DELETE_SINGLE_TODO":

            return {
                ...state,
                todos: action.payload
            }


        case "CHANGE_IS_DONE":
            return {
                ...state,
                todos: action.payload
            }



        default:
            return state
    }
}

