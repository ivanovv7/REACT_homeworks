import { useSelector } from "react-redux"
import "./navbar.css"

export const Navbar = () => {

    // SELECT the property that i need from the STORE
    const allTodos = useSelector((state) => state.toDoReducer.todos)

    // STORE IN 2 variables the "length" of all todos and completed todos
    const alltodosCount = allTodos.length
    const finishedTodos = allTodos.filter((todo) => todo.isDone === true).length
    return (
        
        //if the 2 variables have the same length it means that all todos are completed and only then a className is added to the div that unlocks animation as a celebration :)
        // the logic after && is for the first time when the app i visited where the count is 0 for completed todos and total number of todos as well (delete "&& alltodosCount !== 0" to try) ->
        // -> to prevent this i have added "&& alltodosCount !== 0".
        <nav className={alltodosCount == finishedTodos  && alltodosCount !== 0  ? "allTodosFinishedNav": "navBar"}>
        <h1>Todos</h1>
        <h3> All todos count : {alltodosCount}</h3>
        <h3> Finished todos count : {finishedTodos}</h3>
        {/* {console.log(allTodos.length === finishedTodos)} */}
        </nav>

        
    )
}

