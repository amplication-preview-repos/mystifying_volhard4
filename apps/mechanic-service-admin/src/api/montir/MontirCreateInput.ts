import { CustomerOrderCreateNestedManyWithoutMontirsInput } from "./CustomerOrderCreateNestedManyWithoutMontirsInput";

export type MontirCreateInput = {
  customerOrders?: CustomerOrderCreateNestedManyWithoutMontirsInput;
  montirName?: string | null;
  montirPassword?: string | null;
  montirPhone?: string | null;
  section?: string | null;
};
