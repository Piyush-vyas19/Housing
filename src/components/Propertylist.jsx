import React from 'react';
import './realestatepage.css';

const PropertyList = ({ properties }) => {
    return (
        <div className="property-list">
            {properties.map((property) => (
                <div key={property.id} className="property-card">
                    <img src={property.image} alt={property.title} />
                    <h3>{property.title}</h3>
                    <p>{property.location}</p>
                    <p>{property.price}</p>
                    <a href={`/property/${property.id}`}>View Details</a>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
