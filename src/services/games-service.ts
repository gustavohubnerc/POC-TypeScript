import gamesRepository from "../repository/games-repository";
import { Games, CreateGame, UpdateGameStatus, DeleteGame } from "../protocols/games-protocol";

async function getGames(): Promise<Games[]> {
    const games = await gamesRepository.getGames();
    return games;
}

async function createGame(game: CreateGame): Promise<void> {
    await gamesRepository.createGame(game);
}

async function updateStatus(game: UpdateGameStatus): Promise<void> {
    await gamesRepository.updateStatus(game);
}

async function deleteGame(game: DeleteGame): Promise<void> {
    await gamesRepository.deleteGame(game);
}

const gamesService = {
    getGames,
    createGame,
    updateStatus,
    deleteGame
};

export default gamesService;
