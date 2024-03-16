"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const http_1 = tslib_1.__importDefault(require("http"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const router_1 = tslib_1.__importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
app.use('/', (0, router_1.default)());
app.get('/home', (req, res) => {
    res.send("welcome home");
});
//# sourceMappingURL=index.js.map