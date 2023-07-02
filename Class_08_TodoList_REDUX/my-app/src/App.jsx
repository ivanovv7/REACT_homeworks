import { Provider } from "react-redux"
import {store} from "./Store/index.js"
import { TodoComponent } from "./components/todoComponent.jsx"
import { Navbar } from "./components/navbar/navbar.jsx"



function App() {
 

  return (
    <>
    
    {/* <h1 style={{backgroundColor:" rgb(134,85,73)", textAlign:"center", color:"white", height:"50px"}}>Todos</h1> */}
    
    <Provider store = {store}>
    
    <Navbar />
     <TodoComponent />
    
    </Provider>
      
    </>
  )
}

export default App
