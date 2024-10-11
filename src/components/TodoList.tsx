import { TodoType } from "../@types/TodoType"
import TodoItem from "./TodoItem"

interface TodoListProps {
    todos : TodoType[]
}

const TodoList = (props : TodoListProps) => {
    return <ul className="list-group">
        {
            props.todos.map( (todo : TodoType) => {
                return <TodoItem key={ todo.id } todo={ todo } />
            } )
        }
    </ul>
}

export default TodoList