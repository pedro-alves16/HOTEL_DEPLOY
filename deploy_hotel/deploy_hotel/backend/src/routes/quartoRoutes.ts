import { Router } from "express";
import {
  listarQuartos,
  cadastrarQuartos,
} from "../controllers/quartoController";

const router = Router();

router.get("/", listarQuartos);
router.post("/", cadastrarQuartos);

export { router as quartoRoutes };
