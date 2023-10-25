import express from 'express';
import newsController from '../controllers/newsController.js';

const newsRouter = express.Router();

newsRouter.get('/', newsController.getNews);
newsRouter.get('/:id', newsController.getSingleNew);
newsRouter.post('/', newsController.createNews);
newsRouter.put('/', newsController.updateNews);
newsRouter.delete('/:id', newsController.deleteNews);

export default newsRouter;
