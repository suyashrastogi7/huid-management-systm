import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div
      className="column is-one-fifth"
      style={{ height: "85vh", overflowY: "scroll" }}
    >
      <aside className="menu">
        <p className="menu-label px-5">General</p>
        <ul className="menu-list">
          <li className="px-5 py-1">
            <a href="/">
              <FontAwesomeIcon
                className="mx-2"
                icon={faBorderAll}
                color="#38305f"
              />
              Dashboard
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/inventory">
              <FontAwesomeIcon className="mx-2" icon={faBox} color="#38305f" />
              Inventory
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/products">
              <FontAwesomeIcon
                className="mx-2"
                icon={faStore}
                color="#38305f"
              />
              Products
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/stock">
              <FontAwesomeIcon
                className="mx-2"
                icon={faCubes}
                color="#38305f"
              />
              Stock
            </a>
          </li>
        </ul>
        <p className="menu-label px-5">Administration</p>
        <ul className="menu-list">
          <li className="px-5 py-1">
            <a href="/purchase">
              <FontAwesomeIcon
                className="mx-2"
                icon={faShoppingBag}
                color="#38305f"
              />
              Purchase
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/suppliers">
              <FontAwesomeIcon
                className="mx-2"
                icon={faTruck}
                color="#38305f"
              />
              Supplier
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/raw-stock">
              <FontAwesomeIcon
                className="mx-2"
                icon={faReceipt}
                color="#38305f"
              />
              Raw Stock
            </a>
          </li>

          <li className="px-5 py-1">
            <a href="/sales">
              <FontAwesomeIcon
                className="mx-2"
                icon={faChartLine}
                color="#38305f"
              />
              Sales
            </a>
          </li>
        </ul>
        <p className="menu-label px-5">Transactions</p>
        <ul className="menu-list">
          <li className="px-5 py-1">
            <a href="/Order-details">
              <FontAwesomeIcon
                className="mx-2"
                icon={faShoppingCart}
                color="#38305f"
              />
              Order Details
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/reports">
              <FontAwesomeIcon
                className="mx-2"
                icon={faFileContract}
                color="#38305f"
              />
              Reports
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/customers">
              <FontAwesomeIcon
                className="mx-2"
                icon={faUsers}
                color="#38305f"
              />
              Customers
            </a>
          </li>
          <li className="px-5 py-1">
            <a href="/taxes">
              <FontAwesomeIcon className="mx-2" icon={faTags} color="#38305f" />
              Taxes
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
