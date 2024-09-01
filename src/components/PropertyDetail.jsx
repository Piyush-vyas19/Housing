import React from 'react';
import Calendar from 'react-calendar';
import './PropertyDetail.css';

const PropertyDetail = () => {
  return (
    <div className="property-card">
      <div className="property-content">
        <div className="property-header">
          <div className="price-section">
            <h2 className="price">₹62.0 Lac</h2>
            
          </div>
          <button className="more-options">•••</button>
        </div>

        <h3 className="property-title">1268 Sq-ft 2 BHK Flat For Sale in Padur, Chennai</h3>

        <div className="property-images">
          <img src="/api/placeholder/400/300" alt="Property" className="main-image" />
          <div className="image-grid">
            <img src="/api/placeholder/100/100" alt="Property" />
            <img src="/api/placeholder/100/100" alt="Property" />
            <img src="/api/placeholder/100/100" alt="Property" />
            <span className="more-photos">+15 Photos</span>
          </div>
        </div>

        <div className="property-features">
          <div className="feature">2 Beds</div>
          <div className="feature">2 Baths</div>
          <div className="feature">2 Balconies</div>
          <div className="feature">1 Covered Parking</div>
        </div>

        <div className="property-details">
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-label">Carpet Area</span>
              <span className="detail-value">1268 sqft</span>
              <span className="detail-subvalue">₹ 4,890/sqft</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Floor</span>
              <span className="detail-value">7 (Out of 15 Floors)</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Transaction Type</span>
              <span className="detail-value">Resale</span>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">Ready to Move</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Facing</span>
              <span className="detail-value">East</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Lifts</span>
              <span className="detail-value">2</span>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-item">
              <span className="detail-label">Furnished Status</span>
              <span className="detail-value">Furnished</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Car Parking</span>
              <span className="detail-value">1 Covered</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Type Of Ownership</span>
              <span className="detail-value">Freehold</span>
            </div>
          </div>
        </div>

        <div className="property-highlights">
          <div className="highlight">East Facing Property</div>
        </div>

        <div className="action-buttons">
          <button className="contact-btn">Contact Owner</button>
          <button className="phone-btn">Get Phone No.</button>
        </div>

       
      </div>

      <div className="property-sidebar">
        <div className="sidebar-card">
          <h3>Book a 1:1 Relationship Manager</h3>
          <p>Property ID: 73110443</p>
          <p>Posted on: Aug 28, 24</p>
          <button className="book-btn">
            
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
