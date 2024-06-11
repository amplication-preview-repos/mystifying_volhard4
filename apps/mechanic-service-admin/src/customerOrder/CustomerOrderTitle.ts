import { CustomerOrder as TCustomerOrder } from "../api/customerOrder/CustomerOrder";

export const CUSTOMERORDER_TITLE_FIELD = "location";

export const CustomerOrderTitle = (record: TCustomerOrder): string => {
  return record.location?.toString() || String(record.id);
};
