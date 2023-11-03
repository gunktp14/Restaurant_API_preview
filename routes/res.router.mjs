import express from "express";
const router = express.Router();
import verifyAdmin from "../middleware/verify-admin.mjs";

import {
  getAll,
  addRes,
  getOne,
  updateRes,
  deleteRes,
} from "../controller/res.controller.mjs";

router.route("/").get(getAll).post(verifyAdmin, addRes);
router.route("/:id").get(getOne).put(verifyAdmin, updateRes);
router.route("/:id").delete(verifyAdmin, deleteRes);

export default router;
