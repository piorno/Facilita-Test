"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_routes_1 = __importDefault(require("./routes/clientes.routes"));
// const ProductRoutes = require("./routes/product.route");
var cors = require('cors');
const app = (0, express_1.default)();
var corsOptions = {
    origin: "*"
};
app.use(cors(corsOptions));
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express_1.default.json());
/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
});
/* Telling the server to use the routes in the ProductRoutes file. */
app.use("/api/clientes", clientes_routes_1.default);
exports.default = app;
