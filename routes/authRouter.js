import express from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});

router.post("/login", apiLimiter, validateLoginInput, login);
router.post("/register", apiLimiter, validateRegisterInput, register);
router.get("/logout", logout);

export default router;
