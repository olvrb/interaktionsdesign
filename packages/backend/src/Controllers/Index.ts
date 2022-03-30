import { app } from "../Index";
import { CreateImageHandler } from "./api/Image";
import { CreateImagesHandler } from "./api/Images";
import { CreateItemHandler } from "./api/Items";

export function BindControllers() {
    // app.get("/api/items", CreateItemHandler);
    app.get("/api/images", CreateImagesHandler);
    app.get("/api/image/:id", CreateImageHandler);
}
