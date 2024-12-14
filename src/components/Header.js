// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBell, FaUserCircle } from "react-icons/fa"; // You can install react-icons or use your own icons

function Header() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logged out");
  };

  return (
    <div className="header">
      <div className="steps">
        <span className="step completed">01 Preliminary</span>
        <span className="step completed">02 Your Details</span>
        <span className="step completed">03 KYC</span>
        <span className="step active">04 Parties</span>
        <span className="step">05 Claim</span>
        <span className="step">06 Review</span>
        <span className="step">07 Payment</span>
      </div>

      <div className="header-icons">
        <div className="notification-icon">
          <FaBell size={20} />
        </div>
        <div className="user-icon" onClick={toggleUserMenu}>
          <FaUserCircle size={30} />
          {isUserMenuOpen && (
            <div className="user-menu">
              <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
