import { ApiClient } from "../ApiClient";
import { IImage } from "../Entities/Image";
import { CreateImageRequest } from "../Request";
import { CreateImageResponse } from "../Response";
import { URLSearchParams } from "url";

export class ImageApiClient extends ApiClient {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    public async search(
        titleQuery: string,
        keywordQuery: string,
        categoryId?: string
    ): Promise<IImage[]> {
        return this.fetch<IImage[]>(
            `api/images/search${new URLSearchParams({
                titleQuery,
                keywordQuery,
                categoryId: categoryId ?? ""
            })}`
        );

        /*  return this.fetch<IImage[]>(
            `api/images/search?titleQuery=${titleQuery}&keywordQuery=${keywordQuery}`
        ); */
    }
    public async getImage(id: string): Promise<IImage> {
        return this.fetch<IImage>(`images/${id}`);
    }
    public async getImages(): Promise<IImage[]> {
        return this.fetch<IImage[]>("images");
    }
    public async createImage(
        image: CreateImageRequest
    ): Promise<CreateImageResponse> {
        const fd = new FormData();
        Object.entries(image).forEach(([key, value]) => fd.append(key, value));
        return this.fetch<CreateImageResponse>("api/image/create", {
            method: "POST",
            body: fd
        });
    }
}
