import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';

import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import { Document, Paragraph, Packer, TextRun } from 'docx';
import { saveAs } from 'file-saver';

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
      <strong className="me-auto">My Service</strong>
      <div id="welcome" className="ms-auto">
      <button style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#5CB85C',
            color: '#fff',
            cursor: 'pointer'
          }}>+Add New Service</button>
      </div>
    </div>
  </header>
);

const Sidebar = () => (
  <div className="left-header">
    <UserProfile />
    <div className="menu-container">
      {["Service", "My Service", "Service", "Pricing", "Add Cost", "Tax Setup", "Discount", "Benefits","Requirement", "Policy", "FAQs", "Category", "Sub Category", "Service Type"].map((item, index) => (
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
    {["Pending Approval", "Active Services", "Top Performing Service", "Avg Customer Ratings"].map((label, index) => {
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
  // State declarations
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openActionDropdown, setOpenActionDropdown] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterServiceType, setFilterServiceType] = useState("");
  const [searchBy, setSearchBy] = useState("serviceCode");
  const [showExportPopup, setShowExportPopup] = useState(false);

  // Services data
  const [servicesData, setServicesData] = useState([
    {
      checkbox: false,
      serviceImage: "cleaning.jpg",
      serviceVideo: "cleaning-demo.mp4",
      serviceCode: "SRV001",
      serviceName: "Premium Cleaning",
      serviceDescription: "Deep cleaning for residential spaces",
      serviceCategory: "Home Services",
      serviceSubcategory: "Cleaning",
      serviceType: "Recurring",
      deliveryMethod: "On-site",
      estimatedTime: "4 hours",
      status: "Active",
      action: "Edit"
    },
    {
      checkbox: false,
      serviceImage: "ac-repair.jpg",
      serviceVideo: "ac-repair-demo.mp4",
      serviceCode: "SRV002",
      serviceName: "AC Repair",
      serviceDescription: "Professional AC repair and maintenance",
      serviceCategory: "Home Services",
      serviceSubcategory: "Appliance Repair",
      serviceType: "One-time",
      deliveryMethod: "On-site",
      estimatedTime: "2 hours",
      status: "Active",
      action: "View"
    },
    {
      checkbox: false,
      serviceImage: "web-dev.jpg",
      serviceVideo: "web-dev-process.mp4",
      serviceCode: "SRV003",
      serviceName: "Website Development",
      serviceDescription: "Custom website development",
      serviceCategory: "Digital Services",
      serviceSubcategory: "Web Development",
      serviceType: "Project-based",
      deliveryMethod: "Remote",
      estimatedTime: "30 days",
      status: "Inactive",
      action: "Delete"
    }
  ]);

  // Handler functions (keep all the same functions as before)
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleActionDropdown = (index) => {
    setOpenActionDropdown(openActionDropdown === index ? null : index);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : servicesData.map((_, i) => i));
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterServiceType = (e) => {
    setFilterServiceType(e.target.value);
  };

  const handleSearchBy = (e) => {
    setSearchBy(e.target.value);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      const formattedData = json.map((row) => ({
        checkbox: row.checkbox || false,
        serviceImage: row.serviceImage || "",
        serviceVideo: row.serviceVideo || "",
        serviceCode: row.serviceCode || "",
        serviceName: row.serviceName || "",
        serviceDescription: row.serviceDescription || "",
        serviceCategory: row.serviceCategory || "",
        serviceSubcategory: row.serviceSubcategory || "",
        serviceType: row.serviceType || "",
        deliveryMethod: row.deliveryMethod || "",
        estimatedTime: row.estimatedTime || "",
        status: row.status || "Active",
        action: row.action || "Edit"
      }));

      setServicesData(formattedData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExport = (format) => {
    setShowExportPopup(false);
    switch (format) {
      case "excel":
        const worksheet = XLSX.utils.json_to_sheet(filteredServices);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Services");
        XLSX.writeFile(workbook, "services.xlsx");
        break;

      case "pdf":
        const doc = new jsPDF();
        doc.text("Services Data", 10, 10);
        filteredServices.forEach((service, index) => {
          const y = 20 + index * 10;
          doc.text(
            `${service.serviceCode}, ${service.serviceName}, ${service.serviceDescription}`,
            10,
            y
          );
        });
        doc.save("services.pdf");
        break;

      case "word":
        const docxContent = filteredServices.map(
          (service) =>
            new Paragraph({
              children: [
                new TextRun({
                  text: `Service Code: ${service.serviceCode}, Name: ${service.serviceName}`,
                }),
              ],
            })
        );
        const docx = new Document({
          sections: [
            {
              properties: {},
              children: docxContent,
            },
          ],
        });
        Packer.toBlob(docx).then((blob) => {
          saveAs(blob, "services.docx");
        });
        break;

      default:
        break;
    }
  };

  // Filter logic
  const filteredServices = servicesData.filter((service) => {
    const searchValue = service[searchBy] ? service[searchBy].toString().toLowerCase() : "";
    const matchesSearchQuery = searchValue.includes(searchQuery.toLowerCase());

    const serviceTypeValue = service.serviceType ? service.serviceType.toLowerCase() : "";
    const matchesFilterServiceType = filterServiceType
      ? serviceTypeValue.includes(filterServiceType.toLowerCase())
      : true;

    return matchesSearchQuery && matchesFilterServiceType;
  });

  return (
    <div className="full-width-table-container scrollable-table">
      {/* Controls Container */}
      <div className="controls-container">
        {/* Search By Dropdown */}
        <div className="search-by-dropdown">
          <select value={searchBy} onChange={handleSearchBy}>
            <option value="serviceCode">Service Code</option>
            <option value="serviceName">Service Name</option>
            <option value="serviceCategory">Service Category</option>
            <option value="serviceSubcategory">Service Subcategory</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Filter Dropdown for Service Type */}
        <div className="filter-dropdown">
          <select value={filterServiceType} onChange={handleFilterServiceType}>
            <option value="">All Service Types</option>
            <option value="One-time">One-time</option>
            <option value="Recurring">Recurring</option>
            <option value="Project-based">Project-based</option>
          </select>
        </div>

        {/* Import/Export Buttons */}
        <div className="import-export-buttons">
          <label className="btn btn-primary">
            Add New Service
          </label>

          <label htmlFor="import-file" className="btn btn-primary">
            Import Data
            <input
              id="import-file"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleImport}
              style={{ display: 'none' }}
            />
          </label>
        
          <button
            className="btn btn-success"
            onClick={() => setShowExportPopup(true)}
          >
            Export
          </button>
        </div>
      </div>

      {/* Export Popup */}
      {showExportPopup && (
        <div className="export-popup">
          <div className="export-popup-content">
            <h3>Choose Export Format</h3>
            <button onClick={() => handleExport("excel")}>Excel</button>
            <button onClick={() => handleExport("pdf")}>PDF</button>
            <button onClick={() => handleExport("word")}>Word</button>
            <button className="cancel" onClick={() => setShowExportPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Table with updated column order */}
      <table className="full-width-table table-bordered table-striped">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="selectAll"
                checked={selectAll}
                onChange={handleSelectAll}
              />{" "}
              Check Box
            </th>
            <th>Service Image</th>
            <th>Service Video</th>
            <th>Service Code/SKU</th>
            <th>Service Name</th>
            <th>Service Description</th>
            <th>Service Category</th>
            <th>Service Subcategory</th>
            <th>Service Type</th>
            <th>Delivery Method</th>
            <th>Estimated Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredServices.map((service, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleRowSelect(index)}
                />
              </td>
              <td>
                {service.serviceImage && (
                  <img 
                    src={service.serviceImage} 
                    alt={service.serviceName}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                )}
              </td>
              <td>
                {service.serviceVideo && (
                  <video controls width="100" height="60">
                    <source src={service.serviceVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </td>
              <td>{service.serviceCode}</td>
              <td>{service.serviceName}</td>
              <td>{service.serviceDescription}</td>
              <td>{service.serviceCategory}</td>
              <td>{service.serviceSubcategory}</td>
              <td>{service.serviceType}</td>
              <td>{service.deliveryMethod}</td>
              <td>{service.estimatedTime}</td>
              
              {/* Status Dropdown */}
              <td>
                <div className="Table-dropdown">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => toggleDropdown(index)}
                  >
                    {service.status || "Select Status"}
                  </button>
                  {openDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].status = "Active";
                        setServicesData(updatedData);
                        toggleDropdown(null);
                      }}>Active</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].status = "Inactive";
                        setServicesData(updatedData);
                        toggleDropdown(null);
                      }}>Inactive</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].status = "Pending";
                        setServicesData(updatedData);
                        toggleDropdown(null);
                      }}>Pending</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].status = "Suspended";
                        setServicesData(updatedData);
                        toggleDropdown(null);
                      }}>Suspended</li>
                    </ul>
                  )}
                </div>
              </td>
              
              {/* Action Dropdown */}
              <td>
                <div className="Table-dropdown">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => toggleActionDropdown(index)}
                  >
                    {service.action || "Select Action"}
                  </button>
                  {openActionDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].action = "Edit";
                        setServicesData(updatedData);
                        toggleActionDropdown(null);
                        // Add your edit logic here
                      }}>Edit</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].action = "View";
                        setServicesData(updatedData);
                        toggleActionDropdown(null);
                        // Add your view logic here
                      }}>View</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].action = "Delete";
                        setServicesData(updatedData);
                        toggleActionDropdown(null);
                        // Add your delete logic here
                      }}>Delete</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].action = "Suspend";
                        setServicesData(updatedData);
                        toggleActionDropdown(null);
                        // Add your suspend logic here
                      }}>Suspend</li>
                      <li onClick={() => {
                        const updatedData = [...servicesData];
                        updatedData[index].action = "Activate";
                        setServicesData(updatedData);
                        toggleActionDropdown(null);
                        // Add your activate logic here
                      }}>Activate</li>
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