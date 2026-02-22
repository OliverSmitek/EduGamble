
function NewListing({OnCreate}) {
    return (
        <form onSubmit={OnCreate}>
            <input type="text" placeholder="idk" className="form-control mb-3" />
            <textarea  placeholder="popis amongus" rows="5" className="form-control mb-3" />
            <input type="number" placeholder="nigaCislo" className="form-control mb-3" />
        </form>
    )
}

export default NewListing;