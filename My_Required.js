import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';


const Header = () => (
  <header className="p-3 bg-dark text-white" id="upperHeader">
    <div className="container-fluid d-flex">
      <div className="d-flex align-items-center">
        <img src="logo.png" alt="Logo" className="me-2" style={{ height: '40px' }} />
        <h1 className="h4 mb-0">CorpSathi</h1>
      </div>
      <div className="MenuBtn">
        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle" id="menuToggle">☰ Menu</button>
          <ul className="dropdown-menu" id="menuDropdown">
            <li><a className="dropdown-item" href="#">Home</a></li>
            <li><a className="dropdown-item" href="#">Dashboard</a></li>
            <li><a className="dropdown-item" href="#">Catalog</a></li>
            <li><a className="dropdown-item" href="#">Wallet</a></li>
            <li><a className="dropdown-item" href="#">Reports</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="Search">
        <input type="text" className="form-control me-3" placeholder="Search..." />
      </div>
      <div className="HeaderNotification">
        <a href="#"><img src="bell-icon.png" alt="bell" className="help" style={{ height: '30px' }} /></a>
      </div>
      <div className="HeaderNotification">
        <a href="#"><img src="cart.png" alt="cart" className="help" style={{ height: '30px' }} /></a>
      </div>
      <div className="HeaderNotification">
        <a href="#"><img src="wallet.png" alt="wallet" className="help" style={{ height: '30px' }} /></a>
      </div>

      <div className="dropdown">
        <div className="dropdown-toggle" id="profileDropdown">
          <img src="Profile.jpg" alt="Profile" className="rounded-circle" style={{ height: '30px' }} />
          Ankit
        </div>
        <div className="dropdown-menu" id="dropdownMenu">
          <li><a href="ProfileSetting1.html">Profile Settings</a></li>
          <li><a href="#">Logout</a></li>
        </div>

      </div>
    </div>
    <div className="welcome d-flex justify-content-between align-items-center mt-2">
      <strong className="me-auto">My Required</strong>
      <div id="welcome" className="ms-auto">
      <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#5CB85C',
            color: '#fff',
            cursor: 'pointer'
          }}>+Add Required</button>
      </div>
    </div>
    
  </header>
  
);

const Sidebar = () => (
  <div className="left-header">
    <UserProfile />
    <div className="menu-container">
      {["Required", "My Required"].map((item, index) => (
        <div key={index} className="menu-item">{item}</div>
      ))}
    </div>
  </div>
);

const UserProfile = () => (
  <div className="profile-container">
    <div className="profile-image">
      <img src="Profile.jpg" alt="Profile" />
    </div>
    <div className="profile-info">
      <p>Welcome,</p>
      <p>ID: 999</p>
      <p>Name: Ankit</p>
    </div>
  </div>
);
const StatsItems = () => (
     <div className="stats-cards-container">
      <div className="stats-card category">Category</div>
      <div className="stats-card sub-category">Sub Category</div>
      <div className="stats-card name-title">Name/Title</div>
      <div className="stats-card description">Description</div>
      <div className="stats-card action">Action</div>
    </div>
);


const ServicesSection = () => {
  // A small reusable component for each service card
  const ServiceCard = ({ title }) => {
    return (
      <div style={{
        width: '300px',
        border: '1px solid #ccc',
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#F9B858',
          padding: '10px'
        }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>
            <span style={{ marginRight: '5px' }}>📌</span> 
            {title}
          </h2>
        </div>

        {/* Body content (empty for now) */}
        <div style={{ flex: 1, minHeight: '200px'}} />

        {/* Footer with buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}>
          <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#7D52C8',
            color: '#fff',
            cursor: 'pointer'
          }}>View</button>

          <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#D9534F',
            color: '#fff',
            cursor: 'pointer'
          }}>Delete</button>

          <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#5CB85C',
            color: '#fff',
            cursor: 'pointer'
          }}>Edit</button>

          <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#F0AD4E',
            color: '#fff',
            cursor: 'pointer'
          }}>⋮</button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', padding: '20px', marginLeft: '200px' }}>
      <ServiceCard title="GST Registration Service" />
      <ServiceCard title="GST Return Filing Service" />
    </div>
  );
}









const Footer = () => (
  <footer className="p-3 bg-light text-center">
    <p>&copy; 2024 CorpSathi All rights reserved.</p>
  </footer>
);

const My_Benifit = () => (
  <div className="dashboard-container">
    <Header />
    <div className="dashboard-content d-flex">
      <Sidebar />
      <div className="main-content">
        <StatsItems />
        <ServicesSection />

      </div>
    </div>
  </div>
);

export default My_Benifit;