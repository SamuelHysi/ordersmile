import React, { useState } from 'react';
import './menu-items-details.css';
import { Link } from "react-router-dom";

const menuCategories = [
  { id: 1, name: 'Burgers' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Sandwiches' },
  { id: 4, name: 'Salads' },
];

const MenuItemsDetails = () => {

  return (
    <div className="menu-container">
      {/* <Link to={`/restaurants/${restaurantId}/categories`}>Go Back to Menu</Link> */}
    </div>
  );
};

export default MenuItemsDetails;





