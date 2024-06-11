import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerOrderTitle } from "../customerOrder/CustomerOrderTitle";

export const MontirEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
