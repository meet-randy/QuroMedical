"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_1 = require("../swagger");
const shorten_1 = __importDefault(require("./routes/shorten"));
const unshorten_1 = __importDefault(require("./routes/unshorten"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("tiny"));
// Routes
app.get("/ping", async (_req, res) => {
    res.send({
        message: "pong",
    });
});
app.use('/api/shorten', shorten_1.default);
app.use('/api/unshorten', unshorten_1.default);
// Setup Swagger
(0, swagger_1.setupSwagger)(app);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map