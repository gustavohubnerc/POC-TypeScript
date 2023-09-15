import express, { json, Request, Response } from 'express';
import gamesRouter from './routers/games-router';

const app = express();

app.use(json());
app.use('/api', gamesRouter);
app.get('/health', (req: Request, res: Response) => {
    res.status(200).send('OK');
});

app.listen(5000 , () => {
    console.log('Server is running on port 5000');
})