import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

// Base URL without the resource path (contact or users)
const API_URL = "http://localhost:5000/api";

const httpClient = fetchUtils.fetchJson;

const dataProvider = simpleRestProvider(API_URL, httpClient);

// Custom data provider for both contacts and users
const customDataProvider = {
  ...dataProvider,

  // Overriding the getList function
  getList: (resource, params) => {
    // Dynamically determine the URL based on the resource (contact or users)
    let url = "";
    if (resource === "contacts") {
      url = `${API_URL}/contact/contacts`; // For contacts
    } else if (resource === "users") {
      url = `${API_URL}/auth/users`; // For users
    } else {
      throw new Error(`Unknown resource: ${resource}`);
    }

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Ensure the response has an 'id' field in the data
        const transformedData = Array.isArray(data.data)
          ? data.data.map((item) => ({
              id: item.id, // Ensure each item has an 'id' field
              ...item,
            }))
          : [];

        return {
          data: transformedData,
          total: typeof data.total === "number" ? data.total : 0, // Ensure total is a number
        };
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
      });
  },
};


export default customDataProvider;
