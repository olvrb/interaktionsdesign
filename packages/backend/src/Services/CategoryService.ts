import { getTreeRepository } from "typeorm";
import { inspect } from "util";
import { Category } from "../Database/Entities/Category";

export class CategoryService {
    public static async init() {
        const currentCats = await CategoryService.GetCategories();
        // (await Category.findOneOrFail({ where: { name: "root" } })).remove();
        if (currentCats.length === 0) {
            // const root = new Category("root");
            // await root.save();

            const sport = new Category("sport");
            const food = new Category("food");
            const kultur = new Category("kultur");
            await sport.save();
            await food.save();
            await kultur.save();
            await Category.save([
                new Category("museum", kultur),
                new Category("teater", kultur),
                new Category("musik", kultur),
                new Category("pizza", food),
                new Category("burger", food),
                new Category("football", sport),
                new Category("basketball", sport),
                new Category("tennis", sport)
            ]);
        }
    }

    public static async CreateCategory(cat: Category) {
        return await Category.save(cat);
    }
    public static async UpdateCategory(cat: Category) {
        return await Category.save(cat);
    }
    public static async DeleteCategory(id: string) {
        await Category.remove(await Category.findOneOrFail(id));
    }
    public static async GetCategories(): Promise<Category[]> {
        return await Category.find();
    }
    public static async GetCategory(id: string): Promise<Category | null> {
        return (await Category.findOne(id)) ?? null;
    }
}
