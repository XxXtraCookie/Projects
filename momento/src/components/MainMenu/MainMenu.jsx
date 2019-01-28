import React from "react";
import { Link } from "react-router-dom";
import "./mainMenu.scss";

class MainMenu extends React.Component {
  state = {
    menuItems: [
      { name: "home", href: "/", },
      { name: "soups", href: "/soups", },
      { name: "salads", href: "/salads", },
      { name: "alaminutes", href: "/alaminutes", },
      { name: "main dishes", href: "/main-dishes", },
      { name: "bbq", href: "/bbq", },
      { name: "deserts", href: "/deserts", },
      { name: "sauces", href: "/sauces", },
      { name: "drinks", href: "/drinks", },
    ]
  };

  render() {
    const menuItems = this.state.menuItems.map((item) => {
      return (
        <Link to={item.href} key={item.href}>
          <li key={item.name} className="menu-item">
            {item.name.toUpperCase()}
          </li>
        </Link>
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

export default MainMenu;
