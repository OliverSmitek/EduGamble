import newListing from "../Pages/NewListing";

function ListingKosik ({ID, Name, Description, Price, ImageLink, Email, removeFromKosik}) {
    return (
        <div>
            <img src={ImageLink} alt="" width="200px" height="200px"/>
            <h4>{Name}</h4>
            <p><b>{Price}</b></p>
            <button onClick={() => removeFromKosik(ID)}>
                remove
            </button>
        </div>
    )
}

export default ListingKosik;