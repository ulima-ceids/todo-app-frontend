import { TodoType } from "./TodoList"

interface TodoItemPropsType {
    todo : TodoType
}

const TodoItem = (props : TodoItemPropsType) => {
    return <li>
        { props.todo.name }
        <button type="button">Editar</button>
        <button type="button">Eliminar</button>
    </li>
}

export default TodoItem