import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SchemeHeader } from "../components/govscheme/SchemeHeader";
import { SchemeCard } from "../components/govscheme/SchemeDetailCard";
import { Spinner } from "react-bootstrap";

// Helper function to format state name (e.g., "uttar-pradesh" to "Uttar Pradesh")
const formatStateName = (state) => {
  return state
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const StateSchemes = () => {
  const { stateName } = useParams(); // Get state name from URL
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        const fetchSchemes = async () => {
          try {
            setLoading(true); // Start loading
            const response = await fetch(`/api/schemes?state=${stateName}`);
            const data = await response.json();
            if (data && data.data) {
              setSchemes(data.data); // Set fetched schemes
            }
          } catch (error) {
            console.error("Error fetching schemes:", error);
          } finally {
            setLoading(false); // End loading
          }
        };
      
        fetchSchemes();
      }, [stateName]); // Re-fetch when stateName changes
      
  return (
    <div className="state-schemes-page">
      {/* Render the formatted state name in the header */}
      <SchemeHeader stateName={formatStateName(stateName)} />

      <div className="container py-4">
        {/* Show loading spinner while fetching data */}
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p>Loading schemes...</p>
          </div>
        ) : schemes.length === 0 ? (
          <p className="text-center">No schemes available for {formatStateName(stateName)}.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {schemes.map((scheme, index) => (
              <div className="col" key={index}>
                <SchemeCard scheme={scheme} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
