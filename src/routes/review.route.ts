import { Router } from "express";
import { reviewController } from "../controllers/review.controller";
import { verifyToken } from "../middlewares/jwt.middleware";

const router = Router();

router.get("/", reviewController.getReviews);

router.get("/:id", reviewController.getReview);

router.get("/movie/:movie_id", reviewController.getReviewsByMovieId);

router.post("/", verifyToken, reviewController.createReview);

router.delete("/:id", verifyToken, reviewController.deleteReview);

router.put("/:id", verifyToken, reviewController.updateReview);

export default router;