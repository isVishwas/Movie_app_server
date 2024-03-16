"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const movie_1 = tslib_1.__importDefault(require("./movie"));
const review_1 = tslib_1.__importDefault(require("./review"));
const router = express_1.default.Router();
exports.default = () => {
    (0, movie_1.default)(router);
    (0, review_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map