import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "category";

export const CategoryTitle = (record: TCategory): string => {
  return record.category?.toString() || String(record.id);
};
