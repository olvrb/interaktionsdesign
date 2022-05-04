import { app } from "../Index";
import { CreateImageHandler } from "./api/image/create";
import { DeleteImageHandler } from "./api/image/delete";
import { ReadImageHandler } from "./api/image/image";
import { ReadImagesHandler } from "./api/image/images";
import { ReadImageHandler as ReadImageInfoHandler } from "./api/image/info";

export function BindControllers() {
    /*  Images  */
    app.get("/images", ReadImagesHandler);
    app.post("/image/create", CreateImageHandler);
    app.delete("/image/delete/:id", DeleteImageHandler);
    app.get("/image/:id/info", ReadImageInfoHandler);
    app.get("/image/:id", ReadImageHandler);
}
