import { Router } from "express";
import gamesController from "../controllers/games-controller";
import { validateSchemaMiddleware } from "../middlewares/schema-validation";
import gamesSchema from "../schemas/games-schema";
import updateGameSchema from "../schemas/update-game-schema";

const gamesRouter = Router();

gamesRouter.get("/games", gamesController.getGamesController);
gamesRouter.post("/games", validateSchemaMiddleware(gamesSchema), gamesController.createGame);
gamesRouter.put("/games/:id", validateSchemaMiddleware(updateGameSchema), gamesController.updateStatus);
gamesRouter.delete("/games/:id", gamesController.deleteGame);

export default gamesRouter;
