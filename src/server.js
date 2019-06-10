import express from 'express';


const app = express();

/**ROUTES */
import IndexRoutes  from './routes/index.routes';
import TaskRoutes from './routes/task.route';
/**SETTINGS */
app.set('port', process.env.PORT || 3000);
/**MIDDLEWARES */
app.use(express.json());
/**ROUUTES */
app.use(IndexRoutes);
app.use('/tasks', TaskRoutes);

export default app;