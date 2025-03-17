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
  ImageField,
  FileInput,
  FileField
} from "react-admin";
import customDataProvider from "./dataProvider";
import authProvider from "./authProvider";
import Dashboard from "./components/Dashboard";

const states: { id: string; name: string }[] = [
  { id: "all-states", name: "All States" },
  { id: "andhra-pradesh", name: "Andhra Pradesh" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh" },
  { id: "assam", name: "Assam" },
  { id: "bihar", name: "Bihar" },
  { id: "chhattisgarh", name: "Chhattisgarh" },
  { id: "goa", name: "Goa" },
  { id: "gujarat", name: "Gujarat" },
  { id: "haryana", name: "Haryana" },
  { id: "himachal-pradesh", name: "Himachal Pradesh" },
  { id: "jharkhand", name: "Jharkhand" },
  { id: "karnataka", name: "Karnataka" },
  { id: "kerala", name: "Kerala" },
  { id: "madhya-pradesh", name: "Madhya Pradesh" },
  { id: "maharashtra", name: "Maharashtra" },
  { id: "manipur", name: "Manipur" },
  { id: "meghalaya", name: "Meghalaya" },
  { id: "mizoram", name: "Mizoram" },
  { id: "nagaland", name: "Nagaland" },
  { id: "odisha", name: "Odisha" },
  { id: "punjab", name: "Punjab" },
  { id: "rajasthan", name: "Rajasthan" },
  { id: "sikkim", name: "Sikkim" },
  { id: "tamil-nadu", name: "Tamil Nadu" },
  { id: "telangana", name: "Telangana" },
  { id: "tripura", name: "Tripura" },
  { id: "uttar-pradesh", name: "Uttar Pradesh" },
  { id: "uttarakhand", name: "Uttarakhand" },
  { id: "west-bengal", name: "West Bengal" },
];
// For User List
const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="mobile" /> {/* Check if this is 'mobile' or 'phoneNumber' */}
      <TextField source="state" />
      <TextField source="language" />
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

const ResourceList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Resource Name" />
      <TextField source="description" label="Description" />
      <TextField source="link" label="Link" />
      <ImageField source="image" label="Image" title="Resource Image" />
      <TextField source="purpose" label="Purpose" />
      <TextField source="advantages" label="Advantages" />
      <TextField source="attachment" label="Attachment" />
      <TextField source="popularBrand" label="Popular Brand" />
      <TextField source="fuelType" label="Fuel Type" />
      <TextField source="safety" label="Safety" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Resource Create: Supports File Upload
const ResourceCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Resource Name" />
      <TextInput source="description" label="Description" />
      <TextInput source="link" label="Link" />
      <FileInput source="image" label="Upload Image" accept="image/*">
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="purpose" label="Purpose" />
      <TextInput source="advantages" label="Adavantages" />
      <TextInput source="attachment" label="Attachment" />
      <TextInput source="popularBrand" label="Popular Brand" />
      <TextInput source="fuelType" label="Fuel Type" />
      <TextInput source="safety" label="Safety" />
    </SimpleForm>
  </Create>
);

const ResourceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Resource Name" />
      <TextInput source="description" label="Description" />
      <TextInput source="link" label="Link" />
      <FileInput source="image" label="Upload New Image" accept="image/*">
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="purpose" label="Purpose" />
      <TextInput source="advantages" label="Adavantages" />
      <TextInput source="attachment" label="Attachment" />
      <TextInput source="popularBrand" label="Popular Brand" />
      <TextInput source="fuelType" label="Fuel Type" />
      <TextInput source="safety" label="Safety" />      
    </SimpleForm>
  </Edit>
);

const App = () => (
  <Admin dataProvider={customDataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="contacts" list={ContactList} />
    <Resource name="users" list={UserList} />
    <Resource name="schemes" list={SchemeList} create={SchemeCreate} edit={SchemeEdit} />
    <Resource name="resources" list={ResourceList} create={ResourceCreate} edit={ResourceEdit} />
  </Admin>
);

export default App;
