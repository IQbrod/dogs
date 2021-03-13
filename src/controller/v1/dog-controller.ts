import express from "express";
import { Dog } from "../../domain/dog";
import { dogService } from "../../service/v1/dog-service";
import { ensureToken } from "../../utils/authentication/auth-helper";

const router = express.Router();
router.get("/v1/dogs", (req,res,next) => ensureToken(req,res,next), (req, res) => {
    dogService.getDogs((dogs: Dog[], error: Error) => {
        if (error) {
            res.status(500).json(error?.message);
        } else {
            res.status(200).json({dogs});
        }
    });
});

export default router;