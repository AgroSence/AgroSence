import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const API_URL = "http://localhost:5000/api";
const httpClient = fetchUtils.fetchJson;
const dataProvider = simpleRestProvider(API_URL, httpClient);

const customDataProvider = {
  ...dataProvider,

  getList: async (resource, params) => {
    let url = "";
    if (resource === "contacts") {
      url = `${API_URL}/contact/submit`;
    } else if (resource === "users") {
      url = `${API_URL}/auth/users`;
    } else if (resource === "schemes") {
      url = `${API_URL}/schemes/all`; // Make sure this is the correct endpoint for fetching schemes
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
            id: item.id || item._id, // Ensure 'id' exists
            name: item.name,
            description: item.description,
            eligibility: item.eligibility,
            benefits: item.benefits,
            state: item.state,
            applyLink: item.applyLink, // Make sure applyLink is included in the response
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

  create: async (resource, params) => {
    if (resource === "schemes") {
      const response = await fetch(`${API_URL}/schemes/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.data),
      });

      if (!response.ok) {
        throw new Error("Error adding scheme");
      }

      const data = await response.json();
      return { data: { ...params.data, id: data.scheme._id } };
    }
    return dataProvider.create(resource, params);
  },

  update: async (resource, params) => {
    if (resource === "schemes") {
      const response = await fetch(`${API_URL}/schemes/update/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params.data),
      });

      if (!response.ok) {
        throw new Error("Error updating scheme");
      }

      return { data: params.data };
    }
    return dataProvider.update(resource, params);
  },

  delete: async (resource, params) => {
    if (resource === "schemes") {
      const response = await fetch(`${API_URL}/schemes/delete/${params.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting scheme");
      }

      return { data: { id: params.id } };
    }
    return dataProvider.delete(resource, params);
  },
};

export default customDataProvider;
