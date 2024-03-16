import express from 'express';

import prisma from '../db/prisma';


export const getReviews = async (req: express.Request, res: express.Response) => {
  try {

    const reviews = await prisma.review.findMany();
    return res.status(200).json(reviews);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};



export const createReview = async (req: express.Request, res: express.Response) => {
  try {

    const { reviewer_name, rating, comment, movie_id } = req.body;
    const result = await prisma.review.create({
      data: {
        reviewer: reviewer_name,
        rating,
        comment,
        movie_id,
      }
    });

    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}