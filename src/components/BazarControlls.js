import {Link} from "react-router";

function BazarControlls({props}) {
    return (
        <div className="d-flex gap-4 p-3 rounded-3 mb-4"
             style={{
                 backgroundColor: "#595959",
             }}
        >
            <form className="d-flex gap-4 ">
                <input type="text" id="searchName" placeholder="Co hledáte?" className="form-control"/>
                <input type="number" id="priceLow" placeholder="Cena od" className="form-control"/>
                <input type="number" id="priceHigh" placeholder="Cena do" className="form-control"/>
                <input type="submit" value="Vyhledat" className="btn btn-warning"/>
            </form>
            <Link to="/" className="btn btn-warning">Home</Link>
            <Link to="/newListing" className="btn btn-warning">Přidat inzerát</Link>
            <Link to="/Kosik" className="btn btn-warning">kosik</Link>

        </div>
    )
}

export default BazarControlls;