import { CustomerOrderWhereInput } from "./CustomerOrderWhereInput";
import { CustomerOrderOrderByInput } from "./CustomerOrderOrderByInput";

export type CustomerOrderFindManyArgs = {
  where?: CustomerOrderWhereInput;
  orderBy?: Array<CustomerOrderOrderByInput>;
  skip?: number;
  take?: number;
};
