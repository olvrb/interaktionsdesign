export interface CreateImageRequest {
    imageName: string;
    description: string;
    categoryId: string;
    uses: number;
    file: File | undefined;
    keywords: string;
    photographer: string;
}

export interface ImageSearchRequest {
    titleQuery: string;
    keywordQuery: string;
    categoryId: string;
}
