import { connection } from "../database/database"
import { Games, CreateGame, UpdateGameStatus, DeleteGame } from "../protocols/games-protocol"

async function getGames() {
    const games = await connection.query<Games>("SELECT * FROM games");
    return games.rows;
}

async function createGame(game: CreateGame) {
    return await connection.query<CreateGame>(
        `INSERT INTO games (name, platform, status) VALUES ($1, $2, $3)`, [game.name, game.platform, game.status]
    )
}

async function updateStatus(game: UpdateGameStatus) {
    return await connection.query<UpdateGameStatus>(
        `UPDATE games SET status = $1 WHERE id = $2`, [game.status, game.id]
    )
}

async function deleteGame(game: DeleteGame) {
    return await connection.query<DeleteGame>(
        `DELETE FROM games WHERE id = $1`, [game.id]
    )
}

const gamesRepository = {
    getGames,
    createGame,
    updateStatus,
    deleteGame
}

export default gamesRepository;