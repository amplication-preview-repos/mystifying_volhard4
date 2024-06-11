import { CustomerOrder } from "../customerOrder/CustomerOrder";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customerOrders?: Array<CustomerOrder>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userName: string | null;
  userPhone: string | null;
};
