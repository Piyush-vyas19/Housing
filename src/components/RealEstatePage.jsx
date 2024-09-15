import React, { useState, useEffect } from 'react';
import './RealEstatePage.css';

const RealEstatePage = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        // Sample properties data
        const propertyData = [
            { 
                id: 1, 
                name: 'Ocean View Villa', 
                location: 'Miami', 
                price: 850000, 
                type: 'villa', 
                bedrooms: 4, 
                description: 'A luxurious villa with a breathtaking ocean view.', 
                image: '/images/ocean_view_villa.jpg' 
            },
            { 
                id: 2, 
                name: 'Downtown Apartment', 
                location: 'New York', 
                price: 1200000, 
                type: 'flat', 
                bedrooms: 3, 
                description: 'An upscale apartment in the heart of NYC.', 
                image: '/images/downtown_apartment.jpg' 
            },
            { 
                id: 3, 
                name: 'Suburban House', 
                location: 'Los Angeles', 
                price: 650000, 
                type: 'house', 
                bedrooms: 5, 
                description: 'A spacious house in the peaceful suburbs.', 
                image: '/images/suburban_house.jpg' 
            },
            { 
                id: 4, 
                name: 'Mountain Retreat', 
                location: 'Denver', 
                price: 550000, 
                type: 'villa', 
                bedrooms: 4, 
                description: 'A beautiful retreat in the mountains with stunning views.', 
                image: '/images/mountain_retreat.jpg' 
            },
            { 
                id: 5, 
                name: 'Beachfront Condo', 
                location: 'Malibu', 
                price: 950000, 
                type: 'flat', 
                bedrooms: 2, 
                description: 'A modern beachfront condo with direct access to the beach.', 
                image: '/images/beachfront_condo.jpg' 
            }
        ];

        setProperties(propertyData);
    }, []);

    const handleFilterChange = (filters) => {
        const filtered = properties.filter(property => {
            return (
                (filters.priceRange ? property.price <= filters.priceRange.max && property.price >= filters.priceRange.min : true) &&
                (filters.propertyType ? property.type === filters.propertyType : true) &&
                (filters.bedrooms ? property.bedrooms.toString() === filters.bedrooms : true) &&
                (filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
                (filters.amenities.length ? filters.amenities.every(amenity => property.amenities.includes(amenity)) : true) &&
                (filters.nearbyFacilities.length ? filters.nearbyFacilities.every(facility => property.nearbyFacilities.includes(facility)) : true)
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

const FilterSidebar = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        transactionType: 'buy',
        location: '',
        priceRange: { min: 0, max: 1000000 },
        propertyType: '',
        bedrooms: '',
        amenities: [],
        nearbyFacilities: [],
        showMoreFilters: false,
        minAreaSize: 0,
        maxAreaSize: 5000,
        furnishingStatus: '',
        availabilityStatus: '',
        ownershipType: '',
        propertyAge: '',
        facingDirection: '',
        parkingAvailability: '',
        floorLevel: '',
        petPolicy: '',
        gatedSociety: '',
        reraRegistered: '',
        balconyAvailability: '',
        securityFeatures: '',
        greenCertification: '',
        viewType: '',
        publicTransport: '',
        flooringType: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
    
        if (type === 'number') {
            const parsedValue = parseFloat(value) || 0;
            if (name === 'minPrice' || name === 'maxPrice') {
                const newPriceRange = {
                    ...filters.priceRange,
                    [name === 'minPrice' ? 'min' : 'max']: parsedValue,
                };
    
                if (newPriceRange.min > newPriceRange.max) {
                    return;
                }
    
                setFilters(prevFilters => ({
                    ...prevFilters,
                    priceRange: newPriceRange
                }));
                onFilterChange({ ...filters, priceRange: newPriceRange });
            } else {
                setFilters(prevFilters => ({ ...prevFilters, [name]: parsedValue }));
                onFilterChange({ ...filters, [name]: parsedValue });
            }
        } else if (name === 'amenities' || name === 'nearbyFacilities') {
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setFilters(prevFilters => ({ ...prevFilters, [name]: selectedOptions }));
            onFilterChange({ ...filters, [name]: selectedOptions });
        } else {
            setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
            onFilterChange({ ...filters, [name]: value });
        }
    };

    const toggleMoreFilters = () => {
        const showMoreFilters = !filters.showMoreFilters;
        setFilters(prevFilters => ({
            ...prevFilters,
            showMoreFilters
        }));
        document.body.style.overflow = showMoreFilters ? 'hidden' : 'auto';
    };

    const handleSubmit = () => {
        onFilterChange(filters);
    };

    return (
        <>
            <div className="filter-sidebar">
                <h2>Filter Properties</h2>
                <div className="filter-group">
                    <label>Transaction Type</label>
                    <select
                        name="transactionType"
                        value={filters.transactionType}
                        onChange={handleInputChange}
                    >
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="location-filter">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                    />
                </div>
                <div className="budget-filter">
                    <label>Budget</label>
                    <div className="price-inputs">
                        <input
                            type="number"
                            name="minPrice"
                            value={filters.priceRange.min}
                            onChange={handleInputChange}
                            placeholder="Min Price"
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            value={filters.priceRange.max}
                            onChange={handleInputChange}
                            placeholder="Max Price"
                        />
                    </div>
                </div>
                <div className="filter-group">
                    <label>Property Type</label>
                    <select
                        name="propertyType"
                        multiple
                        value={filters.propertyType}
                        onChange={handleInputChange}
                    >
                        <option value="flat">Flat</option>
                        <option value="villa">Villa</option>
                        <option value="house">House</option>
                        <option value="land">Plot/Land</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label>Size</label>
                    <select
                        name="bedrooms"
                        multiple
                        value={filters.bedrooms}
                        onChange={handleInputChange}
                    >
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                    </select>
                </div>
                <button className="more-filters-button" onClick={toggleMoreFilters}>
                    {filters.showMoreFilters ? 'Hide More Filters' : 'More Filters'}
                </button>
                <button className="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            {filters.showMoreFilters && (
                <>
                    <div className="overlay" onClick={toggleMoreFilters}></div>
                    <div className="more-filters-popup">
                        <h3>Additional Filters</h3>
                        <div className="filter-group">
                            <label>Area Size (sq. ft.)</label>
                            <input
                                type="number"
                                name="minAreaSize"
                                value={filters.minAreaSize}
                                onChange={handleInputChange}
                                placeholder="Min Area Size"
                            />
                            <input
                                type="number"
                                name="maxAreaSize"
                                value={filters.maxAreaSize}
                                onChange={handleInputChange}
                                placeholder="Max Area Size"
                            />
                        </div>
                        <div className="filter-group">
                            <label>Furnishing Status</label>
                            <select
                                name="furnishingStatus"
                                multiple
                                value={filters.furnishingStatus}
                                onChange={handleInputChange}
                            >
                                <option value="Fully Furnished">Fully Furnished</option>
                                <option value="Semi-Furnished">Semi-Furnished</option>
                                <option value="Unfurnished">Unfurnished</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Availability Status</label>
                            <select
                                name="availabilityStatus"
                                multiple
                                value={filters.availabilityStatus}
                                onChange={handleInputChange}
                            >
                                <option value="Available">Available</option>
                                <option value="Sold">Sold</option>
                                <option value="Rented">Rented</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Ownership Type</label>
                            <select
                                name="ownershipType"
                                multiple
                                value={filters.ownershipType}
                                onChange={handleInputChange}
                            >
                                <option value="Freehold">Freehold</option>
                                <option value="Leasehold">Leasehold</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Property Age</label>
                            <select
                                name="propertyAge"
                                multiple
                                value={filters.propertyAge}
                                onChange={handleInputChange}
                            >
                                <option value="New">New</option>
                                <option value="1-5 years">1-5 years</option>
                                <option value="5-10 years">5-10 years</option>
                                <option value="More than 10 years">More than 10 years</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Facing Direction</label>
                            <select
                                name="facingDirection"
                                multiple
                                value={filters.facingDirection}
                                onChange={handleInputChange}
                            >
                                <option value="North">North</option>
                                <option value="South">South</option>
                                <option value="East">East</option>
                                <option value="West">West</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Parking Availability</label>
                            <select
                                name="parkingAvailability"
                                multiple
                                value={filters.parkingAvailability}
                                onChange={handleInputChange}
                            >
                                <option value="Covered">Covered</option>
                                <option value="Open">Open</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Floor Level</label>
                            <select
                                name="floorLevel"
                                multiple
                                value={filters.floorLevel}
                                onChange={handleInputChange}
                            >
                                <option value="Ground Floor">Ground Floor</option>
                                <option value="1st Floor">1st Floor</option>
                                <option value="2nd Floor">2nd Floor</option>
                                <option value="Top Floor">Top Floor</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Amenities</label>
                            <select
                                name="amenities"
                                multiple
                                value={filters.amenities}
                                onChange={handleInputChange}
                            >
                                <option value="Swimming Pool">Swimming Pool</option>
                                <option value="Gym">Gym</option>
                                <option value="Garden">Garden</option>
                                <option value="Playground">Playground</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Nearby Facilities</label>
                            <select
                                name="nearbyFacilities"
                                multiple
                                value={filters.nearbyFacilities}
                                onChange={handleInputChange}
                            >
                                <option value="School">School</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Shopping Mall">Shopping Mall</option>
                                <option value="Public Transport">Public Transport</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Pet Policy</label>
                            <select
                                name="petPolicy"
                                multiple
                                value={filters.petPolicy}
                                onChange={handleInputChange}
                            >
                                <option value="Allowed">Allowed</option>
                                <option value="Not Allowed">Not Allowed</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Gated Society</label>
                            <select
                                name="gatedSociety"
                                multiple
                                value={filters.gatedSociety}
                                onChange={handleInputChange}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>RERA Registered</label>
                            <select
                                name="reraRegistered"
                                multiple
                                value={filters.reraRegistered}
                                onChange={handleInputChange}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Balcony Availability</label>
                            <select
                                name="balconyAvailability"
                                value={filters.balconyAvailability}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Security Features</label>
                            <select
                                name="securityFeatures"
                                value={filters.securityFeatures}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="CCTV">CCTV</option>
                                <option value="Intercom">Intercom</option>
                                <option value="Gated Entry">Gated Entry</option>
                                <option value="Security Guards">Security Guards</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Green Certification</label>
                            <select
                                name="greenCertification"
                                value={filters.greenCertification}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="LEED">LEED</option>
                                <option value="BREEAM">BREEAM</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>View Type</label>
                            <select
                                name="viewType"
                                value={filters.viewType}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="Sea View">Sea View</option>
                                <option value="Mountain View">Mountain View</option>
                                <option value="City View">City View</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Public Transport</label>
                            <select
                                name="publicTransport"
                                value={filters.publicTransport}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="Nearby">Nearby</option>
                                <option value="Not Nearby">Not Nearby</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Flooring Type</label>
                            <select
                                name="flooringType"
                                value={filters.flooringType}
                                onChange={handleInputChange}
                            >
                                <option value="">Any</option>
                                <option value="Wooden">Wooden</option>
                                <option value="Marble">Marble</option>
                                <option value="Tiles">Tiles</option>
                            </select>
                        </div>
                        <button className="close-filters-button" onClick={toggleMoreFilters}>
                            Close
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

const PropertyList = ({ properties }) => {
    return (
        <div className="property-list">
            {properties.map(property => (
                <div key={property.id} className="property-card">
                    <img src={property.image} alt={property.name} className="property-image" />
                    <div className="property-details">
                        <h3>{property.name}</h3>
                        <p>{property.location}</p>
                        <p>Price: ${property.price}</p>
                        <p>Type: {property.type}</p>
                        <p>Bedrooms: {property.bedrooms}</p>
                        <p>{property.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RealEstatePage;
