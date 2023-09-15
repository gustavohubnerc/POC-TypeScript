import Joi from "joi";
import { CreateGame } from "../protocols/games-protocol";

const gamesSchema = Joi.object<CreateGame>({
    name: Joi.string().required(),
    platform: Joi.string().required(),
    status: Joi.string().required()
})

export default gamesSchema;