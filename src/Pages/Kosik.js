import {useState, useEffect} from "react";
import ListingKosik from "../components/ListingKosik";


function Kosik({Listings, removeFromKosik}) {

    return(
        <div>
            {Listings.map((listingKosik) => (
                <ListingKosik ID={listingKosik.ID}
                         Name={listingKosik.Name}
                         ImageLink={listingKosik.ImageLink}
                         Description={listingKosik.Description}
                         Price={listingKosik.Price}
                          Email={listingKosik.Email}
                              removeFromKosik={removeFromKosik}/>
            ))}
        </div>
    )
}

export default Kosik;