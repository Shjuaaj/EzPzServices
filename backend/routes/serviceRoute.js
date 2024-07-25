import express from "express";
import { addAllService, listServices, removeService } from "../controllers/serviceController.js";
import multer from "multer";

const serviceRouter = express.Router();

// Image Storage Engine

const imageStorage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const imageUpload = multer({
    storage: imageStorage
})

serviceRouter.post("/add", imageUpload.single("image"), addAllService)
serviceRouter.get("/list", listServices)
serviceRouter.post("/remove", removeService)

export default serviceRouter;