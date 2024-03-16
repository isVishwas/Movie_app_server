"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../controllers/movie");
exports.default = (router) => {
    router.get('/api/movie', movie_1.getMovies);
    router.post('/api/movie', movie_1.createMovie);
};
//# sourceMappingURL=movie.js.map