import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Profile from './components/Profile';
import PropertyDetail from './components/PropertyDetail';
import RealEstatePage from './components/RealEstatePage';
import Header from './components/Header';
import Signup from './components/Signup';
import { DarkModeProvider } from './components/DarkModeContext';

function App() {
  const location = useLocation(); // Get the current location

  // Determine if the current path is not the login page
  const shouldShowHeader = location.pathname !== '/login' && location.pathname !== '/signup';;
  

  return (
    <DarkModeProvider>
      <div className="App">
        {shouldShowHeader && <Header /> } {/* Conditionally render Header */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
        </Routes>
      </div>
    </DarkModeProvider>
  );
}

export default App;
