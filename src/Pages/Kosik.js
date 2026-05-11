import { useState, useEffect } from "react";
import ListingKosik from "../components/ListingKosik";

function Kosik({ removeFromKosikFunc, sellItemFunc }) {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInventory = async () => {
        try {
            const res = await fetch("http://localhost:3002/api/card");
            if (!res.ok) throw new Error("Chyba načítání");
            const data = await res.json();
            setInventory(data);
        } catch (error) {
            console.error("Chyba:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    const handleRemove = async (itemId) => {
        await removeFromKosikFunc({ ID: itemId });
        fetchInventory(); // obnovení seznamu
    };

    const handleSell = async (itemId, price) => {
        await sellItemFunc(itemId, price);
        fetchInventory(); // obnovení seznamu
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
                <p>Načítání inventáře...</p>
            </div>
        );
    }

    return (
        <div className="inventory-page">
            <div className="page-header">
                <h1>🎒 Můj inventář</h1>
                <p className="item-count">{inventory.length} položek</p>
            </div>

            {inventory.length === 0 ? (
                <div className="empty-state">
                    <span>📦</span>
                    <p>Zatím jsi nic nevyhrál.</p>
                    <button className="spin-cta" onClick={() => window.location.href = "/"}>Jdi točit!</button>
                </div>
            ) : (
                <div className="inventory-grid">
                    {inventory.map((item) => (
                        <ListingKosik
                            key={item.ID}
                            ID={item.ID}
                            Name={item.Name}
                            ImageLink={item.ImageLink}
                            Description={item.Description}
                            Price={item.Price}
                            RarityWord={item.RarityWord}
                            removeFromKosik={handleRemove}
                            sellItem={handleSell}
                        />
                    ))}
                </div>
            )}

            <style>{`
                /* tvé stávající styly – ponech beze změny */
                .inventory-page { padding: 30px; max-width: 1400px; margin: 0 auto; min-height: 100vh; background: radial-gradient(circle at 10% 20%, #0b0b14, #0f0f1a); }
                .page-header { text-align: center; margin-bottom: 40px; }
                .page-header h1 { margin: 0; font-size: 2.5rem; background: linear-gradient(135deg, #ffe6a3, #ffaa33); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .item-count { margin-top: 8px; color: #aaa; }
                .inventory-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 28px; animation: fadeInUp 0.5s ease; }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .empty-state { text-align: center; margin-top: 100px; color: #ccc; }
                .empty-state span { font-size: 4rem; display: block; margin-bottom: 16px; }
                .empty-state p { font-size: 1.3rem; margin-bottom: 20px; }
                .spin-cta { background: linear-gradient(135deg, #ffd966, #ffaa33); border: none; padding: 12px 28px; border-radius: 40px; font-weight: bold; cursor: pointer; color: #2c1a00; transition: 0.2s; }
                .spin-cta:hover { transform: scale(1.02); }
                .loading-container { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60vh; gap: 20px; }
                .loader { width: 60px; height: 60px; border: 5px solid #2a2a3a; border-top: 5px solid #ffd966; border-radius: 50%; animation: spin 1s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @media (max-width: 640px) { .inventory-page { padding: 16px; } .page-header h1 { font-size: 1.8rem; } .inventory-grid { gap: 16px; } }
            `}</style>
        </div>
    );
}

export default Kosik;