import newListing from "../Pages/NewListing";

function Listing ({ID, Name, Description, Price, ImageLink, Email, onAddToKosik}) {
    return (
        <div>
            <img src={ImageLink} alt="" width="200px" height="200px"/>
            <h4>{Name}</h4>
            <p><b>{Price}</b></p>
            <button onClick={() => onAddToKosik({ID, Name, Description, Price, ImageLink, Email})}>
                Add Listing
            </button>
        </div>
    )
}

export default Listing;