const Express = require("express");
const Product = require("../models/products.model");
const auth = require("../middlewares/auth.middleware");

const ProductRouter = Express.Router();

ProductRouter.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).send(products);
	} catch (error) {
		res.status(500).send({
			message: error.message,
		});
	}
});
ProductRouter.get("/:productId/hotDeals",auth, async (req, res) => {
	try {
		const productId = req.params.productId;
		const product = await Product.findById(productId);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		return res.status(200).send(product);
	} catch (error) {
		console.error("Error retrieving otherArray:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
});
ProductRouter.get("/:productId/tvElectronics", async (req, res) => {
	try {
		const productId = req.params.productId;
		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		return res.status(200).send(product);
	} catch (error) {
		console.error("Error retrieving otherArray:", error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
});
ProductRouter.get("/search/:searchItem", async (req, res) => {
	try {
		const {searchItem}  = req.params;
		console.log(searchItem)
		const products = await Product.find({
			"custom-div-title": { $regex: searchItem, $options: "i" },
		});
		if (products) {
			res.status(200).send(products);
		} else {
			res.status(400).send({ msg: "data not found" });
		}
	} catch (error) {
		res.status(400).send({ msg: error.message });
	}
});

module.exports = ProductRouter;
