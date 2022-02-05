import React, { useState, useEffect } from "react";
//Static Data
import data2 from "./staticData";
//Icons
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Functions
import { addDiamondPurchase, getSuppliers } from "../../data.service";

function Diamond() {
  const [stone_weight, setStoneWeight] = useState("");
  const [Color, setColor] = useState("");
  const [clarity, setClarity] = useState("");
  const [cut, setCut] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hallmark_id, setHallmarkId] = useState("");
  const [supplier, setSupplier] = useState("");
  const [data, setData] = useState([]);

  const handleSubmitDiamond = async () => {
    const data = {
      purchaseType: "Diamond",
      hallmarkId: hallmark_id,
      stoneWeight: stone_weight,
      cut: cut,
      clarity: clarity,
      color: Color,
      supplier: supplier,
    };
    const result = await addDiamondPurchase(data);
    if (result.success) {
      alert("Purchase Added Successfully.");
    }
  };
  const handleReset = () => {};
  useEffect(() => {
    async function getSupplier() {
      const result = await getSuppliers();
      setData(result);
    }
    getSupplier();
  }, []);

  return (
    <div className="is-multiline">
      <h1 className="is-size-5 has-text-weight-bold">Diamond Purchase</h1>
      <div className="columns p-3 is-multiline">
        <div className="field column is-one-quarter">
          <div className="is-normal ">
            <label className="label">Hallmark ID :</label>
          </div>
          <div className="field-body columns">
            <div className="field column ">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Hallmark ID"
                  value={hallmark_id}
                  onChange={(e) => setHallmarkId(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faPortrait} />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field column is-one-quarter">
          <div className="is-normal ">
            <label className="label">Stone Weight :</label>
          </div>
          <div className="field-body columns">
            <div className="field column">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Stone Weight"
                  value={stone_weight}
                  onChange={(e) => setStoneWeight(e.target.value)}
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
            <label className="label">Color :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="select">
                <select
                  onChange={(e) => setColor(e.target.value)}
                  value={Color}
                >
                  {data2.stone_color.map((item, i) => {
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
        <div className="field column">
          <div className="is-normal ">
            <label className="label">Cut :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="select">
                <select onChange={(e) => setCut(e.target.value)} value={cut}>
                  {data2.stone_cut.map((item, i) => {
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
        <div className="field column">
          <div className="is-normal ">
            <label className="label">Clarity :</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="select">
                <select
                  onChange={(e) => setClarity(e.target.value)}
                  value={clarity}
                >
                  {data2.stone_clarity.map((item, i) => {
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
                      <option value={item.name + ", " + item.firmName} key={i}>
                        {item.name},{item.firmName}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="field column ">
          <div className="is-normal ">
            <label className="label">Quantity :</label>
          </div>
          <div className="field-body columns">
            <div className="field column">
              <p className="control is-expanded has-icons-left">
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faGem} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSubmitDiamond} className="button is-success">
          Save changes
        </button>
        <button onClick={handleReset} className="button is-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Diamond;
