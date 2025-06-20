import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import joyasRouter from './routes/joyasRoutes.js';

const app = express();
const PORT = process.env.DB_PORT

app.use(express.json());
//Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/api', joyasRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}✅`);   
});