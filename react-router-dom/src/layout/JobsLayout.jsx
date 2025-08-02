import React from "react";
import { Outlet } from "react-router-dom";

// Layout wrapper for all /jobs routes
const JobsLayout = () => {
  return (
    <div className="job">
      <h2>Job Openings</h2>
      <p>List of current openings in the company</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
