import { CustomerOrder } from "../customerOrder/CustomerOrder";

export type Service = {
  createdAt: Date;
  customerOrders?: Array<CustomerOrder>;
  id: string;
  service: string | null;
  updatedAt: Date;
};
