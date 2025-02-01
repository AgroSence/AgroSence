import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const API_URL = "http://localhost:5000/api";
const httpClient = fetchUtils.fetchJson;
const dataProvider = simpleRestProvider(API_URL, httpClient);

const customDataProvider = {
  ...dataProvider,

  // Overriding the getList function
  getList: async (resource, params) => {
    let url = "";
    if (resource === "contacts") {
      url = `${API_URL}/contact/submit`;
    } else if (resource === "users") {
      url = `${API_URL}/auth/users`;
    } else {
      throw new Error(`Unknown resource: ${resource}`);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const transformedData = Array.isArray(data.data)
        ? data.data.map((item) => ({
            id: item.id || item._id, // Ensure 'id' is present
            ...item,
          }))
        : [];

      return {
        data: transformedData,
        total: typeof data.total === "number" ? data.total : transformedData.length,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Failed to fetch data");
    }
  },

  // Overriding the delete function to remove data from the DB
  
  delete: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error deleting item");
    }

    return { data: { id: params.id } };
  },
};

export default customDataProvider;
