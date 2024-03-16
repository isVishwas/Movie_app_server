"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = require("../controllers/review");
exports.default = (router) => {
    router.get('/api/review', review_1.getReviews);
    router.post('/api/review', review_1.createReview);
};
//# sourceMappingURL=review.js.map