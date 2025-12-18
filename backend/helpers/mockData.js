
const mockProducts = [
    // --- Airpodes (6 items) ---
    {
        _id: "airpod1",
        productName: "AirPods Pro (2nd Gen)",
        brandName: "Apple",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=500&auto=format&fit=crop&q=60"],
        description: "Active Noise Cancellation, Transparency mode, and Personalized Spatial Audio.",
        price: 24900,
        sellingPrice: 19900
    },
    {
        _id: "airpod2",
        productName: "Galaxy Buds2 Pro",
        brandName: "Samsung",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60"],
        description: "24-bit Hi-Fi audio, Intelligent ANC, and comfortable fit.",
        price: 18999,
        sellingPrice: 14999
    },
    {
        _id: "airpod3",
        productName: "Pixel Buds Pro",
        brandName: "Google",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60"],
        description: "Premium active noise cancelling wireless earbuds.",
        price: 19990,
        sellingPrice: 14990
    },
    {
        _id: "airpod4",
        productName: "Nothing Ear (2)",
        brandName: "Nothing",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60"],
        description: "Hi-Res Audio Certified, LHDC 5.0, Personal Sound Profile.",
        price: 12999,
        sellingPrice: 9999
    },
    {
        _id: "airpod5",
        productName: "Sony WF-1000XM5",
        brandName: "Sony",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60"],
        description: "The Best Silence. The Best Sound.",
        price: 24990,
        sellingPrice: 21990
    },
    {
        _id: "airpod6",
        productName: "OnePlus Buds Pro 2",
        brandName: "OnePlus",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60"],
        description: "MelodyBoost Dual Drivers, Smart Adaptive Noise Cancellation.",
        price: 11999,
        sellingPrice: 9999
    },

    // --- Watches (6 items) ---
    {
        _id: "watch1",
        productName: "Apple Watch Series 9",
        brandName: "Apple",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60"],
        description: "Smarter, brighter, and mightier.",
        price: 44900,
        sellingPrice: 41900
    },
    {
        _id: "watch2",
        productName: "Samsung Galaxy Watch 6",
        brandName: "Samsung",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"],
        description: "The watch that knows you best.",
        price: 29999,
        sellingPrice: 24999
    },
    {
        _id: "watch3",
        productName: "Fossil Gen 6",
        brandName: "Fossil",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60"],
        description: "Smartwatch with Qualcomm Snapdragon Wear 4100+.",
        price: 24995,
        sellingPrice: 11995
    },
    {
        _id: "watch4",
        productName: "Garmin Venu 2",
        brandName: "Garmin",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60"],
        description: "GPS smartwatch with advanced health monitoring.",
        price: 41990,
        sellingPrice: 38990
    },
    {
        _id: "watch5",
        productName: "Fitbit Versa 4",
        brandName: "Fitbit",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60"],
        description: "Fitness smartwatch built for results.",
        price: 20499,
        sellingPrice: 17999
    },
    {
        _id: "watch6",
        productName: "Amazfit GTR 4",
        brandName: "Amazfit",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60"],
        description: "Smart Watch with Dual-band Positioning.",
        price: 16999,
        sellingPrice: 12999
    },

    // --- Mobiles (6 items) ---
    {
        _id: "mobile1",
        productName: "iPhone 15 Pro Max",
        brandName: "Apple",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60"],
        description: "Titanium design. A17 Pro chip. 48MP Main camera.",
        price: 159900,
        sellingPrice: 156900
    },
    {
        _id: "mobile2",
        productName: "Samsung Galaxy S24 Ultra",
        brandName: "Samsung",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60"],
        description: "Galaxy AI is here.",
        price: 139999,
        sellingPrice: 129999
    },
    {
        _id: "mobile3",
        productName: "Google Pixel 8 Pro",
        brandName: "Google",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&auto=format&fit=crop&q=60"],
        description: "The most advanced Pixel phones yet.",
        price: 106999,
        sellingPrice: 99999
    },
    {
        _id: "mobile4",
        productName: "OnePlus 12",
        brandName: "OnePlus",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60"],
        description: "Smooth Beyond Belief.",
        price: 69999,
        sellingPrice: 64999
    },
    {
        _id: "mobile5",
        productName: "Xiaomi 14",
        brandName: "Xiaomi",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=60"],
        description: "Leica optics. Snapshot aesthetics.",
        price: 69999,
        sellingPrice: 59999
    },
    {
        _id: "mobile6",
        productName: "Nothing Phone (2)",
        brandName: "Nothing",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60"],
        description: "Come to the bright side.",
        price: 49999,
        sellingPrice: 39999
    },

    // --- Mouse (6 items) ---
    {
        _id: "mouse1",
        productName: "Logitech MX Master 3S",
        brandName: "Logitech",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60"],
        description: "Performance Wireless Mouse",
        price: 9995,
        sellingPrice: 8595
    },
    {
        _id: "mouse2",
        productName: "Razer Basilisk V3",
        brandName: "Razer",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60"],
        description: "Customizable Ergonomic Gaming Mouse",
        price: 5999,
        sellingPrice: 4499
    },
    {
        _id: "mouse3",
        productName: "Apple Magic Mouse",
        brandName: "Apple",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60"],
        description: "Wireless, Rechargeable. Multi-Touch surface.",
        price: 7500,
        sellingPrice: 6900
    },
    {
        _id: "mouse4",
        productName: "Dell Premier Rechargeable",
        brandName: "Dell",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60"],
        description: "MS7421W - Wireless mouse - Bluetooth, 2.4 GHz",
        price: 4999,
        sellingPrice: 3599
    },
    {
        _id: "mouse5",
        productName: "HP S1000 Wireless",
        brandName: "HP",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60"],
        description: "Silent Wireless Mouse",
        price: 1299,
        sellingPrice: 899
    },
    {
        _id: "mouse6",
        productName: "Lenovo 600 Bluetooth",
        brandName: "Lenovo",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60"],
        description: "Silent Mouse. Low profile.",
        price: 2500,
        sellingPrice: 1500
    },

    // --- Televisions (6 items) ---
    {
        _id: "tv1",
        productName: "Sony Bravia 55\" 4K",
        brandName: "Sony",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=500&auto=format&fit=crop&q=60"],
        description: "XR Series Google TV",
        price: 84900,
        sellingPrice: 65990
    },
    {
        _id: "tv2",
        productName: "LG 55\" OLED evo",
        brandName: "LG",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=500&auto=format&fit=crop&q=60"],
        description: "Self-lit OLED 4K",
        price: 149990,
        sellingPrice: 119990
    },
    {
        _id: "tv3",
        productName: "Samsung 43\" Crystal 4K",
        brandName: "Samsung",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60"],
        description: "Crystal Processor 4K",
        price: 44900,
        sellingPrice: 32900
    },
    {
        _id: "tv4",
        productName: "Xiaomi Smart TV X 50",
        brandName: "Xiaomi",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?w=500&auto=format&fit=crop&q=60"],
        description: "4K Dolby Vision. 30W Sound.",
        price: 35999,
        sellingPrice: 29999
    },
    {
        _id: "tv5",
        productName: "OnePlus TV 65 Q2 Pro",
        brandName: "OnePlus",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=60"],
        description: "QLED 4K, 70W Sound System",
        price: 99999,
        sellingPrice: 89999
    },
    {
        _id: "tv6",
        productName: "Vu 55\" GloLED",
        brandName: "Vu",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&auto=format&fit=crop&q=60"],
        description: "4K Smart Google TV",
        price: 45000,
        sellingPrice: 37999
    },

    // --- Camera (6 items) ---
    {
        _id: "cam1",
        productName: "Sony Alpha ILCE-7M4",
        brandName: "Sony",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60"],
        description: "Full-frame Hybrid Camera",
        price: 242990,
        sellingPrice: 222990
    },
    {
        _id: "cam2",
        productName: "Canon EOS R6 Mark II",
        brandName: "Canon",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=500&auto=format&fit=crop&q=60"],
        description: "Full-frame Mirrorless Camera",
        price: 243995,
        sellingPrice: 215995
    },
    {
        _id: "cam3",
        productName: "Nikon Z f",
        brandName: "Nikon",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60"],
        description: "Iconic styling. Full-frame power.",
        price: 176995,
        sellingPrice: 169995
    },
    {
        _id: "cam4",
        productName: "GoPro HERO12 Black",
        brandName: "GoPro",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60"],
        description: "Waterproof Action Camera",
        price: 45000,
        sellingPrice: 37990
    },
    {
        _id: "cam5",
        productName: "Fujifilm X-T5",
        brandName: "Fujifilm",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60"],
        description: "Mirrorless Camera Body",
        price: 159999,
        sellingPrice: 149999
    },
    {
        _id: "cam6",
        productName: "Panasonic Lumix S5II",
        brandName: "Panasonic",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60"],
        description: "Full Frame Mirrorless Camera",
        price: 189990,
        sellingPrice: 174990
    },

    // --- Wired Earphones (6 items) ---
    {
        _id: "ear1",
        productName: "Sennheiser IE 200",
        brandName: "Sennheiser",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"],
        description: "In-Ear Audiophile Headphones",
        price: 14990,
        sellingPrice: 11990
    },
    {
        _id: "ear2",
        productName: "Sony MDR-XB55AP",
        brandName: "Sony",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60"],
        description: "Wired Extra Bass Headphones",
        price: 2490,
        sellingPrice: 1999
    },
    {
        _id: "ear3",
        productName: "JBL Endurance Run 2",
        brandName: "JBL",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60"],
        description: "Wired Sports In-Ear Headphones",
        price: 1199,
        sellingPrice: 999
    },
    {
        _id: "ear4",
        productName: "Realme Buds 2",
        brandName: "Realme",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60"],
        description: "Real Bass. Tangle Free.",
        price: 799,
        sellingPrice: 599
    },
    {
        _id: "ear5",
        productName: "Mi Dual Driver",
        brandName: "Xiaomi",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60"],
        description: "Magnetic Earbuds. Braided Cable.",
        price: 999,
        sellingPrice: 799
    },
    {
        _id: "ear6",
        productName: "Boat Bassheads 100",
        brandName: "Boat",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60"],
        description: "Wired Earphones with Mic",
        price: 999,
        sellingPrice: 399
    },

    // --- Speakers (6 items) ---
    {
        _id: "spk1",
        productName: "JBL Flip 6",
        brandName: "JBL",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"],
        description: "Portable Bluetooth Speaker",
        price: 13999,
        sellingPrice: 9999
    },
    {
        _id: "spk2",
        productName: "Marshall Emberton II",
        brandName: "Marshall",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"],
        description: "Portable Speaker",
        price: 17499,
        sellingPrice: 14999
    },
    {
        _id: "spk3",
        productName: "Sony SRS-XB13",
        brandName: "Sony",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&auto=format&fit=crop&q=60"],
        description: "Wireless Extra Bass Portable Speaker",
        price: 4990,
        sellingPrice: 3990
    },
    {
        _id: "spk4",
        productName: "Bose SoundLink Flex",
        brandName: "Bose",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60"],
        description: "Bluetooth Portable Speaker",
        price: 15900,
        sellingPrice: 14299
    },
    {
        _id: "spk5",
        productName: "Boat Stone 352",
        brandName: "Boat",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=500&auto=format&fit=crop&q=60"],
        description: "10W RMS Stereo Sound",
        price: 3490,
        sellingPrice: 1699
    },
    {
        _id: "spk6",
        productName: "Tribit StromBox Flow",
        brandName: "Tribit",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1545459720-aac3e5cdfadc?w=500&auto=format&fit=crop&q=60"],
        description: "Portable Speaker",
        price: 8999,
        sellingPrice: 6649
    },

    // --- Refrigerator (6 items) ---
    {
        _id: "ref1",
        productName: "Samsung 253L",
        brandName: "Samsung",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&auto=format&fit=crop&q=60"],
        description: "Double Door Refrigerator",
        price: 30990,
        sellingPrice: 24990
    },
    {
        _id: "ref2",
        productName: "LG 242L",
        brandName: "LG",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&auto=format&fit=crop&q=60"],
        description: "Smart Inverter Frost-Free",
        price: 31999,
        sellingPrice: 26990
    },
    {
        _id: "ref3",
        productName: "Whirlpool 265L",
        brandName: "Whirlpool",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1536353284924-9220c464e262?w=500&auto=format&fit=crop&q=60"],
        description: "Convertible 5-in-1",
        price: 35150,
        sellingPrice: 28490
    },
    {
        _id: "ref4",
        productName: "Haier 328L",
        brandName: "Haier",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&auto=format&fit=crop&q=60"],
        description: "3 Door Convertible",
        price: 45900,
        sellingPrice: 35990
    },
    {
        _id: "ref5",
        productName: "Godrej 244L",
        brandName: "Godrej",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1536353284924-9220c464e262?w=500&auto=format&fit=crop&q=60"],
        description: "6-in-1 Convertible",
        price: 28990,
        sellingPrice: 23990
    },
    {
        _id: "ref6",
        productName: "Bosch 559L",
        brandName: "Bosch",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1536353284924-9220c464e262?w=500&auto=format&fit=crop&q=60"],
        description: "Series 4. Double Door.",
        price: 79990,
        sellingPrice: 65990
    },

    // --- Trimmers (6 items) ---
    {
        _id: "trim1",
        productName: "Philips OneBlade",
        brandName: "Philips",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "Hybrid Trimmer and Shaver",
        price: 1499,
        sellingPrice: 1199
    },
    {
        _id: "trim2",
        productName: "MI Beard Trimmer 2C",
        brandName: "Xiaomi",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "Precision Trimming",
        price: 1199,
        sellingPrice: 999
    },
    {
        _id: "trim3",
        productName: "Braun XT5",
        brandName: "Braun",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "Beard Trimmer, Shaver, Detailer",
        price: 3499,
        sellingPrice: 2999
    },
    {
        _id: "trim4",
        productName: "Vega X-1",
        brandName: "Vega",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "Beard Trimmer",
        price: 999,
        sellingPrice: 599
    },
    {
        _id: "trim5",
        productName: "Havells BT9005",
        brandName: "Havells",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "Zoom Wheel Trimmer",
        price: 1999,
        sellingPrice: 1499
    },
    {
        _id: "trim6",
        productName: "Nova NHT 1073",
        brandName: "Nova",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=500&auto=format&fit=crop&q=60"],
        description: "USB Trimmer",
        price: 799,
        sellingPrice: 399
    }
]

module.exports = mockProducts
