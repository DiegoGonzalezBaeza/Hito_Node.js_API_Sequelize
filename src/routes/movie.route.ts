import { Router } from "express";
import { movieController } from "../controllers/movie.controller";  

const router = Router();

router.get("/", movieController.getMovies);

router.get("/:id", movieController.getMovie);

router.post("/", movieController.createMovie);

router.delete("/:id", movieController.deleteMovie);

router.put("/:id", movieController.updateMovie);

export default router;