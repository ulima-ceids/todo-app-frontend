import { TodoType } from "../@types/TodoType"

interface TodoItemPropsType {
    todo : TodoType
}

const TodoItem = (props : TodoItemPropsType) => {
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        { props.todo.name }
        <div className="btn-group">
            <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-pencil"></i>
            </button>
            <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-trash"></i>
            </button>
        </div>
    </li>
}

export default TodoItem