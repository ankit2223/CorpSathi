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
      <strong className="me-auto">Home</strong>
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
      {["Order", "New Order", "Pickup", "Delivery"].map((item, index) => (
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
    {["New Order", "Pickup", "In-Transmit", "Delivery", "Completion","returned"].map((label, index) => {
      let value = 1000;
      let change = "↑ 15%";
      let changeClass = "increase";
      let icon = "🆕";

      // Modify details for the second card (Customers Acquired)
      if (index === 1) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "📦";
      }
      if (index === 2) {
        value = 800;
        change = "↑ 25%";
        changeClass = "increase";
        icon = "🚚";
      }
      if (index === 3) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "📤";
      }
      if (index === 4) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "✅";
      }
      if (index === 5) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "🔙";
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




const OrderTable = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openActionDropdown, setOpenActionDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleActionDropdown = (index) => {
    setOpenActionDropdown(openActionDropdown === index ? null : index);
  };

  const orders = [
    { profile: "Profile.jpg", orderId: "ORD202", orderDate: "2025-02-10", pickupLocation: "Warehouse A", dropoffLocation: "Store X", deliveryDateTime: "2025-02-12 10:00 AM", receiverName: "Alice Smith", receiverMoNumber: "9876543210", packageType: "Electronics", packageWeight: "3kg", numberOfPackages: "1", paymentMode: "Online", status: "En Route", action: "Live Navigation" },
    { profile: "Profile.jpg", orderId: "ORD203", orderDate: "2025-02-11", pickupLocation: "Factory B", dropoffLocation: "Office Y", deliveryDateTime: "2025-02-13 02:00 PM", receiverName: "Bob Johnson", receiverMoNumber: "9876543211", packageType: "Furniture", packageWeight: "15kg", numberOfPackages: "2", paymentMode: "Cash", status: "Reached", action: "Call Receiver" },
    { profile: "Profile.jpg", orderId: "ORD204", orderDate: "2025-02-12", pickupLocation: "Shop C", dropoffLocation: "Home Z", deliveryDateTime: "2025-02-14 05:00 PM", receiverName: "Charlie Brown", receiverMoNumber: "9876543212", packageType: "Books", packageWeight: "5kg", numberOfPackages: "3", paymentMode: "Credit Card", status: "Delivered", action: "Delivered" }
  ];

  return (
    <div className="full-width-table-container scrollable-table"> {/* Added scrollable table class */}
      <table className="full-width-table table-bordered table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Pickup Location</th>
            <th>Drop-off Location</th>
            <th>Delivery Date & Time</th>
            <th>Receiver Name</th>
            <th>Receiver Mo Number</th>
            <th>Package Type</th>
            <th>Package Weight</th>
            <th>Number of Packages</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td><img src={order.profile} alt="Profile" width="30" height="30" /></td>
              <td>{order.orderId}</td>
              <td>{order.orderDate}</td>
              <td>{order.pickupLocation}</td>
              <td>{order.dropoffLocation}</td>
              <td>{order.deliveryDateTime}</td>
              <td>{order.receiverName}</td>
              <td>{order.receiverMoNumber}</td>
              <td>{order.packageType}</td>
              <td>{order.packageWeight}</td>
              <td>{order.numberOfPackages}</td>
              <td>{order.paymentMode}</td>

              {/* STATUS DROPDOWN */}
              <td>
                <div className="Table-dropdown">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => toggleDropdown(index)}
                  >
                    {order.status || "Select Status"}
                  </button>
                  {openDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => toggleDropdown(null)}>En Route</li>
                      <li onClick={() => toggleDropdown(null)}>Reached</li>
                      <li onClick={() => toggleDropdown(null)}>Delivered</li>
                      <li onClick={() => toggleDropdown(null)}>Failed</li>
                      <li onClick={() => toggleDropdown(null)}>Returned</li>
                    </ul>
                  )}
                </div>
              </td>

              {/* ACTION DROPDOWN */}
              <td>
                <div className="Table-dropdown">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => toggleActionDropdown(index)}
                  >
                    {order.action || "Select Action"}
                  </button>
                  {openActionDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => toggleActionDropdown(null)}>Live Navigation</li>
                      <li onClick={() => toggleActionDropdown(null)}>Call Receiver</li>
                      <li onClick={() => toggleActionDropdown(null)}>Delivered</li>
                      <li onClick={() => toggleActionDropdown(null)}>Reschedule</li>
                      <li onClick={() => toggleActionDropdown(null)}>Report Issue</li>
                      <li onClick={() => toggleActionDropdown(null)}>Cancel</li>
                    </ul>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const Footer = () => (
  <footer className="p-3 bg-light text-center">
    <p>&copy; 2024 CorpSathi All rights reserved.</p>
  </footer>
);

const Delivery = () => (
  <div className="dashboard-container">
    <Header />
    <div className="dashboard-content d-flex">
      <Sidebar />
      <div className="main-content">
        <StatsCards />
        <OrderTable />

      </div>
    </div>
    <Footer />
  </div>
);

export default Delivery;