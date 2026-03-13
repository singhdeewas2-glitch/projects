import express from 'express';
import { register, login } from './controllers/userController.mjs';
import { verifyToken } from './auth/authentication.mjs';
import { createReview, updateReview, deleteReview } from './controllers/reviewController.mjs'
import { uploadImage } from './controllers/frontendController.mjs';
import * as booksController from './controllers/bookControllers.mjs';
const router = express.Router();
router.post('/login', login);
router.post('/register', register);

router.get('/books', verifyToken, booksController.getAll);
router.get('/books/:id', verifyToken, booksController.getById);
router.post('/books', verifyToken, booksController.add);
router.put('/books/:id', verifyToken, booksController.update);
router.delete('/books/:id', verifyToken, booksController.remove);

router.post('/books/:bookId/review', verifyToken, createReview);
router.put('/books/:bookId/review/:reviewId', verifyToken, updateReview);
router.delete('/books/:bookId/review/:reviewId',verifyToken, deleteReview);

router.post("/frontend",verifyToken ,uploadImage)

export default router;
