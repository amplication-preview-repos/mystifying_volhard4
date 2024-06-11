import { MontirWhereUniqueInput } from "../montir/MontirWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type CustomerOrderUpdateInput = {
  location?: string | null;
  montir?: MontirWhereUniqueInput | null;
  problem?: string | null;
  service?: ServiceWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
