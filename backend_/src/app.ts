import express from 'express';
import cors from "cors"

import zipCodeRoutes from './routes/zipCodeRoutes';

const app = express();
app.use(cors())

app.use('/api/zipcode', zipCodeRoutes);

export default app;
