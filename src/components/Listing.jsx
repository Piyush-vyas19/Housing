import React, { useState } from 'react';
import axios from 'axios'; // to make API calls

function PropertyListing() {
  const [useAIDescription, setUseAIDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [showDiscount, setShowDiscount] = useState(true);

  // State to store form inputs
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [price, setPrice] = useState('');
  const [parkingSpot, setParkingSpot] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [address, setAddress] = useState('');

  // Handle the AI description generation
  const generateAIDescription = async () => {
    try {
      const prompt = ` ${customPrompt} Generate a property description with the following details: 
        Beds: ${beds}, 
        Baths: ${baths}, 
        Price: ${price}, 
        Parking Spot: ${parkingSpot ? 'Yes' : 'No'}, 
        Furnished: ${furnished ? 'Yes' : 'No'}, 
        Address: ${address}.
        Based on these parameters, generate a compelling description.`;
        
      // Make a request to the backend with the generated prompt
      const response = await axios.post('http://localhost:5000/api/generate-description', { prompt });
      
      // Set the generated description
      setDescription(response.data.description);
    } catch (error) {
      console.error('Error generating AI description:', error);
      setDescription('Failed to generate AI description.');
    }
  };

  const handleDescriptionTypeChange = (e) => {
    if (e.target.value === 'AI') {
      setUseAIDescription(true);
      setDescription(''); // Clear description until the AI description is generated
    } else {
      setUseAIDescription(false);
      setDescription('');
    }
  };

  const handleOptionChange = (e) => {
    if (e.target.id === 'rent' && e.target.checked) {
      setShowDiscount(true); // Show discounted option if the rent is true
    } else if (e.target.id !== 'rent') {
      setShowDiscount(false); // Else hide
    }
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">List Your Property</h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />

          <div className="flex flex-col">
            <p className="font-semibold">Description:</p>
            <div className="flex gap-4 my-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="descriptionType"
                  value="Manual"
                  checked={!useAIDescription}
                  onChange={handleDescriptionTypeChange}
                />
                <span>Manual</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="descriptionType"
                  value="AI"
                  checked={useAIDescription}
                  onChange={handleDescriptionTypeChange}
                />
                <span>Use AI</span>
              </label>
            </div>

            {useAIDescription && (
              
              <div className="flex flex-col gap-2 my-2">
                <textarea
                  placeholder="Enter custom prompt (optional)"
                  className="border p-3 rounded-lg"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                />
                <button
                  type="button"
                  className="p-2 bg-blue-600 text-white rounded-lg"
                  onClick={generateAIDescription}
                >
                  Generate AI Description
                </button>
              </div>
            )}

            <textarea
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              readOnly={useAIDescription}
              required
            />
          </div>

          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" onChange={(e) => setParkingSpot(e.target.checked)} />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" onChange={(e) => setFurnished(e.target.checked)} />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2 items-center">
              <input type="number" id="bedrooms" min="1" max="10" required className="p-3 border-gray-300 rounded-lg"
                value={beds} onChange={(e) => setBeds(e.target.value)} />
              <p>Beds</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="number" id="bathrooms" min="1" max="10" required className="p-3 border-gray-300 rounded-lg"
                value={baths} onChange={(e) => setBaths(e.target.value)} />
              <p>Baths</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="number" id="regularprice" min="1" max="100000" required className="p-3 border-gray-300 rounded-lg"
                value={price} onChange={(e) => setPrice(e.target.value)} />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">($/months)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">Images:</p>
          <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6)</span>
          <div className="flex gap-4">
            <input className="p-3 border border-gray-300 rounded w-full" type="file" id="images" accept="image/*" multiple />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>

          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}

export default PropertyListing;
