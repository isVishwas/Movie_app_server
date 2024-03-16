import express from 'express';

import prisma from '../db/prisma';


export const getMovies = async (req: express.Request, res: express.Response) => {
  try {

    const movies = await prisma.movie.findMany();

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};



export const createMovie = async (req: express.Request, res: express.Response) => {
  try {
   
    const { name, release_date } = req.body;
        await prisma.movie.create({
            data: {
                name,
                release_date: new Date(release_date),
                rating: 8
            }
        });

    const movies = await prisma.movie.findMany();

    console.log(movies);

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}