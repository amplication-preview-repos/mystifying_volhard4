import { CustomerOrderCreateNestedManyWithoutUsersInput } from "./CustomerOrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  customerOrders?: CustomerOrderCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  userName?: string | null;
  userPhone?: string | null;
};
