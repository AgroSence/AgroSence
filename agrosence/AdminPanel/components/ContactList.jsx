import { List, Datagrid, TextField, DateField } from "react-admin";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the contact data", error);
      });
  }, []);

  return (
    <List>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="name" label="Name" />
        <TextField source="mobile" label="Mobile" />
        <TextField source="email" label="Email" />
        <TextField source="address" label="Address" />
        <TextField source="message" label="Message" />
        <DateField source="dateSubmitted" label="Submitted On" />
      </Datagrid>
    </List>
  );
};

export default ContactList;
