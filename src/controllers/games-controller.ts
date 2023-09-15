import gamesService from "../services/games-service";
import { CreateGame, UpdateGameStatus } from "../protocols/games-protocol";
import { Request, Response } from "express";

async function getGamesController(req: Request, res: Response) {
    try {
        const games = await gamesService.getGames();
        console.log(games);
        return res.send(games);
    } catch(err) {
        console.log(err.message);
    }
}

function createGame(req: Request, res: Response) {
    const game = req.body as CreateGame;
    gamesService.createGame(game);
    res.sendStatus(201);
}

function updateStatus(req: Request, res: Response) {
    const gameId = parseInt(req.params.id);
    const statusData: UpdateGameStatus = req.body;
    gamesService.updateStatus({ id: gameId, ...statusData });
    res.sendStatus(200);
}

function deleteGame(req: Request, res: Response) {
    const gameId = parseInt(req.params.id);
    gamesService.deleteGame({ id: gameId });
    res.sendStatus(200);
}

const gamesController = {
    getGamesController,
    createGame,
    updateStatus,
    deleteGame
}

export default gamesController;