//API upload avatar
//=> use yarn add multer
import multer from "multer";

let storage = multer.diskStorage({
    destination: process.cwd() + "/public/img", // noi dinh nghia duong dan luu hinh
    filename: (res, file, callback) => {
        let newName = new Date().getTime() + "_" + file.originalname;

        //doi ten hinh
        callback(null, newName);
    }, // doi ten hinh
});
let upload = multer({ storage });