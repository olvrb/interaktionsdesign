import { ApiClient } from "../ApiClient";
import { ICategory } from "../Entities/Category";
import { IImage } from "../Entities/Image";
import { CreateImageRequest } from "../Request";
import { CreateImageResponse } from "../Response";

export class CategoryApiClient extends ApiClient {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    public async search(query: string): Promise<ICategory[]> {
        return this.fetch<ICategory[]>(`api/categories/search/${query}`);
    }

    public async getImage(id: string): Promise<IImage> {
        return this.fetch<IImage>(`/images/${id}`);
    }
    public async getImages(): Promise<IImage[]> {
        return this.fetch<IImage[]>("/images");
    }
}
