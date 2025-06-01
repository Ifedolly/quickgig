import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ViewAllJobs.css';

const ViewAllJobs = () => {
  return (
    <section className="view-all-section">
      <Link to="/jobs" className="view-all-link">
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
