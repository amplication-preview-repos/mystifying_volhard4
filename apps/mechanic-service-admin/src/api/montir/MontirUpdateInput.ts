import { CustomerOrderUpdateManyWithoutMontirsInput } from "./CustomerOrderUpdateManyWithoutMontirsInput";

export type MontirUpdateInput = {
  customerOrders?: CustomerOrderUpdateManyWithoutMontirsInput;
  montirName?: string | null;
  montirPassword?: string | null;
  montirPhone?: string | null;
  section?: string | null;
};
