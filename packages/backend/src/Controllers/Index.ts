import { app } from "../Index";
import { CreateImageHandler } from "./api/image/create";
import { DeleteImageHandler } from "./api/image/delete";
import { ReadImagesHandler } from "./api/image/images";

export function BindControllers() {
    // app.get("/api/items", CreateItemHandler);
    app.get("/images", ReadImagesHandler);
    app.post("/image/create", CreateImageHandler);
    app.delete("/image/delete/:id", DeleteImageHandler);
}
