import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MontirList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Montirs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="montir_name" source="montirName" />
        <TextField label="montir_password" source="montirPassword" />
        <TextField label="montir_phone" source="montirPhone" />
        <TextField label="section" source="section" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
