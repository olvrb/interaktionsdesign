import { app } from "../Index";
import { CreateItemHandler } from "./api/v1/Items";

export function BindControllers() {
    app.get("/api/v1/items", CreateItemHandler);
}
