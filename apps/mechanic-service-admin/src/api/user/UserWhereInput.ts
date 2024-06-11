import { CustomerOrderListRelationFilter } from "../customerOrder/CustomerOrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  customerOrders?: CustomerOrderListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userName?: StringNullableFilter;
  userPhone?: StringNullableFilter;
};
