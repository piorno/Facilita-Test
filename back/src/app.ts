import express, { Response, Request } from "express";
import ClientesRoutes from './routes/clientes.routes'
// const ProductRoutes = require("./routes/product.route");

const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ alive: "True" });
});

/* Telling the server to use the routes in the ProductRoutes file. */
app.use("/api/clientes", ClientesRoutes);

export default app;