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
  SelectInput,
} from "react-admin";
import customDataProvider from "./dataProvider";
import authProvider from "./authProvider";


const states: { id: string; name: string }[] = [
  { id: "All States", name: "All States" },
  { id: "Andhra Pradesh", name: "Andhra Pradesh" },
  { id: "Arunachal Pradesh", name: "Arunachal Pradesh" },
  { id: "Assam", name: "Assam" },
  { id: "Bihar", name: "Bihar" },
  { id: "Chhattisgarh", name: "Chhattisgarh" },
  { id: "Goa", name: "Goa" },
  { id: "Gujarat", name: "Gujarat" },
  { id: "Haryana", name: "Haryana" },
  { id: "Himachal Pradesh", name: "Himachal Pradesh" },
  { id: "Jharkhand", name: "Jharkhand" },
  { id: "Karnataka", name: "Karnataka" },
  { id: "Kerala", name: "Kerala" },
  { id: "Madhya Pradesh", name: "Madhya Pradesh" },
  { id: "Maharashtra", name: "Maharashtra" },
  { id: "Manipur", name: "Manipur" },
  { id: "Meghalaya", name: "Meghalaya" },
  { id: "Mizoram", name: "Mizoram" },
  { id: "Nagaland", name: "Nagaland" },
  { id: "Odisha", name: "Odisha" },
  { id: "Punjab", name: "Punjab" },
  { id: "Rajasthan", name: "Rajasthan" },
  { id: "Sikkim", name: "Sikkim" },
  { id: "Tamil Nadu", name: "Tamil Nadu" },
  { id: "Telangana", name: "Telangana" },
  { id: "Tripura", name: "Tripura" },
  { id: "Uttar Pradesh", name: "Uttar Pradesh" },
  { id: "Uttarakhand", name: "Uttarakhand" },
  { id: "West Bengal", name: "West Bengal" },
];
// For User List
const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mobile" /> {/* Check if this is 'mobile' or 'phoneNumber' */}
      <TextField source="state" />
      <TextField source="address" />
    </Datagrid>
  </List>
);

// For Contact List
const ContactList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="mobile" /> {/* Ensure correct field name */}
      <TextField source="email" /> {/* Ensure email exists */}
      <TextField source="address" />
      <TextField source="message" />
      <TextField source="dateSubmitted" />
      <DeleteButton />
    </Datagrid>
  </List>
);


const SchemeList: React.FC = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="eligibility" />
      <TextField source="benefits" />
      <TextField source="applyLink" />
      <TextField source="state" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Define the SchemeCreate Component
const SchemeCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="description" required />
      <TextInput source="eligibility" required />
      <TextInput source="benefits" required />
      <TextInput source="applyLink" required />
      <SelectInput source="state" choices={states} defaultValue="All States" />
    </SimpleForm>
  </Create>
);

// Define the SchemeEdit Component
const SchemeEdit: React.FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="description" required />
      <TextInput source="eligibility" required />
      <TextInput source="benefits" required />
      <TextInput source="applyLink" required />
      <SelectInput source="state" choices={states} />
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
