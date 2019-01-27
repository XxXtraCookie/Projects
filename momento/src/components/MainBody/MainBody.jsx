import React from 'react';
import { Link } from "react-router-dom";
import './mainBody.scss';

class MainBody extends React.Component {
  state = {
    menuItems: [
      'home',
      'soups',
      'salads',
      'alaminutes',
      'main dishes',
      'bbq',
      'deserts',
      'sauces',
      'drinks',
    ]
  };

  render() {
    const menuItems = this.state.menuItems.map((item) => {
      return (
        <li key={item} className="menu-item">{item.toUpperCase()}</li>
      );
    });

    return (
      <div className="main-body-wrapper">
        <div className="main-menu-wrapper">
          <ul className="main-menu">
            {menuItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainBody;
