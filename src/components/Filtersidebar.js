import React, { useState } from 'react';
import './realestatepage.css';

const FilterSidebar = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        transactionType: 'buy',
        location: '',
        priceRange: { min: 0, max: 1000000 },
        propertyType: '',
        bedrooms: '',
        showMoreFilters: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseFloat(value) || 0;

        if (name === 'minPrice' || name === 'maxPrice') {
            const newPriceRange = {
                ...filters.priceRange,
                [name === 'minPrice' ? 'min' : 'max']: parsedValue,
            };

            // Ensure min is not greater than max
            if (newPriceRange.min > newPriceRange.max) {
                return;
            }

            setFilters(prevFilters => ({
                ...prevFilters,
                priceRange: newPriceRange
            }));
            onFilterChange({ ...filters, priceRange: newPriceRange });
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
                        value={filters.propertyType}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Type</option>
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
                        value={filters.bedrooms}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Size</option>
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
                        <p>Additional filters will be displayed here...</p>
                        <button className="close-popup" onClick={toggleMoreFilters}>Close</button>
                    </div>
                </>
            )}
        </>
    );
};

export default FilterSidebar;
