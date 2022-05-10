export interface ICategory {
    name: string;
    id: string;
    children: ICategory[];
    parent: ICategory;
}
