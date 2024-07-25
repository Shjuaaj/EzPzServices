import { response } from "express";
import serviceModel from "../models/serviceModel.js";
import fs from "fs";

const addAllService = async (req, res) => {

    let image_filename = req.file ? req.file.filename : req.body.image;

    const service = new serviceModel({
        name: req.body.name,
        cost: req.body.cost,
        image: image_filename
    });

    try {
        await service.save();
        res.json({ success: true, message: "Service added successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while adding service" });
    }
};

const listServices = async (req, res) => {
    try {
        const services = await serviceModel.find({});
        res.json({ success: true, data: services });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while fetching services" });
    }
}

const removeService = async (req, res) => {

    try {
        const service = await serviceModel.findById(req.body.id);
        fs.unlink(`uploads/${service.image}`, () => { })

        await serviceModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Service deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while deleting service" });
    }
}

export { addAllService, listServices, removeService };