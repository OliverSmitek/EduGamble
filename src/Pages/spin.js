import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Spinlcone from "../components/SpinIcone";

// Modal component (rozšířený o Petra Plodnost)
function WinModal({ item, onClose }) {
    const [isSpecial, setIsSpecial] = useState(false);
    const [isFertilitySpecial, setIsFertilitySpecial] = useState(false);
    const [cinematicActive, setCinematicActive] = useState(false);
    const [cinematicStep, setCinematicStep] = useState(0);
    const specialAudioRef = useRef(null);

    function playSpecialMusic() {
        if (specialAudioRef.current) {
            specialAudioRef.current.pause();
            specialAudioRef.current = null;
        }
        const audio = new Audio("/music/Hava_Nagila_Original.mp3");
        audio.volume = 0.4;
        audio.play()
            .then(() => console.log("🎵 Hava Nagila hraje"))
            .catch(e => console.error("Audio error:", e));
        specialAudioRef.current = audio;
    }

    function stopSpecialMusic() {
        if (specialAudioRef.current) {
            specialAudioRef.current.pause();
            specialAudioRef.current = null;
        }
    }

    // Funkce pro fertility sekvenci (bez audia, pouze vizualizace)
    function playFertilityCinematic() {
        // Žádné audio – lze doplnit později
        console.log("🌱 Fertility cinematic spuštěna");
    }

    useEffect(() => {
        if (item && item.Name === "Samuel JewDytek") {
            setIsSpecial(true);
            setCinematicActive(true);
            playSpecialMusic();
            const step1 = setTimeout(() => setCinematicStep(1), 800);
            const step2 = setTimeout(() => setCinematicStep(2), 2200);
            const step3 = setTimeout(() => setCinematicStep(3), 3800);
            const step4 = setTimeout(() => {
                setCinematicStep(4);
                setCinematicActive(false);
            }, 5500);
            return () => {
                clearTimeout(step1);
                clearTimeout(step2);
                clearTimeout(step3);
                clearTimeout(step4);
                stopSpecialMusic();
            };
        } else if (item && item.Name === "Petr Plodnost") {
            setIsFertilitySpecial(true);
            setCinematicActive(true);
            playFertilityCinematic();
            const step1 = setTimeout(() => setCinematicStep(1), 800);
            const step2 = setTimeout(() => setCinematicStep(2), 2200);
            const step3 = setTimeout(() => setCinematicStep(3), 3800);
            const step4 = setTimeout(() => {
                setCinematicStep(4);
                setCinematicActive(false);
            }, 5500);
            return () => {
                clearTimeout(step1);
                clearTimeout(step2);
                clearTimeout(step3);
                clearTimeout(step4);
                // Žádné audio k zastavení
            };
        }
    }, [item]);

    if (!item) return null;

    const rarityConfig = {
        Common: { bg: "#2e2e2e", accent: "#9e9e9e", glow: "rgba(158,158,158,0.3)", gradient: "linear-gradient(135deg, #9e9e9e, #616161)", animation: "dropCommon" },
        Uncommon: { bg: "#1e3a2e", accent: "#4caf50", glow: "rgba(76,175,80,0.3)", gradient: "linear-gradient(135deg, #4caf50, #2e7d32)", animation: "dropUncommon" },
        Rare: { bg: "#0d2b45", accent: "#2196f3", glow: "rgba(33,150,243,0.3)", gradient: "linear-gradient(135deg, #2196f3, #0b5e9e)", animation: "dropRare" },
        Epic: { bg: "#2e1b3c", accent: "#9c27b0", glow: "rgba(156,39,176,0.3)", gradient: "linear-gradient(135deg, #9c27b0, #6a1b9a)", animation: "dropEpic" },
        Legendary: { bg: "#3d2a1a", accent: "#ff9800", glow: "rgba(255,152,0,0.4)", gradient: "linear-gradient(135deg, #ff9800, #c66900)", animation: "dropLegendary" },
        Mythic: { bg: "#3a1a1a", accent: "#f44336", glow: "rgba(244,67,54,0.4)", gradient: "linear-gradient(135deg, #f44336, #b71c1c)", animation: "dropMythic" },
    };

    const specialConfig = {
        bg: "linear-gradient(135deg, #0038b8, #ffffff, #0038b8)",
        accent: "#ffd700",
        glow: "rgba(255,215,0,0.6)",
        gradient: "linear-gradient(135deg, #ffd700, #ffaa00)",
        animation: "dropSpecial",
    };

    const fertilityConfig = {
        bg: "linear-gradient(135deg, #a8e6cf, #d4f1f9, #ffd3b5)",
        accent: "#ff6b6b",
        glow: "rgba(255,107,107,0.6)",
        gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb)",
        animation: "dropFertility",
    };

    let config;
    if (isFertilitySpecial) config = fertilityConfig;
    else if (isSpecial) config = specialConfig;
    else config = rarityConfig[item.RarityWord] || rarityConfig.Common;

    const bgStyle = isSpecial
        ? { background: specialConfig.bg, backgroundSize: "200% 200%", animation: "israelFlagWave 3s ease infinite" }
        : isFertilitySpecial
            ? { background: fertilityConfig.bg, backgroundSize: "200% 200%", animation: "fertilityWave 4s ease infinite" }
            : { backgroundColor: config.bg };

    const dropAnimationClass = config.animation;

    // Cinematic zobrazení – rozlišení podle typu
    if (cinematicActive) {
        if (isSpecial) {
            // Původní Samuelova sekvence
            return (
                <div className="cinematic-overlay">
                    <div className="cinematic-black-bars top" />
                    <div className="cinematic-black-bars bottom" />
                    <div className="cinematic-vignette" />
                    <div className="cinematic-spotlight" />
                    {cinematicStep >= 1 && (
                        <div className="cinematic-text" style={{ animation: cinematicStep === 1 ? "fadeInUp 1s ease-out" : "none" }}>
                            <h1 className="cinematic-title">⚡ LEGENDARY DROP ⚡</h1>
                        </div>
                    )}
                    {cinematicStep >= 2 && (
                        <div className="cinematic-text2" style={{ animation: "fadeInUp 0.8s ease-out" }}>
                            <p className="cinematic-subtitle">Samuel JewDytek has arrived...</p>
                        </div>
                    )}
                    {cinematicStep >= 3 && (
                        <div className="cinematic-text3" style={{ animation: "zoomGlow 0.6s ease-out forwards" }}>
                            <div className="star-burst">✡️✨🇮🇱✨✡️</div>
                            <p className="hebrew-giant">הַבָּה נָגִילָה</p>
                        </div>
                    )}
                    <div className="music-notes-container">
                        <span className="music-note">♪</span>
                        <span className="music-note">♫</span>
                        <span className="music-note">♪</span>
                    </div>
                </div>
            );
        } else if (isFertilitySpecial) {
            // Nová sekvence pro Petra Plodnost
            return (
                <div className="cinematic-overlay fertility-cinematic">
                    <div className="cinematic-black-bars top" />
                    <div className="cinematic-black-bars bottom" />
                    <div className="cinematic-vignette" />
                    <div className="cinematic-spotlight fertility-spotlight" />
                    {cinematicStep >= 1 && (
                        <div className="cinematic-text" style={{ animation: cinematicStep === 1 ? "fadeInUp 1s ease-out" : "none" }}>
                            <h1 className="cinematic-title fertility-title">🌱 FERTILITY DROP 🌱</h1>
                        </div>
                    )}
                    {cinematicStep >= 2 && (
                        <div className="cinematic-text2" style={{ animation: "fadeInUp 0.8s ease-out" }}>
                            <p className="cinematic-subtitle fertility-subtitle">Petr Plodnost přináší radost z plodnosti...</p>
                        </div>
                    )}
                    {cinematicStep >= 3 && (
                        <div className="cinematic-text3" style={{ animation: "zoomGlow 0.6s ease-out forwards" }}>
                            <div className="fertility-burst">💦🧬✨💚✨🧬💦</div>
                            <p className="sperm-giant">⚡ SEMEN ⚡ PLODNOST ⚡</p>
                            <div className="floating-sperms">
                                <span className="sperm">💦</span>
                                <span className="sperm">🧬</span>
                                <span className="sperm">💚</span>
                                <span className="egg">🥚</span>
                                <span className="sperm">💦</span>
                            </div>
                        </div>
                    )}
                    <div className="fertility-notes">
                        <span className="fertility-icon">🌾</span>
                        <span className="fertility-icon">💚</span>
                        <span className="fertility-icon">🍼</span>
                    </div>
                </div>
            );
        }
        return null;
    }

    // Modal (společný pro všechny)
    return (
        <div className={`modal-overlay ${isSpecial ? "special-overlay" : ""} ${isFertilitySpecial ? "fertility-overlay" : ""}`} onClick={onClose}>
            {isSpecial && <div className="confetti-container"></div>}
            {isFertilitySpecial && <div className="fertility-confetti"></div>}
            <div
                className={`modal-content ${dropAnimationClass} ${isSpecial ? "special-modal" : ""} ${isFertilitySpecial ? "fertility-modal" : ""}`}
                style={{ ...bgStyle, borderBottom: `4px solid ${config.accent}` }}
            >
                <button className="modal-close" onClick={onClose}>×</button>
                {isSpecial && <div className="star-of-david">✡</div>}
                {isFertilitySpecial && <div className="fertility-icon-big">💦🌱💦</div>}
                <div className="modal-image-wrapper" style={isSpecial ? { animation: "shake 0.5s ease-in-out infinite" } : isFertilitySpecial ? { animation: "floatGentle 1s ease-in-out infinite" } : {}}>
                    <img src={item.ImageLink} alt={item.Name} className="modal-image" />
                </div>
                <h2 className="modal-name" style={{ color: config.accent }}>
                    {isSpecial ? "✨ SAMUEL JEWDYTEK ✨" : isFertilitySpecial ? "🌱 PETR PLODNOST 🌱" : item.Name}
                </h2>
                <p className="modal-rarity" style={{ color: config.accent, textShadow: `0 0 8px ${config.glow}` }}>
                    {isSpecial ? "🇮🇱 MYTHIC - ISRAEL LEGEND 🇮🇱" : isFertilitySpecial ? "💚 MYTHIC - FERTILITY LORD 💚" : item.RarityWord}
                </p>
                <p className="modal-description">
                    {isSpecial ? "הַבָּה נָגִילָה וְנִשְׂמְחָה! (Pojďme se radovat a veselit!)" :
                        isFertilitySpecial ? "Radost z plodnosti a ze spermií! 🌱💦 Ať se daří novému životu!" :
                            (item.Description || "Žádný popis.")}
                </p>
                <div className="modal-price-container" style={{ background: config.gradient }}>
                    <span className="modal-price">💰 {item.Price} coinů 💰</span>
                </div>
                <button className="modal-ok" style={{ background: config.gradient }} onClick={onClose}>
                    {isSpecial ? "🇮🇱 TODA RABBA! 🇮🇱" : isFertilitySpecial ? "🌱 DÍKY ZA PLODNOST! 💦" : "SUPER! 🎉"}
                </button>
                {isSpecial && (
                    <div className="hebrew-texts">
                        <span className="hebrew">עם ישראל חי</span>
                        <span className="hebrew">מזל טוב</span>
                    </div>
                )}
                {isFertilitySpecial && (
                    <div className="fertility-texts">
                        <span className="fertility-quote">💚 Radost z plodnosti 💚</span>
                        <span className="fertility-quote">💦 Síla semen 🌱</span>
                        <span className="fertility-quote">🍼 Nový život 🍼</span>
                    </div>
                )}
            </div>
        </div>
    );
}

// Hlavní komponenta Spin (opravena chybějící závislost)
function Spin() {
    const [searchParams] = useSearchParams();
    const dropType = searchParams.get("drop") || "dataRareCrate";

    const [drops, setDrops] = useState([]);
    const [spinning, setSpinning] = useState(false);
    const [offset, setOffset] = useState(0);
    const [originalDrops, setOriginalDrops] = useState([]);
    const [showWinModal, setShowWinModal] = useState(false);
    const [lastWinner, setLastWinner] = useState(null);
    const [crateName, setCrateName] = useState("");
    const [hasSpun, setHasSpun] = useState(false);
    const trackRef = useRef(null);
    const windowRef = useRef(null);
    const spinTimeoutRef = useRef(null);

    const getEndpoint = (type) => {
        switch(type) {
            case "dataComonCrate": return "http://localhost:3002/api/dataComonCrate";
            case "unComonCrate": return "http://localhost:3002/api/unComonCrate";
            case "dataRareCrate": return "http://localhost:3002/api/dataRareCrate";
            case "epicCrate": return "http://localhost:3002/api/epicCrate";
            case "legendaryCrate": return "http://localhost:3002/api/legendaryCrate";
            default: return "http://localhost:3002/api/dataRareCrate";
        }
    };

    const getCrateDisplayName = (type) => {
        switch(type) {
            case "dataComonCrate": return "Common Crate";
            case "unComonCrate": return "Uncommon Crate";
            case "dataRareCrate": return "Rare Crate";
            case "epicCrate": return "Epic Crate";
            case "legendaryCrate": return "Legendary Crate";
            default: return "Crate";
        }
    };

    // Oprava: použití useCallback, aby getDrops byl stabilní mezi rendery
    const getDrops = useCallback(async () => {
        const endpoint = getEndpoint(dropType);
        try {
            const res = await fetch(endpoint);
            if (!res.ok) throw new Error("Chyba načítání");
            const data = await res.json();
            setOriginalDrops(data);
            setDrops(data);
            setCrateName(getCrateDisplayName(dropType));
        } catch (error) {
            console.error("Chyba:", error);
            setOriginalDrops([]);
            setDrops([]);
        }
    }, [dropType]);

    // Oprava: závislost nyní obsahuje getDrops (stabilní díky useCallback)
    useEffect(() => {
        getDrops();
        return () => {
            if (spinTimeoutRef.current) clearTimeout(spinTimeoutRef.current);
        };
    }, [getDrops]);

    function sequentialPick(items) {
        if (!items.length) return null;
        let attempts = 0;
        while (true) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const random = Math.floor(Math.random() * 100) + 1;
                if (random <= item.Rarity) {
                    console.log(`✅ VYHRÁNO: ${item.Name} (Rarity:${item.Rarity}, random:${random})`);
                    return { ...item };
                }
            }
            attempts++;
            console.log(`🔄 Kolo ${attempts} bez výhry, začínám znovu...`);
        }
    }

    async function addWonItemToInventory(item) {
        try {
            const response = await fetch("http://localhost:3002/api/card", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
            if (response.ok) console.log("Item přidán:", item.Name);
        } catch (error) {
            console.error("Chyba při ukládání:", error);
        }
    }

    function getSpinDuration(rarityWord) {
        const baseTimes = {
            Common: 3000,
            Uncommon: 4500,
            Rare: 6000,
            Epic: 8000,
            Legendary: 10000,
            Mythic: 12000,
        };
        let duration = baseTimes[rarityWord] || 5000;
        const variation = duration * (Math.random() * 0.3 - 0.15);
        return Math.floor(duration + variation);
    }

    function startSpin() {
        if (!originalDrops.length || spinning || hasSpun) return;

        const winner = sequentialPick(originalDrops);
        if (!winner) return;

        setSpinning(true);

        const duration = getSpinDuration(winner.RarityWord);
        console.log(`🏆 ${winner.Name} (${winner.RarityWord}) – točení ${duration}ms`);

        const STRIP_LENGTH = 70;
        const strip = [];
        for (let i = 0; i < STRIP_LENGTH; i++) {
            strip.push(originalDrops[Math.floor(Math.random() * originalDrops.length)]);
        }
        const minWinIndex = Math.floor(STRIP_LENGTH * 0.5);
        const maxWinIndex = STRIP_LENGTH - 10;
        const winIndex = Math.floor(Math.random() * (maxWinIndex - minWinIndex + 1) + minWinIndex);
        strip[winIndex] = winner;
        setDrops(strip);

        setTimeout(() => {
            if (!trackRef.current || !windowRef.current) return;
            const track = trackRef.current;
            const winDiv = windowRef.current;
            const items = track.children;
            if (!items.length) return;

            const itemWidth = items[0].getBoundingClientRect().width;
            const gap = parseFloat(getComputedStyle(track).gap) || 12;
            const windowWidth = winDiv.getBoundingClientRect().width;

            let targetOffset = winIndex * (itemWidth + gap) - windowWidth / 2 + itemWidth / 2;
            targetOffset = Math.max(0, targetOffset);
            const randomJitter = Math.floor(Math.random() * 80) - 40;
            const finalOffset = Math.max(0, targetOffset + randomJitter);

            setOffset(0);
            setTimeout(() => {
                if (trackRef.current) {
                    trackRef.current.style.transition = `transform ${duration / 1000}s cubic-bezier(0.1, 0.85, 0.2, 1)`;
                }
                setOffset(finalOffset);

                spinTimeoutRef.current = setTimeout(async () => {
                    setSpinning(false);
                    setHasSpun(true);
                    setLastWinner(winner);
                    setShowWinModal(true);
                    await addWonItemToInventory(winner);
                    setTimeout(() => {
                        setDrops(originalDrops);
                        setOffset(0);
                        if (trackRef.current) trackRef.current.style.transition = "";
                    }, 500);
                }, duration);
            }, 50);
        }, 10);
    }

    const closeModal = () => {
        setShowWinModal(false);
        setLastWinner(null);
    };

    const getRarityGlow = (rarityWord) => {
        switch(rarityWord) {
            case "Common": return "0 0 5px #9e9e9e";
            case "Uncommon": return "0 0 8px #4caf50";
            case "Rare": return "0 0 12px #2196f3";
            case "Epic": return "0 0 15px #9c27b0";
            case "Legendary": return "0 0 20px #ff9800";
            case "Mythic": return "0 0 25px #f44336, 0 0 10px gold";
            default: return "none";
        }
    };

    const getRarityAnimationClass = (rarityWord) => {
        switch (rarityWord) {
            case "Common": return "rarity-common";
            case "Uncommon": return "rarity-uncommon";
            case "Rare": return "rarity-rare";
            case "Epic": return "rarity-epic";
            case "Legendary": return "rarity-legendary";
            case "Mythic": return "rarity-mythic";
            default: return "";
        }
    };

    return (
        <div>
            <h1>🎡 {crateName} SPIN 🎡</h1>
            <button onClick={startSpin} disabled={spinning || hasSpun}>
                {hasSpun ? "✅ SPUN" : (spinning ? "🌀 TOČÍ SE... 🌀" : "✨ ROZTOČ ✨")}
            </button>

            <div style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "4px",
                height: "220px",
                background: "gold",
                zIndex: 10,
                opacity: 0.9,
                pointerEvents: "none",
                boxShadow: "0 0 8px gold",
            }} />

            <div className="spin-window" ref={windowRef}>
                <div
                    className="spin-track"
                    ref={trackRef}
                    style={{ transform: `translateX(-${offset}px)`, transition: "none" }}
                >
                    {drops.map((item, index) => (
                        <div
                            key={`${item.ID}-${index}-${spinning ? index : "static"}`}
                            className={`spin-item-wrapper ${getRarityAnimationClass(item.RarityWord)}`}
                            style={{
                                filter: `drop-shadow(${getRarityGlow(item.RarityWord)})`,
                                transition: "filter 0.2s"
                            }}
                        >
                            <Spinlcone
                                Rarity={item.RarityWord}
                                ImageLink={item.ImageLink}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {showWinModal && <WinModal item={lastWinner} onClose={closeModal} />}

            <style>{`
                /* Původní styly + nové pro Petra Plodnost */
                .spin-window {
                    width: 100%;
                    overflow: hidden;
                    background: #2a2a2a;
                    padding: 25px 0;
                    border-radius: 20px;
                    position: relative;
                    box-shadow: inset 0 0 15px rgba(0,0,0,0.5), 0 5px 15px black;
                    border: 1px solid #ffd700;
                }
                .spin-track {
                    display: flex;
                    gap: 12px;
                    width: max-content;
                    will-change: transform;
                }
                .spin-item-wrapper {
                    transition: filter 0.2s, transform 0.2s;
                }
                button {
                    margin-bottom: 20px;
                    padding: 12px 30px;
                    font-weight: bold;
                    font-size: 1.2rem;
                    cursor: pointer;
                    background: linear-gradient(135deg, #ffd966, #ffaa33);
                    border: none;
                    border-radius: 50px;
                    color: #2c1a00;
                    transition: 0.2s;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                }
                button:hover:not(:disabled) {
                    transform: scale(1.02);
                    background: linear-gradient(135deg, #ffe08c, #ffbb44);
                }
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .spin-window::after {
                    content: "▼";
                    position: absolute;
                    bottom: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: gold;
                    font-size: 24px;
                    filter: drop-shadow(0 0 4px black);
                }
                h1 {
                    text-align: center;
                    font-family: 'Segoe UI', monospace;
                    letter-spacing: 2px;
                    background: linear-gradient(135deg, #ffd966, #ffaa33);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }

                /* Rarity animace (beze změn) */
                .rarity-common { animation: pulseCommon 2s ease-in-out infinite; }
                @keyframes pulseCommon { 0% { filter: drop-shadow(0 0 2px #9e9e9e) brightness(1); } 50% { filter: drop-shadow(0 0 8px #9e9e9e) brightness(1.02); } 100% { filter: drop-shadow(0 0 2px #9e9e9e) brightness(1); } }
                .rarity-uncommon { animation: pulseUncommon 2.5s ease-in-out infinite; }
                @keyframes pulseUncommon { 0% { filter: drop-shadow(0 0 3px #4caf50); transform: translateY(0px); } 50% { filter: drop-shadow(0 0 12px #4caf50); transform: translateY(-3px); } 100% { filter: drop-shadow(0 0 3px #4caf50); transform: translateY(0px); } }
                .rarity-rare { animation: pulseRare 2s ease-in-out infinite; }
                @keyframes pulseRare { 0% { filter: drop-shadow(0 0 4px #2196f3); transform: rotate(0deg); } 50% { filter: drop-shadow(0 0 15px #2196f3); transform: rotate(1deg) scale(1.01); } 100% { filter: drop-shadow(0 0 4px #2196f3); transform: rotate(0deg); } }
                .rarity-epic { animation: pulseEpic 2.2s ease-in-out infinite; }
                @keyframes pulseEpic { 0% { filter: drop-shadow(0 0 5px #9c27b0); transform: translateX(0px); } 50% { filter: drop-shadow(0 0 20px #9c27b0); transform: translateX(2px); } 100% { filter: drop-shadow(0 0 5px #9c27b0); transform: translateX(0px); } }
                .rarity-legendary { animation: pulseLegendary 1.8s ease-in-out infinite; }
                @keyframes pulseLegendary { 0% { filter: drop-shadow(0 0 8px #ff9800); transform: scale(1); } 50% { filter: drop-shadow(0 0 25px #ff9800); transform: scale(1.02) rotate(0.5deg); } 100% { filter: drop-shadow(0 0 8px #ff9800); transform: scale(1); } }
                .rarity-mythic { animation: pulseMythic 1.5s ease-in-out infinite; }
                @keyframes pulseMythic { 0% { filter: drop-shadow(0 0 10px #f44336) drop-shadow(0 0 5px gold); transform: scale(1) rotate(0deg); } 50% { filter: drop-shadow(0 0 30px #f44336) drop-shadow(0 0 15px gold); transform: scale(1.03) rotate(1deg); } 100% { filter: drop-shadow(0 0 10px #f44336) drop-shadow(0 0 5px gold); transform: scale(1) rotate(0deg); } }

                /* Drop animace */
                .dropCommon { animation: dropCommonAnim 0.4s cubic-bezier(0.2,0.9,0.4,1.1); }
                @keyframes dropCommonAnim { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
                .dropUncommon { animation: dropUncommonAnim 0.5s cubic-bezier(0.3,1.2,0.4,1); }
                @keyframes dropUncommonAnim { 0% { opacity: 0; transform: translateY(-80px) scale(0.8); } 60% { opacity: 1; transform: translateY(15px) scale(1.02); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
                .dropRare { animation: dropRareAnim 0.6s cubic-bezier(0.2,1.3,0.4,1); }
                @keyframes dropRareAnim { 0% { opacity: 0; transform: rotate(-10deg) scale(0.5); } 40% { opacity: 1; transform: rotate(2deg) scale(1.05); } 70% { transform: rotate(-1deg) scale(1); } 100% { opacity: 1; transform: rotate(0) scale(1); } }
                .dropEpic { animation: dropEpicAnim 0.7s cubic-bezier(0.2,1.5,0.4,1); }
                @keyframes dropEpicAnim { 0% { opacity: 0; transform: scale(0.3) rotate(-15deg); filter: blur(4px); } 40% { opacity: 1; transform: scale(1.1) rotate(2deg); filter: blur(0); } 70% { transform: scale(0.98) rotate(-1deg); } 100% { opacity: 1; transform: scale(1) rotate(0); filter: blur(0); } }
                .dropLegendary { animation: dropLegendaryAnim 0.8s cubic-bezier(0.2,1.6,0.4,1); }
                @keyframes dropLegendaryAnim { 0% { opacity: 0; transform: scale(0) rotate(-180deg); filter: blur(8px); } 50% { opacity: 1; transform: scale(1.15) rotate(5deg); filter: blur(0); box-shadow: 0 0 30px gold; } 75% { transform: scale(0.98) rotate(-2deg); } 100% { opacity: 1; transform: scale(1) rotate(0); box-shadow: 0 0 20px rgba(0,0,0,0.5); } }
                .dropMythic { animation: dropMythicAnim 1s cubic-bezier(0.2,1.8,0.4,1); }
                @keyframes dropMythicAnim { 0% { opacity: 0; transform: scale(0) rotate(-360deg) skew(20deg); filter: blur(12px); } 40% { opacity: 1; transform: scale(1.2) rotate(10deg) skew(-5deg); filter: blur(0); box-shadow: 0 0 50px #f44336, 0 0 30px gold; } 70% { transform: scale(0.95) rotate(-3deg) skew(2deg); } 100% { opacity: 1; transform: scale(1) rotate(0) skew(0); box-shadow: 0 0 30px rgba(0,0,0,0.5); } }
                .dropSpecial { animation: dropSpecialAnim 1.2s cubic-bezier(0.2,1.9,0.4,1); }
                @keyframes dropSpecialAnim { 0% { opacity: 0; transform: scale(0) rotate(-540deg); filter: blur(20px); } 30% { opacity: 1; transform: scale(1.3) rotate(15deg); filter: blur(0); box-shadow: 0 0 80px gold, 0 0 40px #0038b8; } 60% { transform: scale(0.95) rotate(-5deg); } 100% { opacity: 1; transform: scale(1) rotate(0); box-shadow: 0 0 40px rgba(0,0,0,0.5); } }
                .dropFertility { animation: dropFertilityAnim 1.2s cubic-bezier(0.2,1.9,0.4,1); }
                @keyframes dropFertilityAnim { 0% { opacity: 0; transform: scale(0) rotate(-360deg) translateY(-100px); filter: blur(10px); } 30% { opacity: 1; transform: scale(1.2) rotate(8deg) translateY(10px); filter: blur(0); box-shadow: 0 0 60px #ff6b6b, 0 0 30px #a8e6cf; } 60% { transform: scale(0.95) rotate(-3deg) translateY(-2px); } 100% { opacity: 1; transform: scale(1) rotate(0) translateY(0); box-shadow: 0 0 30px rgba(0,0,0,0.5); } }

                /* Modální okna */
                .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center; z-index: 1000; backdrop-filter: blur(4px); }
                .special-overlay { background: rgba(0,56,184,0.7); backdrop-filter: blur(8px); animation: overlayPulse 0.5s ease infinite; }
                .fertility-overlay { background: rgba(168,230,207,0.7); backdrop-filter: blur(8px); animation: fertilityOverlayPulse 1s ease infinite; }
                .modal-content { position: relative; width: 90%; max-width: 400px; border-radius: 28px; padding: 24px 20px 30px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
                .special-modal { border: 3px solid gold !important; box-shadow: 0 0 30px rgba(255,215,0,0.8) !important; animation: dance 0.3s ease-in-out infinite, rotateGlow 2s ease-in-out infinite !important; }
                .fertility-modal { border: 3px solid #ff6b6b !important; box-shadow: 0 0 30px rgba(255,107,107,0.8) !important; animation: gentleBob 0.4s ease-in-out infinite, fertilityGlow 2s ease-in-out infinite !important; }
                
                /* Cinematic společné */
                .cinematic-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: black; z-index: 2000; display: flex; justify-content: center; align-items: center; flex-direction: column; overflow: hidden; }
                .cinematic-black-bars { position: absolute; left: 0; right: 0; background: black; z-index: 2001; height: 12%; width: 100%; }
                .cinematic-black-bars.top { top: 0; }
                .cinematic-black-bars.bottom { bottom: 0; }
                .cinematic-vignette { position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: inset 0 0 150px rgba(0,0,0,0.9); pointer-events: none; z-index: 2002; }
                .cinematic-spotlight { position: absolute; top: 50%; left: 50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(0,0,0,0) 70%); transform: translate(-50%, -50%); animation: spotlightPulse 1.5s ease-in-out infinite; z-index: 2001; }
                .fertility-spotlight { background: radial-gradient(circle, rgba(168,230,207,0.5) 0%, rgba(255,107,107,0.2) 50%, rgba(0,0,0,0) 80%); }
                @keyframes spotlightPulse { 0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); } }
                .cinematic-text, .cinematic-text2, .cinematic-text3 { text-align: center; z-index: 2003; margin: 20px 0; }
                .cinematic-title { font-size: 3rem; font-family: 'Impact', 'Arial Black', sans-serif; letter-spacing: 4px; text-transform: uppercase; text-shadow: 0 0 20px #ffaa00, 0 0 40px #ff5500; color: gold; }
                .fertility-title { color: #ff6b6b; text-shadow: 0 0 20px #a8e6cf, 0 0 30px #ff9a9e; }
                .cinematic-subtitle { font-size: 1.8rem; font-family: 'Georgia', serif; font-style: italic; color: #ffd966; }
                .fertility-subtitle { color: #d4f1f9; text-shadow: 0 0 10px #ff6b6b; }
                .star-burst { font-size: 3rem; margin-bottom: 1rem; animation: starSpin 1s linear infinite; }
                .hebrew-giant { font-size: 2.5rem; font-family: 'Arial Hebrew', monospace; color: #ffd700; text-shadow: 0 0 15px #0038b8; animation: hebrewZoom 0.8s ease-out; }
                .fertility-burst { font-size: 2.5rem; margin-bottom: 0.5rem; animation: pulseFertility 0.8s infinite alternate; }
                .sperm-giant { font-size: 2rem; font-family: 'Comic Sans MS', cursive; color: #ff9a9e; text-shadow: 0 0 15px #a8e6cf; animation: spermZoom 0.8s ease-out; }
                .floating-sperms { margin-top: 1rem; display: flex; justify-content: center; gap: 1rem; }
                .sperm, .egg { font-size: 2rem; display: inline-block; animation: floatSperm 1.5s infinite ease-in-out; }
                .egg { animation: pulseEgg 1s infinite alternate; }
                .sperm:nth-child(2) { animation-delay: 0.3s; }
                .sperm:nth-child(3) { animation-delay: 0.6s; }
                .egg { animation-delay: 0.9s; }
                @keyframes floatSperm { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(20deg); } }
                @keyframes pulseEgg { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(1.2); opacity: 1; text-shadow: 0 0 10px pink; } }
                @keyframes pulseFertility { from { text-shadow: 0 0 5px #ff9a9e; transform: scale(1); } to { text-shadow: 0 0 25px #ff6b6b; transform: scale(1.1); } }
                @keyframes spermZoom { from { transform: scale(0.3); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .fertility-notes { position: absolute; bottom: 15%; left: 0; right: 0; text-align: center; z-index: 2003; }
                .fertility-icon { font-size: 2rem; margin: 0 0.5rem; display: inline-block; animation: floatFertility 1.2s infinite; }
                .fertility-icon:nth-child(2) { animation-delay: 0.4s; }
                .fertility-icon:nth-child(3) { animation-delay: 0.8s; }
                @keyframes floatFertility { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-40px) rotate(15deg); opacity: 0; } }
                .music-notes-container { position: absolute; bottom: 15%; left: 0; right: 0; text-align: center; z-index: 2003; }
                .music-note { display: inline-block; font-size: 2rem; margin: 0 0.5rem; animation: floatNote 1s ease-in-out infinite; color: gold; }
                
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes zoomGlow { from { transform: scale(0.8); opacity: 0; text-shadow: 0 0 0px gold; } to { transform: scale(1); opacity: 1; text-shadow: 0 0 40px gold; } }
                @keyframes dance { 0% { transform: translate(0,0) rotate(0deg); } 25% { transform: translate(5px,-5px) rotate(2deg); } 50% { transform: translate(-5px,5px) rotate(-2deg); } 75% { transform: translate(3px,-3px) rotate(1deg); } 100% { transform: translate(0,0) rotate(0deg); } }
                @keyframes rotateGlow { 0% { box-shadow: 0 0 20px gold; } 50% { box-shadow: 0 0 50px #ffd700, 0 0 20px #0038b8; } 100% { box-shadow: 0 0 20px gold; } }
                @keyframes israelFlagWave { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                @keyframes fertilityWave { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
                @keyframes overlayPulse { 0% { background: rgba(0,56,184,0.7); } 50% { background: rgba(255,215,0,0.7); } 100% { background: rgba(0,56,184,0.7); } }
                @keyframes fertilityOverlayPulse { 0% { background: rgba(168,230,207,0.6); } 50% { background: rgba(255,107,107,0.6); } 100% { background: rgba(168,230,207,0.6); } }
                @keyframes shake { 0% { transform: translate(0,0); } 25% { transform: translate(-3px,0); } 75% { transform: translate(3px,0); } 100% { transform: translate(0,0); } }
                @keyframes floatGentle { 0% { transform: translateY(0px); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0px); } }
                @keyframes gentleBob { 0% { transform: translate(0,0); } 50% { transform: translate(0,-4px); } 100% { transform: translate(0,0); } }
                @keyframes fertilityGlow { 0% { box-shadow: 0 0 20px #ff6b6b; } 50% { box-shadow: 0 0 40px #a8e6cf, 0 0 20px #ff9a9e; } 100% { box-shadow: 0 0 20px #ff6b6b; } }
                
                .star-of-david { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 48px; color: gold; text-shadow: 0 0 10px #0038b8; animation: starSpin 2s linear infinite; }
                .fertility-icon-big { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 48px; filter: drop-shadow(0 0 8px #ff6b6b); animation: floatGentle 1s ease-in-out infinite; }
                .modal-close { position: absolute; top: 12px; right: 18px; background: none; border: none; font-size: 28px; cursor: pointer; color: #aaa; padding: 0; margin: 0; box-shadow: none; font-weight: bold; }
                .modal-close:hover { color: white; }
                .modal-image-wrapper { background: rgba(0,0,0,0.3); border-radius: 20px; padding: 10px; margin-bottom: 15px; }
                .modal-image { width: 100%; max-height: 180px; object-fit: contain; border-radius: 16px; }
                .modal-name { font-size: 1.6rem; margin: 10px 0 5px; font-weight: bold; }
                .modal-rarity { font-weight: bold; font-size: 1rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 2px; }
                .modal-description { color: #ddd; margin-bottom: 16px; font-style: italic; font-size: 0.9rem; line-height: 1.4; }
                .modal-price-container { display: inline-block; border-radius: 40px; padding: 8px 20px; margin-bottom: 20px; }
                .modal-price { font-weight: bold; font-size: 1.2rem; color: white; text-shadow: 0 1px 2px black; }
                .modal-ok { border: none; border-radius: 40px; padding: 12px 24px; font-weight: bold; font-size: 1.1rem; cursor: pointer; color: white; text-shadow: 0 1px 1px rgba(0,0,0,0.3); width: 80%; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
                .modal-ok:hover { transform: scale(1.02); filter: brightness(1.05); }
                .hebrew-texts { margin-top: 15px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
                .hebrew { font-size: 0.9rem; color: gold; font-family: 'Arial Hebrew', monospace; animation: fadeInOut 2s ease infinite; }
                .fertility-texts { margin-top: 15px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
                .fertility-quote { font-size: 0.9rem; color: #ff9a9e; font-family: 'Comic Sans MS', cursive; animation: fadeInOutFertility 2s ease infinite; background: rgba(0,0,0,0.3); padding: 4px 12px; border-radius: 40px; }
                @keyframes fadeInOutFertility { 0%,100% { opacity: 0.6; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1.05); text-shadow: 0 0 5px #ff6b6b; } }
                @keyframes fadeInOut { 0%,100% { opacity: 0.5; } 50% { opacity: 1; text-shadow: 0 0 5px gold; } }
                .confetti-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1001; }
                .confetti-container::before, .confetti-container::after { content: "🎉 ✡️ 🎊 🇮🇱 ✡️ 🎉"; position: absolute; font-size: 30px; white-space: nowrap; animation: confettiFall 3s linear forwards; }
                .confetti-container::before { left: 10%; animation-delay: 0s; }
                .confetti-container::after { left: 70%; animation-delay: 0.5s; }
                .fertility-confetti { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1001; }
                .fertility-confetti::before, .fertility-confetti::after { content: "💦 🌱 🥚 💚 🧬 💦"; position: absolute; font-size: 30px; white-space: nowrap; animation: confettiFall 4s linear forwards; }
                .fertility-confetti::before { left: 5%; animation-delay: 0s; }
                .fertility-confetti::after { left: 80%; animation-delay: 0.8s; }
                @keyframes confettiFall { 0% { transform: translateY(-100px) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
                @keyframes starSpin { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(360deg); } }
                @keyframes floatNote { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-60px) rotate(15deg); opacity: 0; } }
            `}</style>
        </div>
    );
}

export default Spin;