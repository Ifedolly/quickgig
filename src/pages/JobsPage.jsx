import React from 'react';
import JobListings from '../components/JobListings';
import '../styles/JobsPage.css';

const JobsPage = () => {
  return (
    <section className="jobs-page-section" >
      <JobListings />
    </section>
  );
};

export default JobsPage;
