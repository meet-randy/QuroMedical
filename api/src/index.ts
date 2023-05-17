import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { setupSwagger } from '../swagger';
import healthChecks from './routes/healthcheck';
import shortenRoutes from './routes/shorten';
import unshortenRoutes from './routes/unshorten';
import morgan from 'morgan';

const app: Application = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routes
app.get("/", async (_req, res) => {
    res.send({
      message: "Hello!!!",
    });
  });
app.use('/api/shorten', shortenRoutes);
app.use('/api/unshorten', unshortenRoutes);
app.use('/api/health', healthChecks)
// Setup Swagger
setupSwagger(app);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
