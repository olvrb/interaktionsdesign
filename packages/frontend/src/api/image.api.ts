import { ApiClient } from "./ApiClient";
import { IImage } from "./Entities/Image";
import { CreateImageRequest } from "./Request";
import { CreateImageResponse } from "./Response";

export class ImageApiClient extends ApiClient {
    constructor(baseUrl: string) {
        super(baseUrl);
    }
    public async getImage(id: string): Promise<IImage> {
        return this.fetch<IImage>(`/images/${id}`);
    }
    public async getImages(): Promise<IImage[]> {
        return this.fetch<IImage[]>("/images");
    }
    public async createImage(
        image: CreateImageRequest
    ): Promise<CreateImageResponse> {
        const fd = new FormData();
        Object.entries(image).forEach(([key, value]) => fd.append(key, value));

        return this.fetch<CreateImageResponse>("/image/create", {
            method: "POST",
            body: fd
        });
    }
}
