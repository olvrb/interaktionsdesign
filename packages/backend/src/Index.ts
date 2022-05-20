import express from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import { Configuration } from "./Config";
import { connect } from "./Database/Index";
import { BindControllers } from "./Controllers/Index";
import { Image } from "./Database/Entities/Image";
import cors from "cors";
import { ImageService } from "./Services/ImageService";
import fileUpload from "express-fileupload";
import { CategoryService } from "./Services/CategoryService";
const app = express();

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views"));
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(join(__dirname, "../public")));
app.use(cors());
app.use(fileUpload());

// Routes
BindControllers();

const port = Configuration.Web.Port;
// const imageService = new ImageService(Configuration.Web.ImageDirectory);
connect()
    .then(async () => {
        await CategoryService.init();
        app.listen(port, () => {
            console.log(`Listening on port ${port}: http://localhost:${port}`);
        });
    })
    .catch(console.error);
export { app };
