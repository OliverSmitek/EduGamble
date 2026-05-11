import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BazarControlls from "./components/BazarControlls";
import AllListings from "./Pages/AllListings";
import NewListing from "./Pages/NewListing";
import Kosik from "./Pages/Kosik";
import Spin from "./Pages/spin";

function App() {
    const [coins, setCoins] = useState(0);
    const navigate = useNavigate();

    const fetchCoins = async () => {
        try {
            const res = await fetch("http://localhost:3002/api/coins");
            const data = await res.json();
            setCoins(data.coins);
        } catch (error) {
            console.error("Chyba načítání coinů:", error);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    // Koupě crate (otevření) – odečte coiny, přesměruje na spin
    const buyCrate = async (crateName, price, nameOfDrop) => {
        if (coins < price) {
            alert(`Nemáš dost coinů! (máš ${coins}, potřeba ${price})`);
            return false;
        }
        try {
            const res = await fetch("http://localhost:3002/api/buyCrate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price, crateName })
            });
            const data = await res.json();
            if (data.success) {
                setCoins(data.coins);
                navigate(`/Spin?drop=${encodeURIComponent(nameOfDrop)}`);
                return true;
            } else {
                alert(data.message);
                return false;
            }
        } catch (error) {
            console.error("Chyba při nákupu:", error);
            return false;
        }
    };

    // Odstranění položky z inventáře (košíku)
    const removeFromKosikListing = async (item) => {
        try {
            await fetch("http://localhost:3002/api/removeItem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: item.ID })
            });
            // Zde můžeš chtít obnovit inventář v Kosik componentě (ta si to stejně znovu načte)
        } catch (error) {
            console.log(error);
        }
    };

    // Prodej předmětu z inventáře
    const sellItem = async (itemId, price) => {
        try {
            const res = await fetch("http://localhost:3002/api/sellItem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: itemId, price })
            });
            const data = await res.json();
            if (data.success) {
                setCoins(data.coins);
                alert(`✅ Prodáno za ${data.sellValue} coinů!`);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Chyba při prodeji:", error);
        }
    };

    return (
        <div className="bg-dark text-white min-vh-100">
            <article className="container">
                <nav className="d-flex align-items-center justify-content-between">
                    <img src="/imgs/cooltext504731573857928.png" width="600px" alt="logo" />
                    <div className="coin-display">
                        🪙 <span className="coin-amount">{coins}</span>
                    </div>
                </nav>

                <BazarControlls />

                <Routes>
                    <Route path="/" element={<AllListings buyCrateFunc={buyCrate} />} />
                    <Route path="/newListing" element={<NewListing />} />
                    <Route path="/Kosik" element={<Kosik removeFromKosikFunc={removeFromKosikListing} sellItemFunc={sellItem} />} />
                    <Route path="/Spin" element={<Spin />} />
                </Routes>
            </article>

            <style>{`
                .coin-display {
                    background: linear-gradient(135deg, #1f1f2a, #15151f);
                    padding: 8px 20px;
                    border-radius: 40px;
                    font-size: 1.4rem;
                    font-weight: bold;
                    border: 1px solid #ffd966;
                    box-shadow: 0 0 8px rgba(255,217,102,0.4);
                }
                .coin-amount {
                    color: #ffd966;
                    margin-left: 8px;
                }
            `}</style>
        </div>
    );
}

export default App;