/// <reference types="node" />
import express from 'express';
export declare const getMovies: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const createMovie: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
