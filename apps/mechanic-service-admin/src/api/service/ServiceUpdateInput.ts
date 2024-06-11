import { CustomerOrderUpdateManyWithoutServicesInput } from "./CustomerOrderUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  customerOrders?: CustomerOrderUpdateManyWithoutServicesInput;
  service?: string | null;
};
