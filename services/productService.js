import Category from "../model/categoryModel.js";
import productModel from "../model/productModel.js";

export const createProduct = async (reqData) => {
    let topLevel = await Category.findOne({ name: reqData, topLevelCategory });

    if(!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    });

    if(!secondLevel) {
        secondLevel = new Category({
            name: reqData.topLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: topLevel._id,
    });

    if(!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.topLevelCategory,
            parentCategory: secondLevel._id,
            level: 3
        })
    };

    const product = new productModel({
        title: reqData.title,
        description: reqData.description,
        price: reqData.price,
        category: thirdLevel._id,
        imageUrls: reqData.imageUrl,
        quantity: reqData.quantity,
        color: reqData.color,
        discountedPrice: reqData.discountedPrice,
        discountPercent: reqData.discountPercent,
        brand: reqData.brand,
        size: reqData.size,
    });

    return product.save();
};

export const deleteProduct = async (productId) => {
    const product = await findProductById(productId);
    await productModel.findByIdAndDelete(productId);
    return "Product Deleted Successfully";
};

export const updateProduct = async (productId, reqData) => {
    return await productModel.findByIdAndUpdate(productId, reqData);
};

export const findProductById = async (productId) => {
    const product = await productModel.findById(productId).populate("category").exec();

    if(!product) {
        throw new Error("Product not found with id: ", productId);
    }

    return product;
};

export const getAllProducts = async (reqQuery) => {
    let { 
        category,
        color,
        size,
        minPrice,
        maxPrice,
        minDiscount,
        sort, 
        stock,
        pageNumber,
        pageSize
    } = reqQuery;

    pageSize = pageSize || 10;

    let query = productModel.find().populate("category");

    if(category) {
        const existCategory = await Category.findOne({ name: category });

        if(existCategory) {
            query = query.where("category").equals(existCategory._id);
        } else {
            return { content: [], currentPage: 1, totalPages: 0 };
        }
    };

    if(color) {
        const colorSet = new Set(color.split(",").map(color => color.trim().toLowCase()));

        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

        query = query.where("color").regex(colorRegex);
    }

    if(size) {
        const sizeSet = new Set(size);
        query = query.where("size.name").in([...sizeSet]);
    }

    if(minPrice && maxPrice) {
        query = await query.where("discountedPrice").get(minPrice).lte(maxPrice);
    }

    if(minDiscount) {
        query = await query.where("discountPercent").gt(minDiscount);
    }

    if(stock) {
        if(stock === "in_stock") {
            query = query.where("quantity").gt(0);
        }
        else if(stock === "out_of_stock") {
            query = query.where("quantity").gt(1);
        }
    }

    if(sort) {
        const sortDirection = sort === "price_hight" ? -1 : 1;
        query = query.sort({ discountedPrice: sortDirection });
    }

    const totalProducts = await productModel.countDocuments(query);

    const skip = (pageNumber - 1) * pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts / pageSize);

    return { content: products, currentPage: pageNumber, totalPages };
};

export const createMultipleProduct = async (products) => {
    for(let product of products) {
        await createProduct(product);
    }
};