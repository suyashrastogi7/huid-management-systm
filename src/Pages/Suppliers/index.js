import React, { useState, useEffect } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
//Icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
//Functions
import { addSupplier, getSuppliers } from "../../data.service";

const Suppliers = () => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [firmName, setFirmName] = useState("");
  const [itemSupplied, setItemSupplied] = useState("");
  const [email, setEmail] = useState("");
  const [pancard, setPancard] = useState("");
  const [gstNumber, setGstNumber] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await getSuppliers();
      setData(result);
    };
    getData();
  }, []);

  const addElement = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      firmName: firmName,
      phone: phone,
      address: address,
      gstNumber: gstNumber,
      email: email,
      pancard: pancard,
      itemSupplied: itemSupplied,
    };
    const result = await addSupplier(data);
    if (result.success) {
      alert("Supplier Added Successfully");
    } else {
      alert("Error Occured");
    }
    setShow(false);
  };

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
              <h1 className="is-size-5 has-text-weight-semibold ">SUPPLIERS</h1>
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
                onClick={() => setShow(true)}
                className="button is-success is-rounded mx-4"
              >
                <FontAwesomeIcon className="mx-2" icon={faPlus} />
                Add Item
              </button>
            </div>
          </div>
          <div className="hero has-background-white">
            {show ? (
              <div className="has-background-white box">
                <h1 className="is-size-5 has-text-weight-semibold">
                  Add Supplier
                </h1>
                <form onSubmit={addElement}>
                  <div className="columns is-multiline">
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Name : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Full Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">GST Number : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="GST Number"
                              value={gstNumber}
                              onChange={(e) => setGstNumber(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Firm Name : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Firm Name"
                              value={firmName}
                              onChange={(e) => setFirmName(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Phone : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Phone Number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Email : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Pan Card : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Pancard"
                              value={pancard}
                              onChange={(e) => setPancard(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field column is-one-quarter">
                      <div className="is-normal my-3 ">
                        <label className="label">Address : </label>
                      </div>
                      <div className="field-body ">
                        <div className="field ">
                          <p className="control is-expanded has-icons-left">
                            <input
                              className="input"
                              required
                              type="text"
                              placeholder="Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                              <FontAwesomeIcon icon={faIdCard} />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="is-normal my-3">
                        <label className="label">Item Supplied :</label>
                      </div>
                      <div className="select">
                        <select
                          onChange={(e) => setItemSupplied(e.target.value)}
                          value={itemSupplied}
                        >
                          {["Select Item", "Gold", "Silver", "Platinum"].map(
                            (item, i) => {
                              return (
                                <option value={item} key={i}>
                                  {item}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="is-flex is-align-items-center is-flex-direction-column">
                    <div className="field is-grouped my-5 ">
                      <p className="control">
                        <button className="button is-success" type="submit">
                          Save changes
                        </button>
                      </p>
                      <p className="control">
                        <button
                          className="button is-danger"
                          onClick={() => setShow(false)}
                        >
                          Cancel
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div></div>
            )}
            <table class="table is-bordered is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>GST Number</th>
                  <th>Firm Name</th>
                  <th>Material Supplied</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Pan Card</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td className="is-uppercase has-text-weight-semibold">
                        {item.name}
                      </td>
                      <td className="is-uppercase">{item.gstNumber}</td>
                      <td>{item.firmName}</td>
                      <td>{item.itemSupplied}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td className="is-uppercase">{item.pancard}</td>
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

export default Suppliers;
