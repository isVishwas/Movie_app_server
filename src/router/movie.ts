import express from 'express';

import { createMovie, getMovies } from '../controllers/movie';

export default (router: express.Router) => {
  router.get('/api/movie', getMovies);
  router.post('/api/movie', createMovie);
};
