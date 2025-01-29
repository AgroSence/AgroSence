import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import ContactList from "../components/ContactList";
import AdminLayout from "../components/AdminLayout"; // Use custom layout

const dataProvider = simpleRestProvider("http://localhost:5000/api/admin");

const AdminPanel = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={AdminLayout} // Use custom layout
    >
      <Resource name="contact" list={ContactList} />
    </Admin>
  );
};

export default AdminPanel;
