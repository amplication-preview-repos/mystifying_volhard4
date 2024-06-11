import { CustomerOrderUpdateManyWithoutStatusesInput } from "./CustomerOrderUpdateManyWithoutStatusesInput";

export type StatusUpdateInput = {
  customerOrders?: CustomerOrderUpdateManyWithoutStatusesInput;
  status?: "Option1" | null;
};
