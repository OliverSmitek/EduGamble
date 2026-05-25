import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ---------- PRODUCTS (crates for sale) ----------
let products = [
    {
        ID: 1,
        Name: "Common crate",
        ImageLink: "https://cdn.myshoptet.com/usr/www.nakupy-polsko.cz/user/shop/big/43_prijeti-zasilky-do-10kg.jpg?591de996",
        NameOfDrop: "dataComonCrate",
        Price: 1,
    },
    {
        ID: 2,
        Name: "Uncommon crate",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        NameOfDrop: "unComonCrate",
        Price: 15,
    },
    {
        ID: 3,
        Name: "Rare crate",
        ImageLink: "https://cdn.myshoptet.com/usr/www.kitos.cz/user/shop/detail/57744_hdr1685.jpg?686facd5",
        NameOfDrop: "dataRareCrate",
        Price: 150,
    },
    {
        ID: 4,
        Name: "Epic crate",
        ImageLink: "https://www.militarysklad.cz/Content/custom/img_products/2182-co.jpg?v=20250904062119\n",
        NameOfDrop: "epicCrate",
        Price: 350,
    },
    {
        ID: 5,
        Name: "Legendary crate",
        ImageLink: "https://cdn.myshoptet.com/usr/www.alaspro.cz/user/shop/big/191897-2_tc320365.jpg?686efd23",
        NameOfDrop: "legendaryCrate",
        Price: 1000,
    },
];

// ---------- DROP TABLES (items inside each crate) ----------
let dataComonCrate = [
    {
        ID: 1,
        Name: "pitle na stropě",
        ImageLink: "https://images.lbc.co.uk/images/779027?crop=16_9&width=660&relax=1&format=webp&signature=sAnfZ391-MzOvg0mzsZk0N6obJU=",
        Description: "nic moc kárečku to můžeš rovnou vyhodit",
        Price: 1,
        Rarity: 40,
        RarityWord: "Common",
    },
    {
        ID: 2,
        Name: "Prodlužovačka",
        ImageLink: "https://assetsemosproduction.vshcdn.net/content/images/product/original/3022145.JPG",
        Description: "idk asi prodej za nic moc to nestojí",
        Price: 5,
        Rarity: 30,
        RarityWord: "Common",
    },
    {
        ID: 3,
        Name: "pitle na stropě",
        ImageLink: "https://images.lbc.co.uk/images/779027?crop=16_9&width=660&relax=1&format=webp&signature=sAnfZ391-MzOvg0mzsZk0N6obJU=",
        Description: "nic moc kárečku to můžeš rovnou vyhodit",
        Price: 1,
        Rarity: 5,
        RarityWord: "Common",
    },
    {
        ID: 4,
        Name: "Párek",
        ImageLink: "https://www.helago-cz.cz/files/thumbs/mod_eshop/produkty/full/26184.1296996338.jpg?t=1424871900",
        Description: "mňam párek",
        Price: 15,
        Rarity: 30,
        RarityWord: "Uncommon",
    },
    {
        ID: 5,
        Name: "Marek Stánek",
        ImageLink: "https://www.goleto.cz/upload/82035-1110188360.jpg",
        Description: "stánek?",
        Price: 25,
        Rarity: 15,
        RarityWord: "Uncommon",
    },
    {
        ID: 6,
        Name: "Irena Syrena",
        ImageLink: "imgs/IrenaSyrena.jpg",
        Description: "Býdo býdo býdo",
        Price: 55,
        Rarity: 10,
        RarityWord: "Rare",
    },
    {
        ID: 7,
        Name: "Samuel Stonedytek",
        ImageLink: "imgs/SamuelStoundytek.jpg",
        Description: "kámen zde",
        Price: 155,
        Rarity: 5,
        RarityWord: "Rare",
    },
];

let unComonCrate = [
    {
        ID: 1,
        Name: "Prodlužovačka",
        ImageLink: "https://www.nfcp.cz/data/tmp/0/2/892_0.jpg?1638223516_1",
        Description: "idk asi prodej za nic moc to nestojí",
        Price: 5,
        Rarity: 50,
        RarityWord: "Common",
    },
    {
        ID: 2,
        Name: "Párek",
        ImageLink: "https://www.helago-cz.cz/files/thumbs/mod_eshop/produkty/full/26184.1296996338.jpg?t=1424871900",
        Description: "mňam párek",
        Price: 15,
        Rarity: 30,
        RarityWord: "Uncommon",
    },
    {
        ID: 3,
        Name: "Marek Stánek",
        ImageLink: "https://www.goleto.cz/upload/82035-1110188360.jpg",
        Description: "stánek?",
        Price: 25,
        Rarity: 15,
        RarityWord: "Uncommon",
    },
    {
        ID: 4,
        Name: "Irena Syrena",
        ImageLink: "imgs/IrenaSyrena.jpg",
        Description: "Býdo býdo býdo",
        Price: 55,
        Rarity: 10,
        RarityWord: "Rare",
    },
    {
        ID: 5,
        Name: "Samuel Stonedytek",
        ImageLink: "imgs/SamuelStoundytek.jpg",
        Description: "kámen zde",
        Price: 155,
        Rarity: 5,
        RarityWord: "Rare",
    },
    {
        ID: 6,
        Name: "Low Level gay devepomant",
        ImageLink: "imgs/catMan.jpg",
        Description: "je to gay",
        Price: 255,
        Rarity: 10,
        RarityWord: "Epic",
    },
    {
        ID: 7,
        Name: "Johan Femboy",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Ahoj jemnuji se rust a učím se femboy",
        Price: 275,
        Rarity: 10,
        RarityWord: "Epic",
    },
    {
        ID: 8,
        Name: "Petr Plodnost",
        ImageLink: "imgs/PetrPlodnost.png",
        Description: "Absolutní Plodnost",
        Price: 5570,
        Rarity: 5,
        RarityWord: "Mythic",
    },
];

let dataRareCrate = [
    {
        ID: 1,
        Name: "Marek Stánek",
        ImageLink: "https://www.goleto.cz/upload/82035-1110188360.jpg",
        Description: "stánek?",
        Price: 25,
        Rarity: 15,
        RarityWord: "Uncommon",
    },
    {
        ID: 2,
        Name: "Prodlužovačka",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "idk asi prodej za nic moc to nestojí",
        Price: 5,
        Rarity: 10,
        RarityWord: "Common",
    },
    {
        ID: 3,
        Name: "Marek Stánek",
        ImageLink: "https://www.goleto.cz/upload/82035-1110188360.jpg",
        Description: "stánek?",
        Price: 25,
        Rarity: 15,
        RarityWord: "Uncommon",
    },
    {
        ID: 4,
        Name: "Irena Syrena",
        ImageLink: "imgs/IrenaSyrena.jpg",
        Description: "Býdo býdo býdo",
        Price: 55,
        Rarity: 10,
        RarityWord: "Rare",
    },
    {
        ID: 5,
        Name: "Filip Turek",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Byl toto opravdu student educanetu",
        Price: 75,
        Rarity: 30,
        RarityWord: "Rare",
    },
    {
        ID: 6,
        Name: "Párek",
        ImageLink: "https://www.helago-cz.cz/files/thumbs/mod_eshop/produkty/full/26184.1296996338.jpg?t=1424871900",
        Description: "mňam párek",
        Price: 15,
        Rarity: 30,
        RarityWord: "Uncommon",
    },
    {
        ID: 7,
        Name: "Samuel Stonedytek",
        ImageLink: "imgs/SamuelStoundytek.jpg",
        Description: "kámen zde",
        Price: 155,
        Rarity: 5,
        RarityWord: "Rare",
    },
    {
        ID: 8,
        Name: "John Pour",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Je to on to je ten John Pour",
        Price: 285,
        Rarity: 20,
        RarityWord: "Epic",
    },
    {
        ID: 9,
        Name: "Low Level gay devepomant",
        ImageLink: "imgs/catMan.jpg",
        Description: "je to gay",
        Price: 255,
        Rarity: 10,
        RarityWord: "Epic",
    },
    {
        ID: 10,
        Name: "Tomáš Boule",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Boule moule",
        Price: 250,
        Rarity: 20,
        RarityWord: "Epic",
    },
    {
        ID: 11,
        Name: "Petr Plodnost",
        ImageLink: "imgs/PetrPlodnost.png",
        Description: "Absolutní Plodnost",
        Price: 5570,
        Rarity: 5,
        RarityWord: "Mythic",
    },
    {
        ID: 12,
        Name: "Pokus O vystřílení školy",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "To je kokot...",
        Price: 870,
        Rarity: 10,
        RarityWord: "Legendary",
    },
    {
        ID: 13,
        Name: "ISIC",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Udělej si ISIC ty debile!",
        Price: 980,
        Rarity: 10,
        RarityWord: "Legendary",
    },
];

let epicCrate = [
    {
        ID: 1,
        Name: "Samuel Stonedytek",
        ImageLink: "imgs/SamuelStoundytek.jpg",
        Description: "kámen zde",
        Price: 155,
        Rarity: 20,
        RarityWord: "Rare",
    },
    {
        ID: 2,
        Name: "Low Level gay devepomant",
        ImageLink: "imgs/catMan.jpg",
        Description: "je to gay",
        Price: 255,
        Rarity: 10,
        RarityWord: "Epic",
    },
    {
        ID: 3,
        Name: "Lukáš Hardwere",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "tvrdý vere",
        Price: 220,
        Rarity: 30,
        RarityWord: "Epic",
    },
    {
        ID: 4,
        Name: "Tomáš Boule",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Boule moule",
        Price: 250,
        Rarity: 20,
        RarityWord: "Epic",
    },
    {
        ID: 5,
        Name: "Low Level gay devepomant",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "tvrdý vere",
        Price: 220,
        Rarity: 30,
        RarityWord: "Epic",
    },
    {
        ID: 6,
        Name: "Johan Femboy",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Ahoj jemnuji se rust a učím se femboy",
        Price: 275,
        Rarity: 10,
        RarityWord: "Epic",
    },
    {
        ID: 7,
        Name: "Petr Plodnost",
        ImageLink: "imgs/PetrPlodnost.png",
        Description: "Absolutní Plodnost",
        Price: 5570,
        Rarity: 5,
        RarityWord: "Mythic",
    },
    {
        ID: 8,
        Name: "Pokus O vystřílení školy",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "To je kokot...",
        Price: 870,
        Rarity: 10,
        RarityWord: "Legendary",
    },
    {
        ID: 9,
        Name: "ISIC",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Udělej si ISIC ty debile!",
        Price: 980,
        Rarity: 10,
        RarityWord: "Legendary",
    },
    {
        ID: 10,
        Name: "Samuel JewDytek",
        ImageLink: "imgs/unnamed.webp",
        Description: "הבה נגילה",
        Price: 4980,
        Rarity: 2,
        RarityWord: "Mythic",
    },
    {
        ID: 11,
        Name: "Kra",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "kra kra kra!!!!",
        Price: 1280,
        Rarity: 10,
        RarityWord: "Legendary",
    },
];

let legendaryCrate = [
    {
        ID: 1,
        Name: "Petr Plodnost",
        ImageLink: "imgs/PetrPlodnost.png",
        Description: "Absolutní Plodnost",
        Price: 5570,
        Rarity: 5,
        RarityWord: "Mythic",
    },
    {
        ID: 2,
        Name: "Pokus O vystřílení školy",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "To je kokot...",
        Price: 870,
        Rarity: 10,
        RarityWord: "Legendary",
    },
    {
        ID: 3,
        Name: "ISIC",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "Udělej si ISIC ty debile!",
        Price: 980,
        Rarity: 10,
        RarityWord: "Legendary",
    },
    {
        ID: 4,
        Name: "Samuel JewDytek",
        ImageLink: "imgs/unnamed.webp",
        Description: "הבה נגילה",
        Price: 4980,
        Rarity: 5,
        RarityWord: "Mythic",
    },
    {
        ID: 5,
        Name: "Kra",
        ImageLink: "https://p.turbosquid.com/ts-thumb/F9/j6rGVQ/cE/oldwoodenshippingcrate3dsmodel001/jpg/1646403183/1920x1080/fit_q87/676b5dd5e02d947615828566b5aac625ce49398f/oldwoodenshippingcrate3dsmodel001.jpg",
        Description: "kra kra kra!!!!",
        Price: 1280,
        Rarity: 10,
        RarityWord: "Legendary",
    },
];

// ---------- INVENTORY & COINS ----------
let kosike = [];
let coins = 25;   // starting coins

// ---------- COINS ENDPOINTS ----------
app.get("/api/coins", (req, res) => {
    res.json({ coins });
});

app.post("/api/buyCrate", (req, res) => {
    const { price, crateName } = req.body;
    if (coins >= price) {
        coins -= price;
        res.json({ success: true, coins, crateName });
    } else {
        res.status(400).json({ success: false, message: "Nemáš dost coinů!" });
    }
});

app.post("/api/addCoins", (req, res) => {
    const { amount } = req.body;
    coins += amount;
    res.json({ success: true, coins });
});





// ---------- COINS ENDPOINTS ----------
app.get("/api/coins", (req, res) => {
    res.json({ coins });
});

app.post("/api/buyCrate", (req, res) => {
    const { price, crateName } = req.body;
    if (coins >= price) {
        coins -= price;
        res.json({ success: true, coins, crateName });
    } else {
        res.status(400).json({ success: false, message: "Nemáš dost coinů!" });
    }
});

app.post("/api/addCoins", (req, res) => {
    const { amount } = req.body;
    coins += amount;
    res.json({ success: true, coins });
});

// ---------- SELL ITEM ----------
app.post("/api/sellItem", (req, res) => {
    const { id, price } = req.body;
    const itemExists = kosike.some(item => item.ID === id);
    if (!itemExists) {
        return res.status(404).json({ success: false, message: "Předmět nenalezen" });
    }
    kosike = kosike.filter(item => item.ID !== id);
    const sellValue = Math.floor(price);
    coins += sellValue;
    res.json({ success: true, coins, sellValue });
});

// ---------- CRATES (products for sale) ----------
app.get("/api/products", (req, res) => {
    res.json(products);
});

// ---------- DROP TABLES (available items in each crate) ----------
app.get("/api/dataComonCrate", (req, res) => {
    res.json(dataComonCrate);
});
app.get("/api/unComonCrate", (req, res) => {
    res.json(unComonCrate);
});
app.get("/api/dataRareCrate", (req, res) => {
    res.json(dataRareCrate);
});
app.get("/api/epicCrate", (req, res) => {
    res.json(epicCrate);
});
app.get("/api/legendaryCrate", (req, res) => {
    res.json(legendaryCrate);
});

// ---------- INVENTORY (what the player owns) ----------
app.get("/api/card", (req, res) => {
    res.json(kosike);
});

app.post("/api/card", (req, res) => {
    kosike.push(req.body);
    res.json({ success: true });
});

app.post("/api/removeItem", (req, res) => {
    kosike = kosike.filter(item => item.ID !== req.body.id);
    res.json({ success: true });
});

// ---------- START SERVER ----------
app.listen(3002, () => {
    console.log("Server running on http://localhost:3002");
});
// ---------- SELL ITEM ----------
app.post("/api/sellItem", (req, res) => {
    const { id, price } = req.body;
    const itemExists = kosike.some(item => item.ID === id);
    if (!itemExists) {
        return res.status(404).json({ success: false, message: "Předmět nenalezen" });
    }
    kosike = kosike.filter(item => item.ID !== id);
    const sellValue = Math.floor(price);
    coins += sellValue;
    res.json({ success: true, coins, sellValue });
});

// ---------- CRATES (products for sale) ----------
app.get("/api/products", (req, res) => {
    res.json(products);
});

// ---------- DROP TABLES (available items in each crate) ----------
app.get("/api/dataComonCrate", (req, res) => {
    res.json(dataComonCrate);
});
app.get("/api/unComonCrate", (req, res) => {
    res.json(unComonCrate);
});
app.get("/api/dataRareCrate", (req, res) => {
    res.json(dataRareCrate);
});
app.get("/api/epicCrate", (req, res) => {
    res.json(epicCrate);
});
app.get("/api/legendaryCrate", (req, res) => {
    res.json(legendaryCrate);
});

// ---------- INVENTORY (what the player owns) ----------
app.get("/api/card", (req, res) => {
    res.json(kosike);
});

app.post("/api/card", (req, res) => {
    kosike.push(req.body);
    res.json({ success: true });
});

app.post("/api/removeItem", (req, res) => {
    kosike = kosike.filter(item => item.ID !== req.body.id);
    res.json({ success: true });
});

// ---------- START SERVER ----------
app.listen(3002, () => {
    console.log("Server running on http://localhost:3002");
});