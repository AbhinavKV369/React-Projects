import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Jobs = () => {
  const jobs = useLoaderData(); // Load job list from loader

  return (
    <div className="jobs">
      {jobs.map((job) => (
        <Link
          to={`/jobs/${job.id}`}
          key={job.id}
          className="job-lists">
          <h2>{job.id}</h2>
          <h3>{job.title}</h3>
          <p>💰 {job.salary}</p>
          <p>📍 {job.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Jobs;
