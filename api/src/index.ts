import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { setupSwagger } from '../swagger';
import shortenRoutes from './routes/shorten';
import unshortenRoutes from './routes/unshorten';
import morgan from 'morgan';
import { Pool } from 'pg';

const app: Application = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routes
app.get("/ping", async (_req, res) => {
    res.send({
      message: "pong",
    });
  });
app.use('/api/shorten', shortenRoutes);
app.use('/api/unshorten', unshortenRoutes);

// Setup Swagger
setupSwagger(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
