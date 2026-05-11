import { useState, useEffect } from "react";
import Listing from "../components/Listing";

function AllListings({ buyCrateFunc }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getListings() {
        try {
            const res = await fetch("http://localhost:3002/api/products");
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Chyba načítání:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getListings();
    }, []);

    if (loading) {
        return (
            <div className="crates-loading">
                <div className="loader"></div>
                <p>Načítání krámku...</p>
            </div>
        );
    }

    return (
        <div className="crates-container">
            <h2 className="crates-title">✨ Vyber si svůj crate ✨</h2>
            <div className="crates-row">
                {products.map((listing) => (
                    <Listing
                        key={listing.ID}
                        ID={listing.ID}
                        Name={listing.Name}
                        NameOfDrop={listing.NameOfDrop}
                        Price={listing.Price}
                        ImageLink={listing.ImageLink}
                        buyCrate={buyCrateFunc}
                    />
                ))}
            </div>

            <style>{`
                .crates-container {
                    padding: 2rem 1.5rem;
                    background: radial-gradient(circle at 20% 30%, #1a1a2a, #0f0f1a);
                    border-radius: 2rem;
                }
                .crates-title {
                    text-align: center;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    background: linear-gradient(135deg, #ffd966, #ffaa33);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .crates-row {
                    display: flex;
                    gap: 1.8rem;
                    overflow-x: auto;
                    padding-bottom: 1rem;
                    scrollbar-width: thin;
                }
                .crates-row::-webkit-scrollbar {
                    height: 8px;
                }
                .crates-row::-webkit-scrollbar-track {
                    background: #2a2a3a;
                    border-radius: 10px;
                }
                .crates-row::-webkit-scrollbar-thumb {
                    background: #ffaa33;
                    border-radius: 10px;
                }
                .loader {
                    width: 50px;
                    height: 50px;
                    border: 4px solid #2a2a3a;
                    border-top: 4px solid #ffd966;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @media (max-width: 640px) {
                    .crates-container { padding: 1rem; }
                    .crates-title { font-size: 1.5rem; }
                }
            `}</style>
        </div>
    );
}

export default AllListings;