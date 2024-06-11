import { VehicleUpdateManyWithoutCategoriesInput } from "./VehicleUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  category?: string | null;
  vehicles?: VehicleUpdateManyWithoutCategoriesInput;
};
