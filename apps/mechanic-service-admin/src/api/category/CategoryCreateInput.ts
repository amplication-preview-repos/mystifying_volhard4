import { VehicleCreateNestedManyWithoutCategoriesInput } from "./VehicleCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  category?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutCategoriesInput;
};
