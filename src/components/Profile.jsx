import React, { useState,useContext, useEffect } from 'react';
import './profile.css';
import { AuthContext } from './AuthContext';
const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const { isLoggedIn,setisLoggedIn, login, logout, userId } = useContext(AuthContext);
  const email = userId;
  const [phonenum,setphonenum] = useState("");
  console.log(email);
  const [userDetails, setUserDetails] = useState({
    fullName:'',
    location: '',
    preferredPropertyType: '',
    budgetRange: '',
    preferredLocations: '',
  });
  const fetchname = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getname/${email}`);
      const data = await response.json();
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        fullName: data.name, // Store the name in the state
      }));
      console.log(data.name);
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  };
  useEffect(() => {
    fetchname();
  }, [email]);
  
  

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Apartment",
      price: "$350,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    },
  ]);

  const [savedListings, setSavedListings] = useState([
    {
      id: 1,
      title: "Luxury Villa",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you would typically send the updated details to your backend
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          src="/assets/manager.png"
          alt="User Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          <h1 className="profile-name">{userDetails.fullName}</h1>
          <p className="profile-email">{email}</p>
          <p className="profile-membership">Premium Member</p>
        </div>
        <button className="edit-profile-btn" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>

      <div className="profile-nav">
        <button
          className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`nav-btn ${activeTab === 'properties' ? 'active' : ''}`}
          onClick={() => setActiveTab('properties')}
        >
          My Properties
        </button>
        <button
          className={`nav-btn ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          Saved Listings
        </button>
        <button
          className={`nav-btn ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="profile-details">
              <h2 className="section-heading">Personal Information</h2>
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{userDetails.fullName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value"></span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{userDetails.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Joined PlotCliq:</span>
                <span className="detail-value">January 1, 2023</span>
              </div>
            </div>

            <div className="account-summary">
              <h2 className="section-heading">Account Summary</h2>
              <div className="summary-item">
                <span className="summary-label">Listings Created:</span>
                <span className="summary-value">5</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Saved Properties:</span>
                <span className="summary-value">12</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Inquiries Sent:</span>
                <span className="summary-value">8</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Subscription Plan:</span>
                <span className="summary-value">Premium</span>
              </div>
            </div>

            <div className="preferences">
              <h2 className="section-heading">Preferences</h2>
              <div className="preference-item">
                <span className="preference-label">Preferred Property Type:</span>
                <span className="preference-value">
                  {userDetails.preferredPropertyType}
                </span>
              </div>
              <div className="preference-item">
                <span className="preference-label">Budget Range:</span>
                <span className="preference-value">
                  {userDetails.budgetRange}
                </span>
              </div>
              <div className="preference-item">
                <span className="preference-label">Preferred Locations:</span>
                <span className="preference-value">
                  {userDetails.preferredLocations}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="properties-section">
            <h2 className="section-heading">My Listed Properties</h2>
            <div className="property-grid">
              {properties.map((property) => (
                <div key={property.id} className="property-card">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="property-image"
                  />
                  <div className="property-info">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-price">{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {properties.length === 0 && <p>No properties listed yet.</p>}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-section">
            <h2 className="section-heading">Saved Listings</h2>
            <div className="property-grid">
              {savedListings.map((listing) => (
                <div key={listing.id} className="property-card">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="property-image"
                  />
                  <div className="property-info">
                    <h3 className="property-title">{listing.title}</h3>
                    <p className="property-price">{listing.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {savedListings.length === 0 && <p>No saved listings yet.</p>}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="messages-section">
            <h2 className="section-heading">My Messages</h2>
            <div className="message-item">
              <p className="message-sender">Jane Doe</p>
              <p className="message-preview">
                Hi, I'm interested in your property at...
              </p>
            </div>
            <div className="message-item">
              <p className="message-sender">John Smith</p>
              <p className="message-preview">
                Is the house still available for viewing?
              </p>
            </div>
            {/* Add more message items as needed */}
          </div>
        )}
      </div>

      {isEditing && (
        <div className="edit-popup">
          <div className="edit-popup-content">
            <h2>Edit Profile</h2>
            <input
              type="text"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
            <input
              type="text"
              name="location"
              value={userDetails.location}
              onChange={handleInputChange}
              placeholder="Location"
            />
            <input
              type="text"
              name="preferredPropertyType"
              value={userDetails.preferredPropertyType}
              onChange={handleInputChange}
              placeholder="Preferred Property Type"
            />
            <input
              type="text"
              name="budgetRange"
              value={userDetails.budgetRange}
              onChange={handleInputChange}
              placeholder="Budget Range"
            />
            <input
              type="text"
              name="preferredLocations"
              value={userDetails.preferredLocations}
              onChange={handleInputChange}
              placeholder="Preferred Locations"
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
