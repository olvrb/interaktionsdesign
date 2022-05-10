import { ICategory } from "./Category";
import { IKeyword } from "./Keyword";

export interface IImage {
    name: string;
    description: string;
    usesLeft: number;
    category: ICategory;
    keywords: IKeyword[];
}
