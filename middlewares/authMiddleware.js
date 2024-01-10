import JWT from "jsonwebtoken";
import userModel from "../model/userModel.js";
import { getUserIdFromToken, hashPassword } from "../helper/authHelper.js";

export const requiredSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.userModel = decode; 
        next();
    } catch (error) {
        console.log(error);
    }
};

export const isAdmin= async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            });
        } else {
            next();
        };
    } catch (error) {
        console.log(error);
    }
};

export const createUser = async (userData) => {
    try {
        let { name, email, password } = userData;

        const existing = await userModel.findOne({ email });
        if(existing) {
            throw new Error("User Already Existing");
        }
        const hashedPassword = await hashPassword(password);

        const user = await userModel.create({ name, email, password: hashedPassword });
        console.log("Created User: ", user);
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const findUserById = async (userId) => {
    try {
        const user = await userModel.findById(userId)
        // .populate("address");
        if(!user) {
            throw new Error("User not found with id: ", userId);
        }
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const getUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email });
        if(!user) {
            throw new Error("User not found with id: ", email);
        }
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const getUserProfileByToken = async (token) => {
    try {
        const userId = getUserIdFromToken(token);
        const user = await findUserById(userId);
        if(!user) {
            throw new Error("User not found with id: ", userId);
        }
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const getAllUsers = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.log(error);
    }
};