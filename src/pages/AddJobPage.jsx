import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../styles/AddJobPage.css'

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('One-Time')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [pay, setPay] = useState('')

  // Poster / Contact info (optional)
  const [posterName, setPosterName] = useState('')
  const [posterDescription, setPosterDescription] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const newJob = {
      title,
      type,
      location,
      description,
      pay,
      poster:
        posterName || contactEmail || contactPhone
          ? {
              name: posterName,
              description: posterDescription,
              contactEmail,
              contactPhone,
            }
          : null,
    }

    addJobSubmit(newJob)
    toast.success('Job Added Successfully')
    navigate('/jobs')
  }

  return (
    <section className="addjob-section">
      <div className="addjob-container">
        <div className="addjob-form-wrapper">
          <form onSubmit={submitForm} className="addjob-form">
            <h2 data-aos="zoom-in">Add Job</h2>

            <div className="form-group" >
              <label htmlFor="type" className="form-label">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="form-select"
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
              <label className="form-label">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="eg. Experienced Plumber Needed"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-textarea"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="pay" className="form-label">
                Pay
              </label>
              <input
                type="text"
                id="pay"
                name="pay"
                className="form-input"
                placeholder="Enter your pay or budget amount"
                value={pay}
                onChange={(e) => setPay(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-input"
                placeholder="Job Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3>Poster / Contact Info (Optional)</h3>

            <div className="form-group">
              <label htmlFor="posterName" className="form-label">
                Poster Name
              </label>
              <input
                type="text"
                id="posterName"
                name="posterName"
                className="form-input"
                placeholder="Person or Company Name"
                value={posterName}
                onChange={(e) => setPosterName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="posterDescription" className="form-label">
                Poster Description
              </label>
              <textarea
                id="posterDescription"
                name="posterDescription"
                className="form-textarea"
                rows="3"
                placeholder="Brief description (optional)"
                value={posterDescription}
                onChange={(e) => setPosterDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="contactEmail" className="form-label">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                className="form-input"
                placeholder="Email address for applicants"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactPhone" className="form-label">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                className="form-input"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button className="submit-btn" type="submit">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddJobPage
