import TodoEntrada from "../components/TodoEntrada"
import TodoList from "../components/TodoList"

const TodoListPage = () => {    
    return <div>
        <h1>TODO App</h1>
        <TodoEntrada />
        <hr/>
        <TodoList />
    </div>
}

export default TodoListPage