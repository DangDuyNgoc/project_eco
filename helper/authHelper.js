import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error)  {
        console.log(error);
    }
};

export const generateToken = (userId) => {
    const token = JWT.sign({userId}, process.env.JWT_SECRET, {expiresIn: "7d"});
    return token;
};

export const getUserIdFromToken = (token) => {
    const decodeToken = JWT.verify(token, process.env.JWT_SECRET);
    return decodeToken.userId;
};

export const comparePassword = async (password, hashedPassword) => {
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
};