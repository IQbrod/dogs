import express from "express";
import { dogService } from "../../service/v1/dogs-service";

const router = express.Router();
router.get("/v1/dogs", (req,res) => {
    try {
        const dogs = dogService.getDogs();
        res.status(200).json(dogs);
    } catch(error) {
        res.status(500).json(error);
    }
});

export default router;