import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useDataProvider } from "react-admin";

const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [counts, setCounts] = useState({
    users: 0,
    contacts: 0,
    schemes: 0,
    resources: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const users = await dataProvider.getList("users", { pagination: { page: 1, perPage: 1 } });
        const contacts = await dataProvider.getList("contacts", { pagination: { page: 1, perPage: 1 } });
        const schemes = await dataProvider.getList("schemes", { pagination: { page: 1, perPage: 1 } });
        const resources = await dataProvider.getList("resources", { pagination: { page: 1, perPage: 1 } });

        setCounts({
          users: users.total,
          contacts: contacts.total,
          schemes: schemes.total,
          resources: resources.total,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchCounts();
  }, [dataProvider]);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <DashboardCard title="Total Users" count={counts.users} />
      <DashboardCard title="Total Contacts" count={counts.contacts} />
      <DashboardCard title="Total Schemes" count={counts.schemes} />
      <DashboardCard title="Total Resources" count={counts.resources} />
    </div>
  );
};

const DashboardCard = ({ title, count }) => (
  <Card style={{width: "250px", padding: "0px", textAlign: "center", boxShadow: "2px 4px 10px rgba(0,0,0,0.2)" }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h5">{count}</Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
