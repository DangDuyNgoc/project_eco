import { getAllUsers, getUserProfileByToken } from './../middlewares/authMiddleware.js';

export const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization;
        if(!jwt) {
            return res.status(404).send({message: "token not found"});
        }

        const user = await getUserProfileByToken(jwt);
        return res.status(200).send({
            success: true,
            message: "Get User Profile Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Server",
        })
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await getAllUsers();
        return res.status(200).send({
            success: true,
            message: "Get All User Successfully",
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Server",
        });
    }
};