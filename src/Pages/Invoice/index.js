import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invoice = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  let history = useHistory();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5000/getrawstockGold", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const response = await res.json();
        setData(response);
      } catch (err) {
        console.log(err);
      }
    };
    const getData2 = async () => {
      try {
        const res = await fetch("http://localhost:5000/getrawstockDiamond", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const response = await res.json();
        setData2(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    getData2();
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div
          class="column has-background-light"
          style={{ height: "85vh", overflowY: "scroll" }}
        >
          <div className=" has-background-white is-flex columns is-multiline is-mobile is-justify-content-space-between">
            <div className="column is-centered is-one-quarter has-text-justified">
              <h1 className="is-size-5 has-text-weight-semibold ">Raw Stock</h1>
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
                onClick={() => history.push("/purchase")}
                className="button is-success is-rounded mx-4"
              >
                <FontAwesomeIcon className="mx-2" icon={faPlus} />
                Add Item
              </button>
            </div>
          </div>
          <h1 className="has-text-weight-bold is-size-4">Gold/ Silver</h1>
          <table class="table is-bordered is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Index</th>
                <th>Purchase Type</th>
                <th>HUID</th>
                <th>Weight</th>
                <th>Refinery</th>
                <th>Tolerance</th>
                <th>Fineness</th>
                <th>Purity</th>
                <th>Supplier</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => {
                console.log(item);
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="is-uppercase has-text-weight-semibold">
                      {item.purchaseType}
                    </td>
                    <td className="is-uppercase">{item.certification}</td>
                    <td>{item.weight}</td>
                    <td>{item.refinery}</td>
                    <td>{item.tolerance}</td>
                    <td>{item.fineness}</td>
                    <td>{item.purity}</td>
                    <td className="is-uppercase">{item.supplier}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h1 className="has-text-weight-bold is-size-4">Diamond</h1>
          <table class="table is-bordered is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Index</th>
                <th>Purchase Type</th>
                <th>HUID</th>
                <th>Weight</th>
                <th>Cut</th>
                <th>Color</th>
                <th>Clarity</th>
                <th>Supplier</th>
              </tr>
            </thead>

            <tbody>
              {data2.map((item, i) => {
                console.log(item);
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="is-uppercase has-text-weight-semibold">
                      {item.purchaseType}
                    </td>
                    <td className="is-uppercase">{item.hallmarkId}</td>
                    <td>{item.stoneWeight}</td>
                    <td>{item.cut}</td>
                    <td>{item.color}</td>
                    <td>{item.clarity}</td>
                    <td>{item.supplier}</td>
                    <td className="is-uppercase">{item.pancard}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
