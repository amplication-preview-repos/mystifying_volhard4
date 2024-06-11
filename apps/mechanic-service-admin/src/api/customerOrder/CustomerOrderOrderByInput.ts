import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  montirId?: SortOrder;
  problem?: SortOrder;
  serviceId?: SortOrder;
  statusId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vehicleId?: SortOrder;
};
