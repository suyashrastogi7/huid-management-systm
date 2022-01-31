import React, { useState } from "react";
//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import BarcodeReader from "react-barcode-reader";

import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faIdCardAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sales = () => {
  const [huid, setHuid] = useState("");
  const [gold_rate, setGoldRate] = useState("");
  const [discount, setDiscount] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setCustomerPhone] = useState("");
  const [pan_number, setPanNumber] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [payment_amount, setPaymentAmount] = useState("");

  const payment_methods = [
    "Choose Item",
    "Cash",
    "Credit/Debit Card",
    "Net Banking",
    "UPI",
    "Bank Transfer",
  ];

  const handleGetRate = () => {
    //get cuttent gold rate rate
    setGoldRate("47456.55");
  };

  const handleAddSale = async () => {
    const data = {
      huid: huid,
      goldRate: gold_rate,
      discount: discount,
      CustomerFirstName: first_name,
      CustomerLastName: last_name,
      CustomerPhoneNumber: phone,
      CustomerPancard: pan_number,
      paymentAmount: payment_amount,
      paymentMethod: payment_method,
      date: new Date().toString(),
    };
    //delete Item from Inventory
    const res = await fetch("http://localhost:5000/delete-inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        huid: huid,
      }),
    });
    const resultDelete = await res.json();
    if (resultDelete.status) {
      const result = await fetch("http://localhost:5000/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await result.json();
      if (!response.CustomerPhoneNumber) {
        const res = await fetch("http://localhost:5000/customer/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            CustomerFirstName: first_name,
            CustomerLastName: last_name,
            CustomerPhoneNumber: phone,
            CustomerPancard: pan_number,
          }),
        });
        const result = await res.json();
        if (result.success) {
          alert("New Customer Added Successfully");
        }
      }
    }
    //send data to create invoice
    //send data to create payment

    //add this item top sold list
    const res1 = await fetch("http://localhost:5000/add-sold-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result1 = await res1.json();
    if (result1.status) {
      alert("Sale Added Successfull");
    } else {
      alert("Sale Failed");
    }
    //add Customer to Customers Database if does not exist

    //add to order Details
  };

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div className="column has-background-light">
          <div className="block">
            <div className="box">
              <h1 className="is-size-5 has-text-weight-bold">Add a Sale</h1>
              <div className="columns py-4">
                <div className="field column is-one-third">
                  <div className="is-normal">
                    <label className="label">Hallmark UID of Item Sold :</label>
                  </div>
                  <BarcodeReader
                    onError={(err) => console.log(err)}
                    onScan={(data) => setHuid(data)}
                  />
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Hallmark UID"
                          value={huid}
                          onChange={(e) => setHuid(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faIdCard} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field column is-one-third">
                  <div className="is-normal ">
                    <label className="label">Gold Rate :</label>
                  </div>
                  <div className="field-body columns">
                    <div className="field column">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Gold Rate"
                          value={gold_rate}
                          onChange={(e) => setGoldRate(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faRupeeSign} />
                        </span>
                      </p>
                    </div>
                    <div className="column">
                      <button
                        onClick={handleGetRate}
                        className="button is-link"
                      >
                        Get Current Rate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="field column is-one-third">
                  <div className="is-normal  ">
                    <label className="label">Discount % :</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Discount %"
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faPercentage} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="is-size-5 has-text-weight-bold">
                Add Customer Details
              </h1>
              <div className="columns py-4">
                <div className="field column">
                  <div className="is-normal">
                    <label className="label">First Name :</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="First Name"
                          value={first_name}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field column">
                  <div className="is-normal">
                    <label className="label">Last Name :</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Last Name"
                          value={last_name}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field column">
                  <div className="is-normal ">
                    <label className="label">Phone Number :</label>
                  </div>
                  <div className="field-body columns">
                    <div className="field column">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field column">
                  <div className="is-normal  ">
                    <label className="label">Pan Card :</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Pan Card"
                          value={pan_number}
                          onChange={(e) => setPanNumber(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faIdCardAlt} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="is-size-5 has-text-weight-bold">
                Add Payment Details
              </h1>
              <div className="columns py-4">
                <div className="field column is-one-third">
                  <div className="is-normal ">
                    <label className="label">Payment Amount :</label>
                  </div>
                  <div className="field-body columns">
                    <div className="field column">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Payment Amount"
                          value={payment_amount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faRupeeSign} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field column is-one-third">
                  <div className="is-normal">
                    <label className="label">Payment Method :</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="select">
                        <select
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          value={payment_method}
                        >
                          {payment_methods.map((item, i) => {
                            return (
                              <option value={item} key={i}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-flex is-flex-direction-column is-align-items-center">
                <div className="is-flex is-flex-direction-row is-align-items-center">
                  <button className="button is-success" onClick={handleAddSale}>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span>Save</span>
                  </button>
                  <button className="button is-danger mx-2">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
