import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { CustomerOrderTitle } from "../customerOrder/CustomerOrderTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="customerOrders"
          reference="CustomerOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="transmission" source="transmission" />
      </SimpleForm>
    </Create>
  );
};
