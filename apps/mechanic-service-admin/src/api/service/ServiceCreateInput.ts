import { CustomerOrderCreateNestedManyWithoutServicesInput } from "./CustomerOrderCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  customerOrders?: CustomerOrderCreateNestedManyWithoutServicesInput;
  service?: string | null;
};
