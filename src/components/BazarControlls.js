import {Link} from "react-router";

function BazarControlls({props}) {
    return (
        <div className="d-flex gap-4 bg-secondary-subtle p-3 rounded-3">
            <form className="d-flex gap-4">
                <input type="text" id="searchName" placeholder="Co hledáte?" className="form-control"/>
                <input type="number" id="priceLow" placeholder="Cena od" className="form-control"/>
                <input type="number" id="priceHigh" placeholder="Cena do" className="form-control"/>
                <input type="submit" value="Vyhledat" className="btn btn-primary"/>
            </form>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/newListing" className="btn btn-primary">Přidat inzerát</Link>
            <Link to="/Kosik" className="btn btn-primary">kosik</Link>

        </div>
    )
}

export default BazarControlls;