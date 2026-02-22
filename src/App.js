import {useState, useEffect} from "react";
import BazarControlls from "./components/BazarControlls";
import AllListings from "./Pages/AllListings"

import {Link, Routes, Route, Router} from "react-router";
import NewListing from "./Pages/NewListing";
import Kosik from "./Pages/Kosik";

import Listing from "./components/Listing";

function App() {
    const [listings, addListing] = useState([
        {
            ID:1,
            Name:"Stará pračka",
            ImageLink:"https://www.bazos.cz/img/1/193/214058193.jpg",
            Description:"Nefunguje",
            Price:2499,
            Email:"adam.novak@yandex.ru"
        },
        {
            ID:2,
            Name:"Nová pračka",
            ImageLink:"https://www.bazos.cz/img/1/413/214038413.jpg?t=1769344028",
            Description:"Nefunguje (jen trochu)",
            Price:2899,
            Email:"adam.novak@yandex.ru"
        }
    ])


    const [kosik, addKosik] = useState([

    ])


    const newListing = (listing) => {
        addListing([...listing,listing]);
    }
    const addToKosik = (item) => {
        addKosik([...kosik, item]);
    }
    const removeFromKosik = (id) => {
        addKosik(kosik.filter(item => item.ID !== id));
    }

    return (
        <article className="container">
            <nav className="d-flex align-items-center">
                <img src="https://i.guim.co.uk/img/media/c60c4f8ab60936ac7c1951cdc92b6be280c97ef2/0_645_4008_2772/master/4008.jpg?width=465&dpr=1&s=none&crop=none"
                     alt=""
                     width="200px"/>
                <h1>Párek bazar</h1>
            </nav>

            <BazarControlls />

            <Routes>
                <Route path="/" element={<AllListings Listings={listings} onAddToKosik={addToKosik}/>}/>
                <Route path="/newListing" element={<NewListing OnCreate={newListing} />}/>
                <Route path="/Kosik" element={<Kosik Listings={kosik} removeFromKosik={removeFromKosik}/>}/>

            </Routes>
        </article>
    )

}

export default App;