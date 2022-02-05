import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Functions
import { getInventory } from "../../data.service";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  let history = useHistory();

  useEffect(() => {
    const getInventoryData = async () => {
      const result = await getInventory();
      setData(result);
    };
    getInventoryData();
  }, []);

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div
          className="column has-background-light"
          style={{ height: "85vh", overflowY: "scroll" }}
        >
          <div className=" has-background-white is-flex columns is-multiline is-mobile is-justify-content-space-between">
            <div className="column is-centered is-one-quarter has-text-justified">
              <h1 className="is-size-5 has-text-weight-semibold ">INVENTORY</h1>
            </div>
            <div className="column has-text-right">
              <div className={`dropdown  ${isActive ? "is-active" : ""}`}>
                <div className="dropdown-trigger">
                  <button
                    className="button is-rounded"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    onClick={() => setIsActive(!isActive)}
                  >
                    <span>Export</span>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </button>
                </div>
                <div
                  className="dropdown-menu has-text-left"
                  id="dropdown-menu"
                  role="menu"
                >
                  <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                      to Excel (.xsl)
                    </a>
                    <a className="dropdown-item">to CSV (.csv)</a>
                    <a href="#" className="dropdown-item">
                      to JSON (.json)
                    </a>
                  </div>
                </div>
              </div>
              <button
                onClick={() => history.push("/stock")}
                className="button is-success is-rounded mx-4"
              >
                <FontAwesomeIcon className="mx-2" icon={faPlus} />
                Add Item
              </button>
            </div>
          </div>
          <div className="hero has-background-white">
            <table className="table is-bordered is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>HUID</th>
                  <th>Jewellery Type</th>
                  <th>Product Type</th>
                  <th>Gender</th>
                  <th>Metal</th>
                  <th>Metal Color</th>
                  <th>Purity</th>
                  <th>Community Type</th>
                  <th>Bangles Size</th>
                  <th>Bracelet Size</th>
                  <th>Chain Size</th>
                  <th>Ring Size</th>
                  <th>Coin Weight</th>
                  <th>Mangalsutra Size</th>
                  <th>Pendant Height</th>
                  <th>Pendant Width</th>
                  <th>Earrings Height</th>
                  <th>Earrings Width</th>
                  <th>Gold Weight</th>
                  <th>Silver Weight</th>
                  <th>Platinum Weight</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td className="is-uppercase has-text-weight-semibold">
                        {item.huid}
                      </td>
                      <td>{item.jewelleryType}</td>
                      <td>{item.productType}</td>
                      <td>{item.gender}</td>
                      <td>{item.Metal}</td>
                      <td>{item.metalColor}</td>
                      <td>{item.Purity}</td>
                      <td>{item.CommunityType}</td>
                      <td>{item.BanglesSize}</td>
                      <td>{item.BraceletSize}</td>
                      <td>{item.chainSize}</td>
                      <td>{item.RingSize}</td>
                      <td>{item.coinWeight}</td>
                      <td>{item.MangalsutraSize}</td>
                      <td>{item.pendantHeight}</td>
                      <td>{item.pendantWidth}</td>
                      <td>{item.earringHeight}</td>
                      <td>{item.earringWidth}</td>
                      <td>{item.goldWeight}</td>
                      <td>{item.silverWeight}</td>
                      <td>{item.platinumWeight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
