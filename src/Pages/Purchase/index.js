import React, { useState } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";

import Gold from "./Gold";
import Silver from "./Silver";
import Diamond from "./Diamond";

import data from "./staticData";

const Purchase = () => {
  const [purchase_type, setPurchaseType] = useState("");

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div className="column has-background-light">
          <div className="box">
            <h1 className="is-size-5 has-text-weight-bold">Add a Purchase</h1>
            <div className="py-3">
              <div className="field column is-one-third">
                <div className="is-normal">
                  <label className="label mb-2">Purchase Type :</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="select">
                      <select
                        onChange={(e) => setPurchaseType(e.target.value)}
                        value={purchase_type}
                      >
                        {data.purchase.map((item, i) => {
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
              {purchase_type === "Gold" ? (
                <Gold purchase_type={purchase_type} />
              ) : (
                <div></div>
              )}
              {purchase_type === "Silver" ? (
                <Silver purchase_type={purchase_type} />
              ) : (
                <div></div>
              )}
              {purchase_type === "Diamond" ? (
                <Diamond purchase_type={purchase_type} />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
