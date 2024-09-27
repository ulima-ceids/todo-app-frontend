import TodoItem from "./TodoItem"

export interface TodoType {
    id : number,
    name : string
}

const TodoList = () => {
    const listaTODOs : TodoType[] = [
        { id : 1, name : "Estudiar para la practica" },
        { id : 2, name : "Comprar el pan" },
        { id : 3 , name : "Ir al cine"},
        { id : 4 , name : "Dormir"}
    ]


    return <ul>
        {
            listaTODOs.map( (todo : TodoType) => {
                return <TodoItem todo={ todo } />
            } )
        }
    </ul>
}

export default TodoList