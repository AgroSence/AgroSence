import React from "react";
import { Admin, Resource, List, Datagrid, TextField, EmailField, DeleteButton } from "react-admin";
import customDataProvider from "./dataProvider";
import authProvider from "./authProvider";  

// Define a ContactList component
const ContactList: React.FC = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mobile" />
      <EmailField source="email" />
      <TextField source="address" />
      <TextField source="message" />
      <TextField source="dateSubmitted" />
      <DeleteButton />
    </Datagrid>
  </List>
);

const UserList: React.FC = () => (
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

const App: React.FC = () => (
  <Admin dataProvider={customDataProvider} authProvider={authProvider}>
    <Resource name="contacts" list={ContactList} />
    <Resource name="users" list={UserList} /> {/* Add User resource here */}
  </Admin>
);

export default App;
