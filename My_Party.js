import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css';

import * as XLSX from "xlsx"; // For Excel import/export
import { saveAs } from "file-saver"; // For file download
import { Document, Packer, Paragraph, TextRun } from "docx"; // For Word export
import { jsPDF } from "jspdf"; // For PDF export

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
      {["Party", "My Party", "Client", "Supplier"].map((item, index) => (
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
    {["Total Clients", "Total Receivable (Get)", "Total Suppliers", "Total Payable (Give)"].map((label, index) => {
      let value = 1000;
      let change = "↑ 15%";
      let changeClass = "increase";
      let icon = "👥";

      // Modify details for the second card (Customers Acquired)
      if (index === 1) {
        value = 800;
        change = "↓ 5%";
        changeClass = "decrease";
        icon = "📥";
      }
      if (index === 2) {
        value = 800;
        change = "↑ 25%";
        changeClass = "increase";
        icon = "🏭";
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openActionDropdown, setOpenActionDropdown] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPartyType, setFilterPartyType] = useState(""); // Updated state for party type filter
  const [searchBy, setSearchBy] = useState("partyId"); // Default search by Party ID
  const [partiesData, setPartiesData] = useState([
    {
      partyId: "PTY101",
      partyType: "Supplier",
      partyName: "ABC Traders",
      gstin: "22AAAAA0000A1Z5",
      authorizedPerson: "John Doe",
      email: "john.doe@example.com",
      phone: "9876543210",
      alternateNumber: "9876543211",
      address: "123 Main Street, City A",
      stateCode: "KA",
      outstandingBalance: "₹15,000",
      notes: "Preferred vendor",
      status: "Active",
      action: "Edit",
    },
    {
      partyId: "PTY102",
      partyType: "Customer",
      partyName: "XYZ Corp",
      gstin: "33BBBBB0000B1Z6",
      authorizedPerson: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "9123456789",
      alternateNumber: "9123456790",
      address: "456 Elm Street, City B",
      stateCode: "TN",
      outstandingBalance: "₹30,000",
      notes: "Delayed payments",
      status: "Inactive",
      action: "View",
    },
    {
      partyId: "PTY103",
      partyType: "Retailer",
      partyName: "PQR Mart",
      gstin: "44CCCCC0000C1Z7",
      authorizedPerson: "Bob Johnson",
      email: "bob.j@example.com",
      phone: "9988776655",
      alternateNumber: "9988776644",
      address: "789 Oak Avenue, City C",
      stateCode: "MH",
      outstandingBalance: "₹5,000",
      notes: "Frequent orders",
      status: "Active",
      action: "Delete",
    },
  ]);

  const [showExportPopup, setShowExportPopup] = useState(false); // State for export popup visibility

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleActionDropdown = (index) => {
    setOpenActionDropdown(openActionDropdown === index ? null : index);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : partiesData.map((_, i) => i));
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

  const handleFilterPartyType = (e) => {
    setFilterPartyType(e.target.value); // Updated handler for party type filter
  };

  const handleSearchBy = (e) => {
    setSearchBy(e.target.value);
  };

  const filteredParties = partiesData.filter((party) => {
    const searchValue = party[searchBy] ? party[searchBy].toString().toLowerCase() : "";
    const matchesSearchQuery = searchValue.includes(searchQuery.toLowerCase());

    const partyTypeValue = party.partyType ? party.partyType.toLowerCase() : "";
    const matchesFilterPartyType = filterPartyType
      ? partyTypeValue.includes(filterPartyType.toLowerCase())
      : true;

    return matchesSearchQuery && matchesFilterPartyType;
  });

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      // Ensure all required fields have default values
      const formattedData = json.map((row) => ({
        partyId: row.partyId || "",
        partyType: row.partyType || "",
        partyName: row.partyName || "",
        gstin: row.gstin || "",
        authorizedPerson: row.authorizedPerson || "",
        email: row.email || "",
        phone: row.phone || "",
        alternateNumber: row.alternateNumber || "",
        address: row.address || "",
        stateCode: row.stateCode || "",
        outstandingBalance: row.outstandingBalance || "",
        notes: row.notes || "",
        status: row.status || "",
        action: row.action || "",
      }));

      // Update the state with the imported data
      setPartiesData(formattedData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExport = (format) => {
    setShowExportPopup(false); // Close the popup after selecting an option
    switch (format) {
      case "excel":
        const worksheet = XLSX.utils.json_to_sheet(filteredParties);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Parties");
        XLSX.writeFile(workbook, "parties.xlsx");
        break;

      case "pdf":
        const doc = new jsPDF();
        doc.text("Parties Data", 10, 10);
        filteredParties.forEach((party, index) => {
          const y = 20 + index * 10;
          doc.text(
            `${party.partyId}, ${party.partyName}, ${party.gstin}, ${party.authorizedPerson}, ${party.email}, ${party.phone}, ${party.address}, ${party.stateCode}, ${party.outstandingBalance}, ${party.notes}, ${party.status}`,
            10,
            y
          );
        });
        doc.save("parties.pdf");
        break;

      case "word":
        const docxContent = filteredParties.map(
          (party) =>
            new Paragraph({
              children: [
                new TextRun({
                  text: `Party ID: ${party.partyId}, Party Name: ${party.partyName}, GSTIN: ${party.gstin}, Authorized Person: ${party.authorizedPerson}, Email: ${party.email}, Phone: ${party.phone}, Address: ${party.address}, State Code: ${party.stateCode}, Outstanding Balance: ${party.outstandingBalance}, Notes: ${party.notes}, Status: ${party.status}`,
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
          saveAs(blob, "parties.docx");
        });
        break;

      default:
        break;
    }
  };


  
  return (
    <div className="full-width-table-container scrollable-table">
      {/* Controls Container */}
      <div className="controls-container">
        {/* Search By Dropdown */}
        <div className="search-by-dropdown">
          <select value={searchBy} onChange={handleSearchBy}>
            <option value="partyId">Party ID</option>
            <option value="partyName">Party Name</option>
            <option value="gstin">GSTIN/UIN</option>
            <option value="authorizedPerson">Authorized Person</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="address">Address</option>
            <option value="stateCode">State Code</option>
            <option value="outstandingBalance">Outstanding Balance</option>
            <option value="notes">Notes</option>
            <option value="status">Status</option>
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

        {/* Filter Dropdown for Party Type */}
        <div className="filter-dropdown">
          <select value={filterPartyType} onChange={handleFilterPartyType}>
            <option value="">All Party Types</option>
            <option value="Supplier">Supplier</option>
            <option value="Customer">Customer</option>
            <option value="Retailer">Retailer</option>
          </select>
        </div>

        {/* Export Button */}
        <div className="import-export-buttons">

        <label  className="btn btn-primary">
        Add New party
      </label>

        <label htmlFor="import-file" className="btn btn-primary">
        Import Data
        <input
          id="import-file"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleImport}
        />
      </label>
        
          <button
            className="btn btn-success"
            onClick={() => setShowExportPopup(true)} // Show export popup
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

      {/* Table */}
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
              Checkbox
            </th>
            <th>Party ID</th>
            <th>Party Type</th>
            <th>Party Name</th>
            <th>GSTIN/UIN</th>
            <th>Authorized Person’s Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Alternate Number</th>
            <th>Address</th>
            <th>State Code</th>
            <th>Outstanding Balance</th>
            <th>Additional Notes</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredParties.map((party, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleRowSelect(index)}
                />
              </td>
              <td>{party.partyId}</td>
              <td>{party.partyType}</td>
              <td>{party.partyName}</td>
              <td>{party.gstin}</td>
              <td>{party.authorizedPerson}</td>
              <td>{party.email}</td>
              <td>{party.phone}</td>
              <td>{party.alternateNumber}</td>
              <td>{party.address}</td>
              <td>{party.stateCode}</td>
              <td>{party.outstandingBalance}</td>
              <td>{party.notes}</td>

              {/* STATUS DROPDOWN */}
              <td>
                <div className="Table-dropdown">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => toggleDropdown(index)}
                  >
                    {party.status || "Select Status"}
                  </button>
                  {openDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => toggleDropdown(null)}>Active</li>
                      <li onClick={() => toggleDropdown(null)}>Inactive</li>
                      <li onClick={() => toggleDropdown(null)}>Pending</li>
                      <li onClick={() => toggleDropdown(null)}>Suspended</li>
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
                    {party.action || "Select Action"}
                  </button>
                  {openActionDropdown === index && (
                    <ul className="Table-dropdown-menu">
                      <li onClick={() => toggleActionDropdown(null)}>Edit</li>
                      <li onClick={() => toggleActionDropdown(null)}>View</li>
                      <li onClick={() => toggleActionDropdown(null)}>Delete</li>
                      <li onClick={() => toggleActionDropdown(null)}>Suspend</li>
                      <li onClick={() => toggleActionDropdown(null)}>Activate</li>
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