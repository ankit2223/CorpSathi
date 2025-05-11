import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
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
      <strong className="me-auto">Dashboard</strong>
      <div id="welcome" className="ms-auto">
        <span>Welcome back, Ankit! "Your journey to success starts here!"</span>
      </div>
    </div>
  </header>
);

const Sidebar = () => (
  <div className="left-header">
    <UserProfile />
    <div className="menu-container">
      {["Dashboard", "Products/Services", "Leads", "Customers", "Associates", "Vendors", "Appointments", "Orders", "Reports", "Settings"].map((item, index) => (
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
const StatsCards = () => (
  <div className="AllCard">
    {["Total Sales", "Customers Acquired", "Associates Recruited", "Partner Recruited"].map((label, index) => {
      let value = 1000;
      let change = "↑ 15%";
      let changeClass = "increase";
      let icon = "📊";

      // Modify details for the second card (Customers Acquired)
      if (index === 1) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "👥";
      }
      if (index === 2) {
        value = 800;
        change = "↑ 25%";
        changeClass = "increase";
        icon = "🌐";
      }
      if (index === 3) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "🤝";
      }

      return (
        <div key={index} className="card">
          <div className="icon">{icon}</div>
          <div className="value">{value}</div>
          <div className={`arrow ${changeClass}`}>{change}</div>
          <div className="label">{label}</div>
        </div>
      );
    })}
  </div>
);
const QuickLinks = () => (
  <div className="quick-links-container">
    <h2 className="quick-links-title">Quick Links</h2>
    <div className="quick-links-grid">
      {[
        { name: "+ Recruit Partner", icon: "fas fa-user-plus" },
        { name: "+ Add Customers", icon: "fas fa-shopping-cart" },
        { name: "+ Recruit Associates", icon: "fas fa-calendar-alt" },
        { name: "+ Add New Lead", icon: "fas fa-file-invoice" },
        { name: "Explore Products", icon: "fas fa-bullseye" },
        { name: "Send Quotation", icon: "fas fa-users" },
        { name: "Required Follow-Up", icon: "fas fa-people-arrows" },
        { name: "Refer a Friends", icon: "fas fa-shipping-fast" },
        { name: "Withdraw Earnings", icon: "fas fa-bullseye" },
        { name: "Track My Earnings", icon: "fas fa-users" },
        { name: "Attend Training", icon: "fas fa-people-arrows" },
        { name: "Manage Order", icon: "fas fa-shipping-fast" },
      ].map((item, index) => (
        <div key={index} className="quick-link-card">
          <i className={`${item.icon} quick-link-icon`}></i>
          <h5 className="mt-3">{item.name}</h5>
        </div>
      ))}
    </div>
  </div>
);


const Charts = () => {
  const chartRefs = {
    sales: useRef(null),
    recruitment: useRef(null),
    income: useRef(null)
  };

  useEffect(() => {
    const destroyChart = (ref) => ref.current?.destroy();
    const createChart = (id, type, data, ref) => {
      const ctx = document.getElementById(id);
      if (ctx) {
        destroyChart(ref);
        ref.current = new Chart(ctx, { type, data, options: { responsive: true } });
      }
    };

    createChart("salesChart", "line", {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{ label: 'Sales', data: [1200, 1500, 1800, 2000, 2200, 2500], borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2 }]
    }, chartRefs.sales);

    createChart("recruitmentChart", "bar", {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{ label: 'Recruits', data: [5, 10, 8, 15, 12, 20], backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }]
    }, chartRefs.recruitment);

    createChart("incomeChart", "pie", {
      labels: ['Retail Income', 'Referral Income', 'Bonuses'],
      datasets: [{ data: [50, 30, 20], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }]
    }, chartRefs.income);

    return () => {
      destroyChart(chartRefs.sales);
      destroyChart(chartRefs.recruitment);
      destroyChart(chartRefs.income);
    };
  }, []);

  return (
    <div className="charts-container">
      <div className="chart-box">
        <h6>Sales Trends</h6>
        <canvas id="salesChart"></canvas>
      </div>
      <div className="chart-box">
        <h6>Recruitment Stats</h6>
        <canvas id="recruitmentChart"></canvas>
      </div>
      <div className="chart-box">
        <h6>Income Breakdown</h6>
        <canvas id="incomeChart"></canvas>
      </div>
    </div>
  );
};



const Footer = () => (
  <footer className="p-3 bg-light text-center">
    <p>&copy; 2024 CorpSathi All rights reserved.</p>
  </footer>
);

const Dashboard = () => (
  <div className="dashboard-container">
    <Header />
    <div className="dashboard-content d-flex">
      <Sidebar />
      <div className="main-content">
        <StatsCards />
        <QuickLinks />
        <Charts />

      </div>
    </div>
    <Footer />
  </div>
);

export default Dashboard;