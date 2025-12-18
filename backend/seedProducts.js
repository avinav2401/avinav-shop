
const mongoose = require('mongoose');
const productModel = require('./models/productModel');
require('dotenv').config();

const connectDB = require('./config/db');

// Using Unsplash images which are generally reliable for hotlinking
const products = [
    {
        productName: "Airpods Pro",
        brandName: "Apple",
        category: "airpodes",
        productImage: ["https://images.unsplash.com/photo-1572569028738-411a43c4a834?w=500&auto=format&fit=crop&q=60"],
        description: "Active Noise Cancellation.",
        price: 24900,
        sellingPrice: 19900
    },
    {
        productName: "Galaxy Watch 6",
        brandName: "Samsung",
        category: "watches",
        productImage: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60"],
        description: "Smart watch with fitness tracking.",
        price: 35000,
        sellingPrice: 29999
    },
    {
        productName: "iPhone 15",
        brandName: "Apple",
        category: "mobiles",
        productImage: ["https://images.unsplash.com/photo-1510557880194-fcb6cb10fa18?w=500&auto=format&fit=crop&q=60"],
        description: "Dynamic Island. New 48MP camera.",
        price: 79900,
        sellingPrice: 75900
    },
    {
        productName: "Logitech MX Master 3S",
        brandName: "Logitech",
        category: "Mouse",
        productImage: ["https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60"],
        description: "Performance Wireless Mouse.",
        price: 9995,
        sellingPrice: 8500
    },
    {
        productName: "Sony Bravia 55 inch",
        brandName: "Sony",
        category: "televisions",
        productImage: ["https://images.unsplash.com/photo-1593784991060-da824a6fa4d5?w=500&auto=format&fit=crop&q=60"],
        description: "4K Ultra HD Smart LED Google TV.",
        price: 74900,
        sellingPrice: 55990
    },
    {
        productName: "Canon EOS R50",
        brandName: "Canon",
        category: "camera",
        productImage: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60"],
        description: "Mirrorless Camera.",
        price: 75995,
        sellingPrice: 69999
    },
    {
        productName: "Sony WH-1000XM5",
        brandName: "Sony",
        category: "earphones",
        productImage: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"],
        description: "Wireless Noise Cancelling Headphones.",
        price: 29990,
        sellingPrice: 24990
    },
    {
        productName: "JBL Flip 6",
        brandName: "JBL",
        category: "speakers",
        productImage: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"],
        description: "Portable Bluetooth Speaker.",
        price: 13999,
        sellingPrice: 9999
    },
    {
        productName: "Samsung 253L Refrigerator",
        brandName: "Samsung",
        category: "refrigerator",
        productImage: ["https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=500&auto=format&fit=crop&q=60"],
        description: "Double Door Refrigerator.",
        price: 30990,
        sellingPrice: 24990
    },
    {
        productName: "Philips OneBlade",
        brandName: "Philips",
        category: "trimmers",
        productImage: ["https://images.unsplash.com/photo-1621607512214-68297f236582?w=500&auto=format&fit=crop&q=60"],
        description: "Hybrid Trimmer and Shaver.",
        price: 1499,
        sellingPrice: 1199
    }
]

const seedDB = async () => {
    try {
        let uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-ecommerce";
        uri = uri.replace("localhost", "127.0.0.1");
        console.log("Using URI:", uri);
        await mongoose.connect(uri);

        console.log("Connected to DB");

        // Clear existing products to avoid duplicates and remove broken links
        await productModel.deleteMany({});
        console.log("Cleared existing products");

        await productModel.insertMany(products);
        console.log("Products Seeded Successfully");
    } catch (err) {
        console.error("Seed Error:", err);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
