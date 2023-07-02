import { useDispatch, useSelector } from "react-redux"
import '../components/todo.css'

export const TodoComponent = () => {

    const dispatch = useDispatch()

    // select properties from state
    const newTodoValue = useSelector((state) => state.toDoReducer.newTodoValue)
    const allTodos = useSelector((state) => state.toDoReducer.todos)

    //store the counters for completed and total todos
    // const alltodosCount = allTodos.length
    // const finishedTodos = allTodos.filter((todo) => todo.isDone === true).length

    // console.log(finishedTodos)
    // console.log("todo values is :", newTodoValue)
    //   console.log("before status changed",allTodos)


    // *** HANDLERS ***

    const handleInputFromUser = (event) => {
        dispatch({ type: "SET_NEW_TODO_VALUE", payload: event.target.value })
    }


    //ADD todo to array
    const handleAddTodo = () => {

        const todo = {
            id: Date.now(),
            title: newTodoValue,
            isDone: false
        }

        dispatch({ type: "ADD_TODO", payload: todo })

    }


    //DELETE SINGLE TODO
    const handleDeleteTodo = (todoId) => {


        //the logic is similar as "CHANGE isDone" from bellow
        const updatedTodos = allTodos.filter((todo) => todo.id !== todoId);
        dispatch({ type: "DELETE_SINGLE_TODO", payload: updatedTodos });


    }



    //CHANGE isDone property
    const handleTodoIsDoneState = (todoId) => {

        //iterate the all todos, find the todo that is clicked with ternary operator and return for that particullar iteration ->
        // -> all the propertes of the todo and INVERT the isDone property. For every other itteration just return the todo as it is.
        const updateCheckedTodo = allTodos.map((todo) => todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo)

        //    console.log("UPDATED",updateCheckedTodo)

        //pass the updated array of todos thru the action object as PAYLOAD an PROVOKE ACTION IN REDUCER.
        dispatch({ type: "CHANGE_IS_DONE", payload: updateCheckedTodo })

    }


    return (

        <>

            {/* <h1>{alltodosCount}</h1>
        <h2>Ginished todos: {finishedTodos}</h2> */}

            {/* Prinitng input button and CONNECTING HANDLE FUNCTIONS */}
            <div className="inputContainer">
                <input className="fancyInput" onChange={handleInputFromUser} type="text" placeholder="Add your todo here" value={newTodoValue} />
                <button className="fancyButton" onClick={handleAddTodo}>Add todo</button>
            </div>


            {/* Printing TODOS */}
            <div className="cardContainer">
                {allTodos.map((todo) => (

                    // if the "isDone" property of the todo of current itteration is done, dynamically five it className that will change the color to green ->
                    // --> else in every other case (false) give it the default className.
                    <div className={todo.isDone ? "todoCardFinished" : "todoCardNotFinished"} key={todo.id}>

                        {
                            <><h3>{todo.title}</h3>

                                <input className="checkBoxCard" onChange={() => handleTodoIsDoneState(todo.id)} type="checkbox" />
                                <button className="deleteCardButton" onClick={() => { handleDeleteTodo(todo.id) }}>X</button></>
                        }

                    </div>
                ))}
            </div>
        </>

    )
}