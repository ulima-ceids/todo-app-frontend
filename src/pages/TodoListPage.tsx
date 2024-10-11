import { TodoViewModelType } from "../@types/TodoViewModelType"
import Footer from "../components/Footer"
import TodoEntrada from "../components/TodoEntrada"
import TodoList from "../components/TodoList"
import TodoViewModel from "../viewmodels/TodoViewModel"


const TodoListPage = () => {
    const todoViewModel : TodoViewModelType = TodoViewModel()
    
    return <div className="container">
        <h1>TODO App</h1>
        <TodoEntrada agregarTodo={ todoViewModel.agregarTodo }/>
        <hr/>
        <TodoList todos={ todoViewModel.todoList } />
        <Footer />
    </div>
}

export default TodoListPage