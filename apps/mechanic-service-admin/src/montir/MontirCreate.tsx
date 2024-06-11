import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerOrderTitle } from "../customerOrder/CustomerOrderTitle";

export const MontirCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customerOrders"
          reference="CustomerOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="montir_name" source="montirName" />
        <TextInput label="montir_password" source="montirPassword" />
        <TextInput label="montir_phone" source="montirPhone" />
        <TextInput label="section" source="section" />
      </SimpleForm>
    </Create>
  );
};
