import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom'
import '../styles/Homecards.css'

const HomeCards = () => {
  return (
    <section className="homecards-section">
      <div className="card-container" data-aos="zoom-in" data-aos-delay="400">
        <div className="card-grid">
            <Card className="card-box">
              <h2 className="card-heading">Get Hired</h2>
              <p className="card-text">
                Find short-term jobs that match your skills and availability.
              </p>
              <Link to="/jobs" className="btn-developer" data-aos="slide-up">
                Browse Jobs
              </Link>  
            </Card>

          <div className="vertical-line"></div>

          <Card className="card-box">
            <h2 className="card-heading">Post a Gig</h2>
            <p className="card-text">
            Share your job requirements and find skilled help on short notice.
            </p>
            <Link to="/add-job" className="btn-employer" data-aos="slide-up">
              Add Job
            </Link>
          </Card>
        </div>
      </div>
  </section>
  )
}

export default HomeCards