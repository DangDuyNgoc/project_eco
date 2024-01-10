import { 
    createMultipleProduct,
    createProduct,
    deleteProduct,
    findProductById,
    getAllProducts,
    updateProduct 
} from './../services/productService.js';

export const createProductController = async (req, res) => {
    try {
        const product = await createProduct(req.body);

        return res.status(200).send({
            success: true,
            message: "Created Product Successfully",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Created Product",
        });
    }
};

export const deletedProductController = async (req, res) =>{
    const productId = req.params.id;
    try {
        const product = await deleteProduct(productId);

        return res.status(200).send({
            success: true,
            message: "Deleted Product Successfully",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Deleted Product",
        })
    }
};

export const updateProductController = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await updateProduct(productId, req.body);
        return res.status(200).send({
            success: true,
            message: "Updated Product Successfully",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Updated Product",
        })
    }
};

export const findProductByIdController = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await findProductById(productId);
        return res.status(200).send({
            success: true,
            message: "Find Product By ID Successfully",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Find Product By ID",
        })
    }
};

export const getAllProductController = async (req, res) => {
    try {
        const products = await getAllProducts(req.query);
        return res.status(200).send({
            success: true,
            message: "Get All Product Successfully",
            products
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Get All Product",
        })
    }
};

export const createMultipleProductController = async (req, res) => {
    try {
        const product = await createMultipleProduct(req.body);
        return res.status(200).send({
            success: true,
            message: "Created Multiple Product Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Created Multiple Product",
        })
    }
};