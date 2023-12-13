import  express from "express";
import { deleteUser,essai ,updateUser ,getUserListings, getUser } from "../controllers/userContoller.js";
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();

router.get('/essai', essai);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)
export default router;