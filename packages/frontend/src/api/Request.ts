export interface CreateImageRequest {
    imageName: string;
    description: string;
    categoryId: string;
    uses: number;
    file: File;
    keywords: string;
}
