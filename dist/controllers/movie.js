"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = exports.getMovies = void 0;
const tslib_1 = require("tslib");
const prisma_1 = tslib_1.__importDefault(require("../db/prisma"));
const getMovies = async (req, res) => {
    try {
        const movies = await prisma_1.default.movie.findMany();
        return res.status(200).json(movies);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getMovies = getMovies;
const createMovie = async (req, res) => {
    try {
        const { name, release_date } = req.body;
        await prisma_1.default.movie.create({
            data: {
                name,
                release_date: new Date(release_date),
                rating: 8
            }
        });
        return res.status(200).send("Movie Created");
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createMovie = createMovie;
//# sourceMappingURL=movie.js.map