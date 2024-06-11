import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
