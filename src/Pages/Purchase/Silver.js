import React, { useState, useEffect } from "react";

import data2 from "./staticData";

import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Silver() {
  const [weight, setWeight] = useState("");
  const [refinery, setRefinery] = useState("");
  const [tolerance_level, setToleranceLevel] = useState("");
  const [fineness, setFineness] = useState("");
  const [certification, setCertification] = useState("");
  const [tax, setTax] = useState("");
  const [Purity, setPurity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [data, setData] = useState([]);
  const handleReset = () => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      purchaseType: "Silver",
      refinery: refinery,
      tolerance: tolerance_level,
      weight: weight,
      purity: Purity,
      fineness: fineness,
      certification: certification,
      tax: tax,
      supplier: supplier,
    };

    try {
      await fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/supplier", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1 className="is-size-5 has-text-weight-bold">Silver Purchase</h1>
        <div className="columns py-4">
          <div className="field column ">
            <div className="is-normal ">
              <label className="label">Silver Weight :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Silver Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faBalanceScale} />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field column">
            <div className="is-normal ">
              <label className="label">Refinery :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Refinery Name"
                    value={refinery}
                    onChange={(e) => setRefinery(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faLandmark} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field column">
            <div className="is-normal ">
              <label className="label">Tolerance level :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Tolerance level"
                    value={tolerance_level}
                    onChange={(e) => setToleranceLevel(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faRupeeSign} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field column">
            <div className="is-normal ">
              <label className="label">Purity :</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="select">
                  <select
                    onChange={(e) => setPurity(e.target.value)}
                    value={Purity}
                  >
                    {data2.purity.map((item, i) => {
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

        <div className="columns py-4">
          <div className="field column ">
            <div className="is-normal ">
              <label className="label">Fineness :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Fineness"
                    value={fineness}
                    onChange={(e) => setFineness(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faPercentage} />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field column">
            <div className="is-normal ">
              <label className="label">Certification :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Certification (HUID)"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faCertificate} />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="field column">
            <div className="is-normal ">
              <label className="label">Supplier :</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="select">
                  <select
                    onChange={(e) => setSupplier(e.target.value)}
                    value={supplier}
                  >
                    {data.map((item, i) => {
                      return (
                        <option
                          value={item.name + ", " + item.firmName}
                          key={i}
                        >
                          {item.name},{item.firmName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field column">
            <div className="is-normal ">
              <label className="label">Tax :</label>
            </div>
            <div className="field-body columns">
              <div className="field column">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    required
                    type="text"
                    placeholder="Tax"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={faReceipt} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className="button is-success">
            Save changes
          </button>
          <button onClick={handleReset} className="button is-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Silver;
