import React from "react";
import { BsPeople, BsBox,BsGraphUp, BsClock,} from "react-icons/bs";
import MetricCard from "../components/dashboard/MetricCard";
import RatingChart from "../components/dashboard/RatingChart";
import MostOrdered from "../components/dashboard/Order";
import Layout from "../components/dashboard/Layout"; // Import the Layout component

const Dashboard = () => {
  const metrics = [
    {
      title: "Total User",
      value: "40,689",
      change: "8.5% Up from yesterday",
      icon: <BsPeople className="text-primary" size={24} />,
      color: "primary",
    },
    {
      title: "Total Order",
      value: "10,293",
      change: "1.3% Up from past week",
      icon: <BsBox className="text-warning" size={24} />,
      color: "warning",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      icon: <BsGraphUp className="text-success" size={24} />,
      color: "success",
    },
    {
      title: "Total Pending",
      value: "2,040",
      change: "1.8% Up from yesterday",
      icon: <BsClock className="text-danger" size={24} />,
      color: "danger",
    },
  ];

  return (
    <Layout>
      <div className="p-3 p-lg-4">
        <h4 className="mb-4">Dashboard</h4>

        {/* Metrics Section */}
        <div className="row g-3 g-xl-4 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="col-12 col-sm-6 col-xl-3">
              <MetricCard {...metric} />
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="row g-3 g-xl-4">
          <div className="col-12 col-lg-6">
            <RatingChart />
          </div>
          <div className="col-12 col-lg-6">
            <MostOrdered />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
