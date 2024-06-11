import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MONTIR_TITLE_FIELD } from "../montir/MontirTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { STATUS_TITLE_FIELD } from "../status/StatusTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const CustomerOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <ReferenceField label="Montir" source="montir.id" reference="Montir">
          <TextField source={MONTIR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="problem" source="problem" />
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Status" source="status.id" reference="Status">
          <TextField source={STATUS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
