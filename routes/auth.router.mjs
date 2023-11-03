import express from "express";
import { register , login , refreshTokenValidate} from "../controller/auth.controller.mjs";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login)
router.route("/refresh").get(refreshTokenValidate)

export default router
