const TodoEntrada = () => {
    return <div className="input-group mb-3">
        <input type="text" 
            className="form-control" 
            placeholder="Ingrese TODO" />
        <button className="btn btn-outline-secondary" 
            type="button">
            +
        </button>
    </div>
}

export default TodoEntrada