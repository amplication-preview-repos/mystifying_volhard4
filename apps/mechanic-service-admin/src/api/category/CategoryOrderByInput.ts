import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
