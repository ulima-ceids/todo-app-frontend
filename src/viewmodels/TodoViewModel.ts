import { useState } from "react"
import { TodoType } from "../@types/TodoType"

const TodoViewModel = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([])

    const agregarTodo = (name : string) => {
        const todoId : number = todoList.length + 1

        setTodoList([...todoList, {
            id : todoId,
            name : name
        }])
    }

    const eliminarTodo = (id : number) => {

    }

    const modificarTodo = (id : number, name : string) => {

    }

    return {
        todoList,
        agregarTodo,
        eliminarTodo,
        modificarTodo
    }
}

export default TodoViewModel