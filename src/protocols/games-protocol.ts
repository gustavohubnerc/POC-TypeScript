export type Games = {
    id: number,
    name: string,
    platform: string,
    status: string
}

export type UpdateGameStatus = Omit<Games, "name" | "platform">

export type CreateGame = Omit<Games, "id">

export type DeleteGame = Omit<Games, "name" | "platform" | "status">