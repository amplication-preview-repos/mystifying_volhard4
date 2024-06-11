import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CustomerOrderCreateNestedManyWithoutVehiclesInput } from "./CustomerOrderCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  customerOrders?: CustomerOrderCreateNestedManyWithoutVehiclesInput;
  name?: string | null;
  transmission?: string | null;
};
