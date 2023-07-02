import { legacy_createStore as createStore, combineReducers } from "redux";
import { toDoReducer } from "./Reducers/todoListReducer";
const rootReducer = combineReducers({

    toDoReducer,
})

export  const store = createStore(rootReducer)