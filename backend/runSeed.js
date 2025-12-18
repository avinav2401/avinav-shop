const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productModel = require('./models/productModel');
const mockProducts = require('./helpers/mockData');

dotenv.config();

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB for Seeding");

        // Check if products already exist
        const count = await productModel.countDocuments();
        if (count > 5) {
            console.log("Database already has products. Skipping seed.");
            process.exit();
        }

        console.log("Seeding Database with Mock Data...");

        // Remove _id to let Mongo generate valid ObjectIDs
        const productsToInsert = mockProducts.map(p => {
            const { _id, ...rest } = p;
            return rest;
        });

        await productModel.insertMany(productsToInsert);
        console.log("Seeding Complete!");
        process.exit();
    } catch (err) {
        console.error("Seeding Failed:", err);
        process.exit(1);
    }
};

seedDB();
