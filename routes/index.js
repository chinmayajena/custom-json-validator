import express from "express";
import userController from "../controller/user-controller.js";
import validateDto from "../middleware/validate-dto.js";
import userSchema from "../schema/user.js";

const router = express.Router();
router.post("/register", validateDto(userSchema), userController.register);

export default router;
