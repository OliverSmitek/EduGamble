import { Link } from "react-router-dom";

function Listing({ ID, Name, NameOfDrop, Price, ImageLink, buyCrate }) {
    const handleOpen = () => {
        // Koupit crate a přesměrovat na spin
        buyCrate(Name, Price, NameOfDrop);
    };

    // Získání rarity podle názvu crate (pro glow)
    const getRarityFromName = (name) => {
        if (name.includes("Common")) return "Common";
        if (name.includes("Uncommon")) return "Uncommon";
        if (name.includes("Rare")) return "Rare";
        if (name.includes("Epic")) return "Epic";
        if (name.includes("Legendary")) return "Legendary";
        return "Common";
    };
    const rarity = getRarityFromName(Name);
    const rarityGlow = {
        Common: { boxShadow: "0 0 15px rgba(158,158,158,0.3)", borderColor: "rgba(158,158,158,0.5)", glowColor: "#9e9e9e" },
        Uncommon: { boxShadow: "0 0 18px rgba(76,175,80,0.4)", borderColor: "rgba(76,175,80,0.6)", glowColor: "#4caf50" },
        Rare: { boxShadow: "0 0 22px rgba(33,150,243,0.5)", borderColor: "rgba(33,150,243,0.7)", glowColor: "#2196f3" },
        Epic: { boxShadow: "0 0 28px rgba(156,39,176,0.6)", borderColor: "rgba(156,39,176,0.8)", glowColor: "#9c27b0" },
        Legendary: { boxShadow: "0 0 35px rgba(255,152,0,0.7)", borderColor: "rgba(255,152,0,0.9)", glowColor: "#ff9800" },
    };
    const glow = rarityGlow[rarity] || rarityGlow.Common;

    return (
        <div className="crate-card" style={{ boxShadow: glow.boxShadow, borderColor: glow.borderColor }}>
            <div className="crate-image">
                <img src={ImageLink} alt={Name} />
            </div>
            <div className="crate-info">
                <h3 style={{ color: glow.glowColor }}>{Name}</h3>
                <p className="crate-price">{Price} <span>coinů</span></p>
                <button onClick={handleOpen} className="buy-button" style={{ background: `linear-gradient(135deg, ${glow.glowColor}, ${glow.glowColor}dd)` }}>
                    🎲 Otevřít
                </button>
            </div>

            <style>{`
                .crate-card {
                    flex: 0 0 auto;
                    width: 270px;
                    background: linear-gradient(145deg, rgba(30,30,46,0.95), rgba(20,20,31,0.98));
                    backdrop-filter: blur(6px);
                    border-radius: 28px;
                    overflow: hidden;
                    transition: all 0.25s ease;
                    border: 2px solid;
                }
                .crate-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    filter: brightness(1.05);
                }
                .crate-image {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    background: #0a0a12;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.5rem;
                }
                .crate-image img {
                    width: 80%;
                    height: 80%;
                    object-fit: contain;
                }
                .crate-info {
                    padding: 1.2rem;
                    text-align: center;
                }
                .crate-info h3 {
                    margin: 0 0 0.5rem;
                    font-size: 1.3rem;
                    font-weight: bold;
                }
                .crate-price {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #ffaa33;
                    margin: 0.5rem 0;
                }
                .crate-price span {
                    font-size: 0.7rem;
                    color: #aaa;
                }
                .buy-button {
                    border: none;
                    padding: 8px 20px;
                    border-radius: 40px;
                    font-weight: bold;
                    font-size: 0.9rem;
                    cursor: pointer;
                    color: #2c1a00;
                    transition: all 0.2s;
                    width: 100%;
                    margin-top: 8px;
                }
                .buy-button:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                }
                @media (max-width: 640px) {
                    .crate-card { width: 230px; }
                    .crate-info h3 { font-size: 1rem; }
                    .crate-price { font-size: 1rem; }
                    .buy-button { padding: 6px 16px; font-size: 0.8rem; }
                }
            `}</style>
        </div>
    );
}

export default Listing;