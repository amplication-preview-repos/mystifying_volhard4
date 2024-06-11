import { CustomerOrder } from "../customerOrder/CustomerOrder";

export type Status = {
  createdAt: Date;
  customerOrders?: Array<CustomerOrder>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
