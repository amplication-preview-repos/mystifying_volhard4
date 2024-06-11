import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MontirTitle } from "../montir/MontirTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { StatusTitle } from "../status/StatusTitle";
import { UserTitle } from "../user/UserTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const CustomerOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="location" source="location" />
        <ReferenceInput source="montir.id" reference="Montir" label="Montir">
          <SelectInput optionText={MontirTitle} />
        </ReferenceInput>
        <TextInput label="problem" multiline source="problem" />
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="status.id" reference="Status" label="Status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
