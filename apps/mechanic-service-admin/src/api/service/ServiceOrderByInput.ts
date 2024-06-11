import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  service?: SortOrder;
  updatedAt?: SortOrder;
};
