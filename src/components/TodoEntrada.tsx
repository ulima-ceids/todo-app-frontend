import { useState } from "react"

interface TodoEntradaProps {
    agregarTodo : (name: string) => void
}

const TodoEntrada = (props : TodoEntradaProps) => {
    const [texto, setTexto] = useState<string>("")

    return <div className="input-group mb-3">
        <input type="text" 
            className="form-control" 
            placeholder="Ingrese TODO"
            value={ texto }
            onChange={ (e : any) => {
                setTexto(e.target.value)
            }} />
        <button className="btn btn-outline-secondary" 
            type="button"
            onClick={ () => {
                props.agregarTodo(texto)
                setTexto("")
            } }>
            +
        </button>
    </div>
}

export default TodoEntrada