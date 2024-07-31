import express, { Application } from 'express';
import 'dotenv/config';
import cors from 'cors';
import postRoutes from './post/routes/postRoutes';
import dfRoutes from './df/routes/dfRoutes';
import openaiRoutes from './openai/routes/openaiRoutes';
import { options } from './config/swaggerOptions';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app: Application = express();
const port: number = parseInt(process.env.PORT || '3000', 10);
const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
app.use(express.json());
app.use('/', postRoutes);
app.use('/', dfRoutes);
app.use('/', openaiRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});