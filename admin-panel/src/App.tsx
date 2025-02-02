import React from "react";
import {
  Admin,
  Resource,
  List,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
import customDataProvider from "./dataProvider";
import authProvider from "./authProvider";

const ContactList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mobile" />
      <TextField source="email" />
      <TextField source="address" />
      <TextField source="message" />
      <TextField source="dateSubmitted" />
      <DeleteButton />
    </Datagrid>
  </List>
);

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mobile" />
      <TextField source="state" />
      <TextField source="address" />
    </Datagrid>
  </List>
);

const SchemeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="eligibility" />
      <TextField source="benefits" />
      <TextField source="applyLink" /> {/* Ensure applyLink is displayed */}
      <TextField source="state" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const SchemeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="eligibility" />
      <TextInput source="benefits" />
      <TextInput source="applyLink" /> {/* Added applyLink input */}
      <TextInput source="state" />
    </SimpleForm>
  </Create>
);

const SchemeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="eligibility" />
      <TextInput source="benefits" />
      <TextInput source="applyLink" /> {/* Added applyLink input */}
      <TextInput source="state" />
    </SimpleForm>
  </Edit>
);

const App = () => (
  <Admin dataProvider={customDataProvider} authProvider={authProvider}>
    <Resource name="contacts" list={ContactList} />
    <Resource name="users" list={UserList} />
    <Resource name="schemes" list={SchemeList} create={SchemeCreate} edit={SchemeEdit} />
  </Admin>
);

export default App;
