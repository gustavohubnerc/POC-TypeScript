import Joi from "joi";
import { UpdateGameStatus } from "../protocols/games-protocol";

const updateGameSchema = Joi.object<UpdateGameStatus>({
    status: Joi.string().required()
})

export default updateGameSchema;