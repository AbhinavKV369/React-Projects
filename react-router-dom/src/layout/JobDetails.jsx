import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData(); 

  return (
    <div>
      <h1>Job Details Page</h1>
      <h2>{job.title}</h2>
      <p>
        <strong>Salary:</strong> 💰 {job.salary}
      </p>
      <p>
        <strong>Location:</strong> 📍 {job.location}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
    </div>
  );
};

export default JobDetails;
