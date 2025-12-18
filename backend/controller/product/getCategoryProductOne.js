const productModel = require("../../models/productModel")


const mockProducts = require("../../helpers/mockData")

const getCategoryProduct = async (req, res) => {
    try {
        const productCategory = await productModel.distinct("category")

        console.log("category", productCategory)

        //array to store one product from each category
        const productByCategory = []

        for (const category of productCategory) {
            const product = await productModel.findOne({ category })

            if (product) {
                productByCategory.push(product)
            }
        }

        if (productByCategory.length === 0) {
            throw new Error("No products found");
        }


        res.json({
            message: "category product",
            data: productByCategory,
            success: true,
            error: false
        })


    } catch (err) {
        // Fallback to mock data
        console.log("Using Mock Data for Category List");
        // Get unique categories from mock data
        const uniqueCategories = [...new Set(mockProducts.map(item => item.category))];

        const productByCategory = uniqueCategories.map(cat => {
            return mockProducts.find(p => p.category === cat)
        }).filter(Boolean);

        res.json({
            message: "Mock category product",
            data: productByCategory,
            success: true,
            error: false
        })
    }
}


module.exports = getCategoryProduct