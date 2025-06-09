import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/EditJobPage.css';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  // Initialize states with job data
  const [title, setTitle] = useState(job.title || '');
  const [type, setType] = useState(job.type || 'One-Time');
  const [location, setLocation] = useState(job.location || '');
  const [description, setDescription] = useState(job.description || '');
  const [pay, setPay] = useState(job.pay || '');

  const [posterName, setPosterName] = useState(job.poster?.name || '');
  const [posterDescription, setPosterDescription] = useState(job.poster?.description || '');
  const [posterEmail, setPosterEmail] = useState(job.poster?.contactEmail || '');
  const [posterPhone, setPosterPhone] = useState(job.poster?.contactPhone || '');

  useEffect(() => {
    // Reset form values if job changes
    setTitle(job.title || '');
    setType(job.type || 'One-Time');
    setLocation(job.location || '');
    setDescription(job.description || '');
    setPay(job.pay || '');

    setPosterName(job.poster?.name || '');
    setPosterDescription(job.poster?.description || '');
    setPosterEmail(job.poster?.contactEmail || '');
    setPosterPhone(job.poster?.contactPhone || '');
  }, [job]);

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      pay,
      poster: {
        name: posterName,
        description: posterDescription,
        contactEmail: posterEmail,
        contactPhone: posterPhone,
      },
    };

    updateJobSubmit(updatedJob);
    toast.success('Job Updated Successfully');
    navigate(`/jobs/${id}`);
  };

  return (
    <section className="editjob-section">
      <div className="editjob-container">
        <div className="editjob-card">
          <form onSubmit={submitForm}>
            <h2 className="form-title">Update Job</h2>

            <div className="form-group">
              <label htmlFor="type">Job Type</label>
              <select
                id="type"
                name="type"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="One-Time">One-Time</option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
              </select>
            </div>

            <div className="form-group">
              <label>Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="eg. Experienced Plumber Needed"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="pay">Payment Amount</label>
              <input
                type="text"
                id="pay"
                name="pay"
                placeholder="Enter your budget or payment amount"
                value={pay}
                onChange={(e) => setPay(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Job Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="form-subheading">Poster Contact Info (Optional)</h3>

            <div className="form-group">
              <label htmlFor="poster_name">Name</label>
              <input
                type="text"
                id="poster_name"
                name="poster_name"
                placeholder="Poster Name"
                value={posterName}
                onChange={(e) => setPosterName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="poster_description">Description</label>
              <textarea
                id="poster_description"
                name="poster_description"
                rows="3"
                placeholder="Brief description (optional)"
                value={posterDescription}
                onChange={(e) => setPosterDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="poster_email">Contact Email</label>
              <input
                type="email"
                id="poster_email"
                name="poster_email"
                placeholder="Email address for applicants"
                value={posterEmail}
                onChange={(e) => setPosterEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="poster_phone">Contact Phone</label>
              <input
                type="tel"
                id="poster_phone"
                name="poster_phone"
                placeholder="Optional phone number"
                value={posterPhone}
                onChange={(e) => setPosterPhone(e.target.value)}
              />
            </div>

            <div>
              <button type="submit" className="submit-btn">
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
