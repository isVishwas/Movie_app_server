"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReview = exports.getReviews = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../db/prisma"));
const getReviews = async (req, res) => {
    try {
        const reviews = await prisma_1.default.review.findMany();
        return res.status(200).json(reviews);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getReviews = getReviews;
const createReview = async (req, res) => {
    try {
        const { reviewer_name, rating, comment, movie_id } = req.body;
        const result = await prisma_1.default.review.create({
            data: {
                reviewer: reviewer_name,
                rating,
                comment,
                movie_id,
            }
        });
        res.status(201).json(result);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createReview = createReview;
//# sourceMappingURL=review.js.map