import React, { useState, useEffect } from 'react';
import './menu-categories.css';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getCategories } from '../../controllers/restaurantService';
import { useLocation } from 'react-router-dom';
import { MenuCategoryType } from '../../models/MenuCategoryType';

const MenuCategories = () => {
  const location = useLocation();
  const { id } = location.state;
  const [categories, setCategories] = useState<MenuCategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType | undefined>(undefined);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories(id);
      setCategories(data);
      setSelectedCategory(data[0]);
    };
    fetchCategories();
  }, [id]);

  const handleCategoryClick = (category: MenuCategoryType) => {
    setSelectedCategory(category);
  };

  const getMenuItems = () => {
    return selectedCategory?.items || [];
  };

  return (
    <div className="menu-container">
      <Link to="/" className="back-button">
        <ChevronLeftIcon fontSize="medium" /> Back
      </Link>
      <div className="container">
        <ul className="menu-categories">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`menu-category ${category.id === selectedCategory?.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <div className="menu-items-container">
            <h2 className="menu-category-title">{selectedCategory.name}</h2>
            <table className="menu-items">
              <thead>
                <tr>
                  <th className="item-title">Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {getMenuItems().map((item) => (
                  <tr key={item.id}>
                    <td className="foods">{item.name}</td>
                    <td>{`$${item.price}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCategories;
