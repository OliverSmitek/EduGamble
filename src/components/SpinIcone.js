function Spinlcone({ Rarity, ImageLink }) {

    const barva = {
        Comon: '#808080',
        Uncomon: '#2ecc71',
        Rare: '#3498db',
        Epic: '#9b59b6',
        Legendary: '#f39c12',
        Mythic: '#e74c3c'
    }[Rarity?.trim()] || '#ffffff';

    return (
        <div
            style={{
                width: "180px",
                height: "180px",
                borderRadius: "16px",
                padding: "10px",
                background: "#141414",
                border: `1px solid ${barva}`,
                boxShadow: `0 8px 20px rgba(0,0,0,0.45), 0 0 12px ${barva}22`,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.55), 0 0 25px ${barva}55`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = `0 8px 20px rgba(0,0,0,0.45), 0 0 12px ${barva}22`;
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    overflow: "hidden",
                    position: "relative",
                    background: "#0d0d0d"
                }}
            >
                <img
                    src={ImageLink}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "scale(1.08)"
                    }}
                />

                {/* jemný vignette pro lepší fokus */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.35))"
                    }}
                />
            </div>
        </div>
    );
}

export default Spinlcone;