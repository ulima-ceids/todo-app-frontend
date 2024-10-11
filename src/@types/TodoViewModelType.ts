import { TodoType } from "./TodoType"

export interface TodoViewModelType {
    todoList : TodoType[]
    agregarTodo : (name : string) => void
    eliminarTodo : (id: number) => void
    modificarTodo : (id : number, name : string) => void
}