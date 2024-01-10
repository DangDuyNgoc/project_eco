import { comparePassword, generateToken } from "../helper/authHelper.js";
import { createUser, getUserByEmail } from "../middlewares/authMiddleware.js";
import { createCart } from "../services/cartService.js";

export const registerController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        const jwt = generateToken(user._id);

        await createCart(user);

        await res.status(200).send({
            success: true,
            message: "Register Successfully",
            jwt
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Register",
            error
        })
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email) {
            res.status(401).send({message: "Email is required"});
        }
        if(!password) {
            res.status(401).send({message: "Password is required"});
        }

        const user = await getUserByEmail(email);
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "user not found",
            })
        };

        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.status(402).send({
                success: false,
                message: "Invalid Password"
            })
        }

        const token = generateToken(user._id);
        return res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
        })
    }
};