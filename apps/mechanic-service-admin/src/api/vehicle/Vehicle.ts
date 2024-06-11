import { Category } from "../category/Category";
import { CustomerOrder } from "../customerOrder/CustomerOrder";

export type Vehicle = {
  category?: Category | null;
  createdAt: Date;
  customerOrders?: Array<CustomerOrder>;
  id: string;
  name: string | null;
  transmission: string | null;
  updatedAt: Date;
};
