import { app } from "../Index";
import { CreateImageHandler } from "./api/image/create";
import { DeleteImageHandler } from "./api/image/delete";
import { ReadImageHandler } from "./api/image/read";
import { ReadImagesHandler } from "./api/image/images";
import { ReadImageInfoHandler } from "./api/image/info";
import { ReadCategoriesHandler } from "./api/category/read";
import { ErrorHandler } from "./middleware/error";

export function BindControllers() {
    /*  Images  */
    app.get("/api/images", ReadImagesHandler);
    app.post("/api/image/create", CreateImageHandler);
    app.delete("/api/image/delete/:id", DeleteImageHandler);
    app.get("/api/image/:id/info", ReadImageInfoHandler);
    app.get("/api/image/:id", ReadImageHandler);

    /*  Categories  */
    app.get("/api/categories", ReadCategoriesHandler);

    app.use(ErrorHandler);
}
