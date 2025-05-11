import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Delivery from './pages/Delivery'; // Import the Dashboard component
import My_Party from './pages/My_Party'; // Import the Dashboard component
import My_Client from './pages/My_Client'; // Import the Dashboard component
import My_Supplier from './pages/My_Supplier'; // Import the Dashboard component
import Lead from './pages/Lead'; // Import the Dashboard component
import LeadForm from './pages/LeadForm'; // Import other components as needed
import ProfileUpdateForm from './pages/ProfileUpdateForm';
import LeadInsightsForm from './pages/LeadInsightsForm';
import RiderRegistrationForm from './pages/RiderRegistrationForm';
import RequestForm from './pages/RequestForm';
import My_Benifit from './pages/My_Benifit';
import My_Required from './pages/My_Required'
import My_Policy from './pages/My_Policy'
import My_Service from './pages/My_Service'
import Service from './pages/Service'
import Home_Page from './pages/Home_Page'


import './App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Delivery</Link>
            </li>
            <li>
              <Link to="/">My_Party</Link>
            </li>
            <li>
              <Link to="/">My_Client</Link>
            </li>
            <li>
              <Link to="/">My_Benifit</Link>
            </li>
            <li>
              <Link to="/">My_Supplier</Link>
            </li>
            <li>
              <Link to="/">Lead</Link>
            </li>
            <li>
              <Link to="/lead-form">Lead Form</Link>
            </li>
            <li>
              <Link to="/profile-update">Profile Update</Link>
            </li>
            <li>
              <Link to="/lead-insights">Lead Insights Form</Link>
            </li>
            <li>
              <Link to="/rider_registration">Rider Registration Form</Link>
            </li>
            <li>
              <Link to="/request-form">Request Form</Link>
            </li>
          </ul>
        </nav> */}

        {/* Routes */}
        <Routes>
          {/* Route for the Dashboard */}
          <Route path="/" element={<Home_Page />} />
          <Route path="/" element={<My_Service />} />
          <Route path="/" element={<Service />} />
          <Route path="/" element={<My_Party />} />
          <Route path="/" element={<Delivery />} />
          <Route path="/" element={<My_Benifit />} />
          <Route path="/" element={<My_Required />} />
          <Route path="/" element={<My_Policy />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/" element={<My_Client />} />
          <Route path="/" element={<My_Supplier />} />
          <Route path="/" element={<Lead />} />

          {/* Route for the Lead Form */}
          <Route path="/lead-form" element={<LeadForm />} />

          {/* Route for the Profile Update Form */}
          <Route path="/profile-update" element={<ProfileUpdateForm />} />

          {/* Route for the Lead Insights Form */}
          <Route path="/lead-insights" element={<LeadInsightsForm />} />

          {/* Route for the Rider Registration Form */}
          <Route path="/rider_registration" element={<RiderRegistrationForm />} />

          {/* Route for the Request Form */}
          <Route path="/request-form" element={<RequestForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;