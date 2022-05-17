import { ICategory } from "./Category";
import { IKeyword } from "./Keyword";

export interface IImage {
    id: string;
    name: string;
    description: string;
    usesLeft: number;
    category: ICategory;
    keywords: IKeyword[];
    photographer: string;
}
