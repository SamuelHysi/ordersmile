import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuItemsDetails from './views/menu-item-details/menu-items-details';
import MenuCategories from './views/menu-categories/menu-categories';
import RestaurantLists from './views/restaurants-list/restaurants-list';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/restaurants/:restaurantId/categories/:categoryId" element={<MenuItemsDetails/>}>
          </Route>
          <Route path="/restaurants/:restaurantId/categories" element={<MenuCategories/>}>
          </Route>
          <Route path="/" element={<RestaurantLists />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
