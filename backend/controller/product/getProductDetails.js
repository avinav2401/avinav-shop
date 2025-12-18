const productModel = require("../../models/productModel")

const mockProducts = require("../../helpers/mockData")

const getProductDetails = async (req, res) => {
    const { productId } = req.body
    try {
        let product;
        try {
            product = await productModel.findById(productId)
        } catch (e) {
            // Ignore mongo id cast errors given we might pass "mock1"
        }

        if (!product) {
            // Try finding in mock data
            product = mockProducts.find(p => p._id === productId)
        }

        if (!product) {
            throw new Error("Product not found")
        }

        res.json({
            data: product,
            message: "Ok",
            success: true,
            error: false
        })


    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = getProductDetails