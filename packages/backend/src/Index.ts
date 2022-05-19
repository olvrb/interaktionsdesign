import express from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import { Configuration } from "./Config";
import { connect } from "./Database/Index";
import { BindControllers } from "./Controllers/Index";
import { Image } from "./Database/Entities/Image";
import cors from "cors";
import { ImageService } from "./Services/ImageService";
const app = express();

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views"));
app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(join(__dirname, "../public")));
app.use(cors());

// Routes
BindControllers();

const port = Configuration.Web.Port;
<<<<<<< HEAD
// const imageService = new ImageService(Configuryarnation.Web.ImageDirectory);
=======
const imageService = new ImageService(Configuration.Web.ImageDirectory);
>>>>>>> 7b10835fc3399cec3eb74ac04113e888bdaa088a
connect()
    .then(async () => {
        await imageService.init();
        app.listen(port, () => {
            console.log(`Listening on port ${port}: http://localhost:${port}`);
        });
    })
    .catch(console.error);
export { app };
