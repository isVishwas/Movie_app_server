/// <reference types="node" />
import express from 'express';
export declare const getReviews: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const createReview: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
