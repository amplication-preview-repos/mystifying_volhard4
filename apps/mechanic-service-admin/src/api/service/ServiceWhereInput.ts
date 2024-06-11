import { CustomerOrderListRelationFilter } from "../customerOrder/CustomerOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ServiceWhereInput = {
  customerOrders?: CustomerOrderListRelationFilter;
  id?: StringFilter;
  service?: StringNullableFilter;
};
