import { CustomerOrderCreateNestedManyWithoutStatusesInput } from "./CustomerOrderCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  customerOrders?: CustomerOrderCreateNestedManyWithoutStatusesInput;
  status?: "Option1" | null;
};
