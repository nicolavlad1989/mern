import express from 'express';
import { test, updateUser,deleteUser, getAllUsers } from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/getAllUsers", verifyToken, getAllUsers);

export default router;