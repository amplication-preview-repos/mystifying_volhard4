import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  transmission?: SortOrder;
  updatedAt?: SortOrder;
};
