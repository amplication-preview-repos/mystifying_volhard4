import { CustomerOrderListRelationFilter } from "../customerOrder/CustomerOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MontirWhereInput = {
  customerOrders?: CustomerOrderListRelationFilter;
  id?: StringFilter;
  montirName?: StringNullableFilter;
  montirPassword?: StringNullableFilter;
  montirPhone?: StringNullableFilter;
  section?: StringNullableFilter;
};
