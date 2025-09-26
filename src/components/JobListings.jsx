import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import '../styles/JobListings.css'; // Make sure to import the external CSS file

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="job-listings-section" >
      <div className="container">
        <h2 className="section-heading" data-aos="zoom-in">
          {isHome ? 'Recent Gigs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="job-grid" data-aos="fade-up">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
