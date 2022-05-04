import { app } from "../Index";
import { CreateImageHandler } from "./api/Image";
import { CreateImagesHandler } from "./api/Images";
import { CreateItemHandler } from "./api/Items";

export function BindControllers() {
    // app.get("/api/items", CreateItemHandler);
    app.get("/api/images", CreateImagesHandler);
    app.get("/api/image/:id", CreateImageHandler);
}

const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3000,() => console.log('Server is running on port 3000'));
