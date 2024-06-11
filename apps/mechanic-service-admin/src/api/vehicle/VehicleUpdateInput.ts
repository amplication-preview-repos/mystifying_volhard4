import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CustomerOrderUpdateManyWithoutVehiclesInput } from "./CustomerOrderUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  customerOrders?: CustomerOrderUpdateManyWithoutVehiclesInput;
  name?: string | null;
  transmission?: string | null;
};
