// src/components/ListingKosik.jsx
function ListingKosik({ ID, Name, Description, Price, ImageLink, RarityWord, removeFromKosik, sellItem }) {
    const handleRemove = () => {
        removeFromKosik(ID);
    };

    const handleSell = () => {
        sellItem(ID, Price);
    };

    // Map rarity to colors and glows
    const rarityStyle = {
        Common: {
            borderColor: "#9e9e9e",
            glow: "0 0 12px rgba(158,158,158,0.4)",
            accent: "#b0b0b0",
        },
        Uncommon: {
            borderColor: "#4caf50",
            glow: "0 0 15px rgba(76,175,80,0.5)",
            accent: "#6fbf6f",
        },
        Rare: {
            borderColor: "#2196f3",
            glow: "0 0 18px rgba(33,150,243,0.6)",
            accent: "#5aa9f5",
        },
        Epic: {
            borderColor: "#9c27b0",
            glow: "0 0 22px rgba(156,39,176,0.7)",
            accent: "#b85fd0",
        },
        Legendary: {
            borderColor: "#ff9800",
            glow: "0 0 28px rgba(255,152,0,0.8)",
            accent: "#ffbb33",
        },
        Mythic: {
            borderColor: "#f44336",
            glow: "0 0 35px rgba(244,67,54,0.9), 0 0 10px gold",
            accent: "#ff6666",
        },
    };

    // ✅ This line defines `style` – make sure it's present!
    const style = rarityStyle[RarityWord] || rarityStyle.Common;

    return (
        <div className="inventory-card" style={{ borderColor: style.borderColor, boxShadow: style.glow }}>
            <div className="card-image">
                <img src={ImageLink} alt={Name} />
            </div>
            <div className="card-content">
                <h3 className="card-title" style={{ color: style.accent }}>{Name}</h3>
                {Description && <p className="card-description">{Description}</p>}
                <div className="card-footer">
                    <span className="card-price" style={{ color: style.accent }}>{Price} <span>coinů</span></span>
                    <div className="card-buttons">
                        <button className="sell-btn" onClick={handleSell} aria-label="Prodat">
                            💰 Prodat
                        </button>
                        <button className="remove-btn" onClick={handleRemove} aria-label="Odstranit">
                            🗑️
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .inventory-card {
                    background: linear-gradient(145deg, #1e1e2a, #15151f);
                    border-radius: 24px;
                    overflow: hidden;
                    transition: all 0.25s ease;
                    border: 1px solid;
                    backdrop-filter: blur(4px);
                }
                .inventory-card:hover {
                    transform: translateY(-6px) scale(1.01);
                    filter: brightness(1.05);
                }
                .card-image {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    background: #0a0a12;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: transform 0.3s;
                }
                .inventory-card:hover .card-image img {
                    transform: scale(1.03);
                }
                .card-content {
                    padding: 16px;
                }
                .card-title {
                    margin: 0 0 8px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-shadow: 0 0 3px rgba(0,0,0,0.5);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-description {
                    margin: 0 0 12px;
                    font-size: 0.8rem;
                    color: #ccc;
                    line-height: 1.4;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 8px;
                }
                .card-price {
                    font-weight: bold;
                    font-size: 1.1rem;
                }
                .card-price span {
                    font-size: 0.7rem;
                    color: #aaa;
                    margin-left: 4px;
                }
                .card-buttons {
                    display: flex;
                    gap: 8px;
                }
                .sell-btn {
                    background: rgba(50, 150, 50, 0.25);
                    border: none;
                    font-size: 0.9rem;
                    padding: 6px 12px;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.2s;
                    color: #8bc34a;
                    font-weight: bold;
                }
                .sell-btn:hover {
                    background: rgba(50, 150, 50, 0.8);
                    color: white;
                    transform: scale(1.02);
                }
                .remove-btn {
                    background: rgba(220, 60, 60, 0.25);
                    border: none;
                    font-size: 1.2rem;
                    width: 36px;
                    height: 36px;
                    border-radius: 30px;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ff8a8a;
                }
                .remove-btn:hover {
                    background: rgba(220, 60, 60, 0.9);
                    color: white;
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}

export default ListingKosik;