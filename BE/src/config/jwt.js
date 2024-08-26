//yarn add jsonwebtoken
//  1. ma hoa du lieu
//  2. kiem tra token hop le
//  3. giai token

import jwt from "jsonwebtoken";

//TOKEN
export const createToken = (data) => {
    let token = jwt.sign({ data }, "CREATE", {
        algorithm: "HS256",
        expiresIn: "10m",
    });

    return token;
};

export const checkToken = (token) =>
    jwt.verify(token, "BIMAT", (err, decode) => err);

export const verifyToken = (req, res, next) => {
    let { token } = req.headers;
    let check = checkToken(token);

    if (check == null) {
        //token hop le
        next();
    } else {
        //toke khong hop le
        res.status(401).send(check.name);
    }
};

//REF TOKEN
export const createRefToken = (data) => {
    let token = jwt.sign({ data }, "KO_BIMAT", {
        algorithm: "HS256",
        expiresIn: "5d",
    });

    return token;
};

export const checkRefToken = (token) =>
    jwt.verify(token, "KO_BIMAT", (err, decode) => err);

export const decodeToken = (token) => {
    return jwt.decode(token);
};