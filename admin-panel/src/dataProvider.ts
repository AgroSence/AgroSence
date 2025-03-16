import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const API_URL = "http://localhost:5000/api";
const httpClient = fetchUtils.fetchJson;
const dataProvider = simpleRestProvider(API_URL, httpClient);

const customDataProvider = {
  ...dataProvider,

  getList: async (resource, params) => {
    let url = "";

    switch (resource) {
      case "contacts":
        url = `${API_URL}/contact/submit`;
        break;
      case "users":
        url = `${API_URL}/auth/users`;
        break;
      case "schemes":
        url = `${API_URL}/schemes/all`;
        break;
      case "resources":
        url = `${API_URL}/resources/all`; // Ensure correct endpoint
        break;
      default:
        throw new Error(`Unknown resource: ${resource}`);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching ${resource}: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(`Fetched ${resource}:`, data);
      
      if (!data || !data.data) {
        throw new Error(`Invalid response structure for ${resource}`);
      }

      return {
        data: data.data.map((item) => ({
          id: item._id || item.id, // Ensure correct ID mapping
          ...item,
          imageUrl: `${item.image}`,
        })),
        total: data.data.length,
      };
    } catch (error) {
      console.error(`Error fetching ${resource}:`, error);
      throw new Error(`Failed to fetch ${resource}: ${error.message}`);
    }
  },

  create: async (resource, params) => {
    let url;
    let body;
    let headers = {}; // Empty headers for FormData requests

    switch (resource) {
      case "resources":
        url = `${API_URL}/resources/add`;

        // Creating FormData for file upload
        const formData = new FormData();
        Object.keys(params.data).forEach((key) => {
          formData.append(key, params.data[key]);
        });

        body = formData;
        break;

      case "schemes":
        url = `${API_URL}/schemes/add`;
        body = JSON.stringify(params.data);
        headers = { "Content-Type": "application/json" };
        break;

      default:
        return dataProvider.create(resource, params);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body,
        headers, // Do not set headers manually for FormData (browser does it automatically)
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error adding ${resource}: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      return { data: { id: data._id, ...data } };
    } catch (error) {
      console.error(`Error creating ${resource}:`, error);
      throw new Error(`Failed to create ${resource}: ${error.message}`);
    }
  },

  getDashboardStats: async () => {
    try {
      const response = await fetch(`${API_URL}/dashboard/stats`);
      if (!response.ok) throw new Error("Failed to fetch dashboard stats");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Dashboard stats error:", error);
      return { users: 0, contacts: 0, schemes: 0, resources: 0 };
    }
  },

  create: async (resource, params) => {
    let url;
    let body;
    let headers = {}; // Do not set Content-Type manually for FormData

    switch (resource) {
      case "resources":
        url = `${API_URL}/resources/add`;

        // Create FormData for file upload
        const formData = new FormData();
        formData.append("name", params.data.name);
        formData.append("description", params.data.description);
        formData.append("link", params.data.link);

        if (params.data.image && params.data.image.rawFile) {
          formData.append("image", params.data.image.rawFile);
        } else {
          console.error("No image file found in params.data");
        }

        body = formData;
        break;

      default:
        return dataProvider.create(resource, params);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body, // No need to set headers for FormData
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error adding ${resource}: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      return { data: { id: data._id, ...data } };
    } catch (error) {
      console.error(`Error creating ${resource}:`, error);
      throw new Error(`Failed to create ${resource}: ${error.message}`);
    }
  },

  create: async (resource, params) => {
    let url;
    let body;
    let headers = {}; // Do not set Content-Type manually for FormData

    switch (resource) {
      case "resources":
        url = `${API_URL}/resources/add`;

        // Create FormData for file upload
        const formData = new FormData();
        formData.append("name", params.data.name);
        formData.append("description", params.data.description);
        formData.append("link", params.data.link);

        if (params.data.image && params.data.image.rawFile) {
          formData.append("image", params.data.image.rawFile);
        } else {
          console.error("No image file found in params.data");
        }

        body = formData;
        break;

      default:
        return dataProvider.create(resource, params);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body, // No need to set headers for FormData
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error adding ${resource}: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      return { data: { id: data._id, ...data } };
    } catch (error) {
      console.error(`Error creating ${resource}:`, error);
      throw new Error(`Failed to create ${resource}: ${error.message}`);
    }
  },

  update: async (resource, params) => {
    let url;
    let body;

    switch (resource) {
      case "resources":
        url = `${API_URL}/resources/update/${params.id}`;
        body = JSON.stringify(params.data);
        break;

      case "schemes":
        url = `${API_URL}/schemes/update/${params.id}`;
        body = JSON.stringify(params.data);
        break;

      default:
        return dataProvider.update(resource, params);
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (!response.ok) {
        throw new Error(`Error updating ${resource}: ${response.statusText}`);
      }

      return { data: params.data };
    } catch (error) {
      console.error(`Error updating ${resource}:`, error);
      throw new Error(`Failed to update ${resource}`);
    }
  },

  delete: async (resource, params) => {
    let url;

    switch (resource) {
      case "resources":
        url = `${API_URL}/resources/delete/${params.id}`;
        break;
      case "schemes":
        url = `${API_URL}/schemes/delete/${params.id}`;
        break;
      default:
        return dataProvider.delete(resource, params);
    }

    try {
      const response = await fetch(url, { method: "DELETE" });

      if (!response.ok) {
        throw new Error(`Error deleting ${resource}: ${response.statusText}`);
      }

      return { data: { id: params.id } };
    } catch (error) {
      console.error(`Error deleting ${resource}:`, error);
      throw new Error(`Failed to delete ${resource}`);
    }
  },
};

export default customDataProvider;
