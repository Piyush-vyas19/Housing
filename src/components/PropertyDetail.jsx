import './PropertyDetail.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnalyticsBox from "./AnalyticsBox";
import './AnalyticsBox.css';

const PropertyDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., save the appointment details)
    console.log('Location:', location);
    console.log('Date:', date);
    console.log('Time:', time);
    closeModal();
  };

  return (
    <>
      <div className="property-card">
        <div className="property-content">
          <div className="property-header">
            <div className="price-section">
              <h2 className="price">₹62.0 Lac</h2>
            </div>
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
            <div className="feature"> <img src="/src/icons/bedroom.png" alt="Beds" className="icon" />2 Beds</div>
            <div className="feature"> <img src="/src/icons/shower.png" alt="Baths" className="icon" />2 Baths</div>
            <div className="feature"> <img src="/src/icons/balcony.png" alt="Balconies" className="icon" />2 Balconies</div>
            <div className="feature"> <img src="/src/icons/parking.png" alt="Parking" className="icon" />1 Covered Parking</div>
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
            <button className="book-btn" onClick={openModal}>
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="more-details-box">
  <h3>More Details</h3>
  <div className="details-row">
    <div className="details-item">
      <span className="details-label">Price Breakup:</span>
      <span className="details-value">₹60 Lac + Other Charges</span>
    </div>
    <div className="details-item">
      <span className="details-label">Area:</span>
      <span className="details-value">1268 sqft</span>
    </div>
    <div className="details-item">
      <span className="details-label">Furnishing:</span>
      <span className="details-value">Fully Furnished</span>
    </div>
    <div className="details-item">
      <span className="details-label">Age of Construction:</span>
      <span className="details-value">5 Years</span>
    </div>
    <div className="details-item">
      <span className="details-label">Description:</span>
      <span className="details-value">
        This is a 2 BHK flat in a prime location with all modern amenities. 
        The property is ready to move and is perfect for a family looking for 
        a comfortable living space.
      </span>
    </div>
  </div>
</div>
<div className="analytics-view">
  <AnalyticsBox />
</div>


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Schedule Appointment</h3>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
              />
            </label>
            <label>
              Select Date:
              <Calendar onChange={setDate} value={date} />
            </label>
            <label>
              Select Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <div className="modal-actions">
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyDetail;
