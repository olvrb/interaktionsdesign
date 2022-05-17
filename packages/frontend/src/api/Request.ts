export interface CreateImageRequest {
    imageName: string;
    description: string;
    categoryId: string;
    uses: number;
    file: File | undefined;
    keywords: string;
    photographer: string;
}
