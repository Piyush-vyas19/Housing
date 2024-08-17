import React, { useState, useEffect } from 'react';
import FilterSidebar from './Filtersidebar';
import PropertyList from './Propertylist';
import './realestatepage.css';

const RealEstatePage = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from an API or a static file
        fetch('/api/properties')
            .then(response => response.json())
            .then(data => setProperties(data));
    }, []);

    const handleFilterChange = (filters) => {
        const filtered = properties.filter(property => {
            return (
                (filters.priceRange ? property.price <= filters.priceRange : true) &&
                (filters.propertyType ? property.type === filters.propertyType : true) &&
                (filters.bedrooms ? property.bedrooms >= filters.bedrooms : true)
            );
        });
        setFilteredProperties(filtered);
    };

    return (
        <div className="real-estate-page">
            <FilterSidebar onFilterChange={handleFilterChange} />
            <PropertyList properties={filteredProperties.length > 0 ? filteredProperties : properties} />
        </div>
    );
};

export default RealEstatePage;
