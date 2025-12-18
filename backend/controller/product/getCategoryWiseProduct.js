const productModel = require("../../models/productModel")

const mockProducts = require("../../helpers/mockData")

const getCategoryWiseProduct = async (req, res) => {
    const { category } = req?.body || req?.query
    try {
        const product = await productModel.find({ category })

        if (!product || product.length === 0) {
            throw new Error("No products found in DB");
        }

        res.json({
            data: product,
            message: "Product",
            success: true,
            error: false
        })
    } catch (err) {
        // Fallback to mock data
        console.log("Using Mock Data for", category);
        const mockDataResult = mockProducts.filter(p => p.category === category);

        res.json({
            data: mockDataResult,
            message: "Mock Product",
            success: true,
            error: false
        })
    }
}


module.exports = getCategoryWiseProduct