import { CustomerOrder } from "../customerOrder/CustomerOrder";

export type Montir = {
  createdAt: Date;
  customerOrders?: Array<CustomerOrder>;
  id: string;
  montirName: string | null;
  montirPassword: string | null;
  montirPhone: string | null;
  section: string | null;
  updatedAt: Date;
};
