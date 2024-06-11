import { CustomerOrderUpdateManyWithoutUsersInput } from "./CustomerOrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  customerOrders?: CustomerOrderUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  userName?: string | null;
  userPhone?: string | null;
};
