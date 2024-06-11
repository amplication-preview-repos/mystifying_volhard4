import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type CategoryWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  vehicles?: VehicleListRelationFilter;
};
