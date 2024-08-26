import jwt from "jsonwebtoken";
import { responseData } from "./response.js";


// TOKEN ---------------------------------------------------
export const createToken = (data) => {
    let token = jwt.sign({ data }, "UTECHCOMPANY", {
        algorithm: "HS256",
        expiresIn: "7d",
    });

    return token;
};
export const checkToken = (token) =>
    jwt.verify(token, "UTECHCOMPANY", (err, decode) => err);


// REF TOKEN ---------------------------------------------------
export const createRefToken = (data) => {
    let token = jwt.sign({ data }, "KO_BIMAT", {
        algorithm: "HS256",
        expiresIn: "5d",
    });

    return token;
};
export const checkRefToken = (token) =>
    jwt.verify(token, "KO_BIMAT", (err, decode) => err);


// Decode Token ---------------------------------------------------
export const decodeToken = (token) => {
    return jwt.decode(token);
};


// Verify Token ---------------------------------------------------
export const verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) {
        return responseData(res, "Fail", "No token provided", 401);
    }

    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimLeft();
    }

    const isInvalidToken = checkToken(token);

    if (!isInvalidToken) {
        next();
    } else {
        responseData(res, "Fail", "Failed to authenticate token", 400); // Token is invalid
    }
};
