import { CustomerOrderListRelationFilter } from "../customerOrder/CustomerOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StatusWhereInput = {
  customerOrders?: CustomerOrderListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
};
