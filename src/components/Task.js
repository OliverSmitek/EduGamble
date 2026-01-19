function Task({Name, Description, Id, Delete}) {
    return (
        <div className="border border-primary rounded-3 p-3 mb-3 mt-3 shadow-sm row">
            <div className="col-9">
                <h3>{Name}</h3>
                <p>{Description}</p>
                <p>{Id}</p>
            </div>
            <div className="col-3">
                <button onClick={() => Delete(Id)} className="btn btn-danger btn-lg" >🗑️</button>
            </div>
        </div>
    )
}

export default Task;