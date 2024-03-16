import express from 'express';

import { createReview,getReviews } from '../controllers/review';

export default (router: express.Router) => {
  router.get('/api/review', getReviews);
  router.post('/api/review', createReview);
};
