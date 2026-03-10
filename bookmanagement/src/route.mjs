import express from 'express';
import { register, login } from './controllers/userController.mjs';
import { verifyToken } from './auth/authentication.mjs';
import { createReview, updateReview, deleteReview } from './controllers/reviewController.mjs'
import { uploadImage } from './controllers/frontendController.mjs';

const router = express.Router();

// User routes
router.post('/login', login);
router.post('/register', register);

// Book routes


// Review routes
router.post('/books/:bookId/review', verifyToken, createReview);
router.put('/books/:bookId/review/:reviewId', verifyToken, updateReview);
router.delete('/books/:bookId/review/:reviewId',verifyToken, deleteReview);

// Image upload route
router.post("/frontend",verifyToken ,uploadImage)

export default router;