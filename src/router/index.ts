import express from 'express';


import movies from './movie';
import reviews from './review';

const router = express.Router();

export default (): express.Router => {
  movies(router);
  reviews(router);
  
  return router;
};
