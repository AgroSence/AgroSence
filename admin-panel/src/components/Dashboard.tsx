import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useDataProvider } from "react-admin";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

  // Data for the Pie Chart
  const pieChartData = [
    { name: "Users", value: counts.users },
    { name: "Contacts", value: counts.contacts },
    { name: "Schemes", value: counts.schemes },
    { name: "Resources", value: counts.resources },
  ];

  return (
    <div style={{ padding: "10px" }}>
      {/* Cards Section */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
        <DashboardCard title="Total Users" count={counts.users} />
        <DashboardCard title="Total Contacts" count={counts.contacts} />
        <DashboardCard title="Total Schemes" count={counts.schemes} />
        <DashboardCard title="Total Resources" count={counts.resources} />
      </div>

      {/* Pie Chart Section */}
      <Card style={{ padding: "20px", boxShadow: "2px 4px 10px rgba(0,0,0,0.2)", textAlign: "center" }}>
        <Typography variant="h6" style={{ marginBottom: "20px" }}>
          Dashboard Overview (Pie Chart)
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

const DashboardCard = ({ title, count }) => (
  <Card style={{ width: "250px", textAlign: "center", boxShadow: "2px 4px 10px rgba(0,0,0,0.2)" }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h5">{count}</Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
