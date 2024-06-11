import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CustomerOrderListRelationFilter } from "../customerOrder/CustomerOrderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VehicleWhereInput = {
  category?: CategoryWhereUniqueInput;
  customerOrders?: CustomerOrderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  transmission?: StringNullableFilter;
};
