import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MontirWhereUniqueInput } from "../montir/MontirWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type CustomerOrderWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  montir?: MontirWhereUniqueInput;
  problem?: StringNullableFilter;
  service?: ServiceWhereUniqueInput;
  status?: StatusWhereUniqueInput;
  user?: UserWhereUniqueInput;
  vehicle?: VehicleWhereUniqueInput;
};
