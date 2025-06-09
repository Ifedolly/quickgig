import React from 'react';
import { useParams, useLoaderData, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../styles/JobPage.css';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?');
    if (!confirm) return;
    deleteJob(jobId);
    toast.success('Job Deleted Successfully');
    navigate('/jobs');
  };

  return (
    <>
      <section className="back-section">
        <div className="container">
          <Link to="/jobs" className="back-link">
            <FaArrowLeft className="icon-left" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="job-section">
        <div className="container">
          <div className="job-layout">
            <main className="job-main">
              <div className="job-card">
                <div className="job-type">{job.type}</div>
                <h1 className="job-title">{job.title}</h1>
                <div className="job-location">
                  <FaMapMarker className="location-icon" />
                  <p>{job.location}</p>
                </div>
              </div>

              <div className="job-card">
                <h3 className="section-title">Job Description</h3>
                <p className="job-description">{job.description}</p>

                <h3 className="section-title">Pay</h3>
                <p className="job-pay">{job.pay}</p>
              </div>
            </main>

            <aside className="job-sidebar">
              <div className="sidebar-card">
                <h3 className="section-title">Poster Info</h3>
                <h2 className="company-name">{job.poster.name}</h2>
                <p className="company-description">{job.poster.description}</p>
                <hr className="divider" />
                <h3 className="section-title">Contact Email:</h3>
                <p className="contact-box">{job.poster.contactEmail}</p>
                <h3 className="section-title">Contact Phone:</h3>
                <p className="contact-box">{job.poster.contactPhone}</p>
              </div>

              <div className="sidebar-card">
                <h3 className="section-title">Manage Job</h3>
                <Link to={`/edit-job/${job.id}`} className="btn btn-edit">Edit Job</Link>
                <button onClick={() => onDeleteClick(job.id)} className="btn btn-delete">Delete Job</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  if (!res.ok) {
    throw new Response('Failed to fetch job', { status: 404 });
  }
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
