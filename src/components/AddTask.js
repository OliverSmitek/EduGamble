import {useState} from "react";

function AddTask({onSubmit}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault()
        onSubmit({name, description})
        setName("")
        setDescription("")
    }
    return (
        <div className="">
            <form action="" className="form d-flex flex-column align-items-start" onSubmit={submit}>
                <input type="text" className="form-control mb-3" placeholder="Název úkolu" value={name} onChange={(e) => {setName(e.target.value)}} />
                <input type="text" className="form-control mb-3" placeholder="Popis úkolu" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                <input type="submit" value="Přidat úkol" className="btn btn-success"/>
            </form>
        </div>
    )
}

export default AddTask;