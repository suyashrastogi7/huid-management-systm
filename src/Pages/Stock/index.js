import React, { useState } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import data from "./staticData";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stock = () => {
  const [jewelleryType, setJewelleryType] = useState("-");
  const [productType, setproductType] = useState("-");
  const [gender, setGender] = useState("-");
  const [metalColor, setMetalColor] = useState("-");
  const [Purity, setPurity] = useState("-");
  const [BanglesSize, setBanglesSize] = useState("-");
  const [BraceletSize, setBraceletSize] = useState("-");
  const [chainSize, setchainSize] = useState("-");
  const [RingSize, setRingSize] = useState("-");
  const [Metal, setMetal] = useState("-");
  const [CommunityType, setCommunityType] = useState("-");
  const [coinWeight, setcoinWeight] = useState("-");
  const [MangalsutraSize, setMangalsutraSize] = useState("-");
  const [pendantHeight, setpendantHeight] = useState("-");
  const [pendantWidth, setpendantWidth] = useState("-");
  const [earringHeight, setearringHeight] = useState("-");
  const [earringWidth, setearringWidth] = useState("-");
  const [huid, setHuid] = useState("");
  const [goldWeight, setGoldWeight] = useState("");
  const [SilverWeight, setSilverWeight] = useState("");
  const [platinumWeight, setPlatinumWeight] = useState("");

  const handleReset = () => {
    setJewelleryType("-");
    setproductType("-");
    setGender("-");
    setMetalColor("-");
    setPurity("-");
    setBanglesSize("-");
    setBraceletSize("-");
    setchainSize("-");
    setRingSize("-");
    setMetal("-");
    setCommunityType("-");
    setcoinWeight("-");
    setMangalsutraSize("-");
    setpendantHeight("-");
    setpendantWidth("-");
    setearringHeight("-");
    setearringWidth("-");
    setHuid("");
    setGoldWeight("");
    setSilverWeight("");
    setPlatinumWeight("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _id: huid,
      huid: huid,
      jewelleryType: jewelleryType,
      productType: productType,
      gender: gender,
      metalColor: metalColor,
      Purity: Purity,
      BanglesSize: BanglesSize,
      BraceletSize: BraceletSize,
      chainSize: chainSize,
      RingSize: RingSize,
      Metal: Metal,
      CommunityType: CommunityType,
      coinWeight: coinWeight,
      MangalsutraSize: MangalsutraSize,
      pendantHeight: pendantHeight,
      pendantWidth: pendantWidth,
      earringHeight: earringHeight,
      earringWidth: earringWidth,
      goldWeight: goldWeight,
      silverWeight: SilverWeight,
      platinumWeight: platinumWeight,
    };
    try {
      await fetch("http://localhost:5000/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      handleReset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div
          className="column has-background-light"
          style={{ height: "85vh", overflowY: "scroll" }}
        >
          <div className="hero p-5">
            <div className="box p-3">
              <h1 className="is-size-5 has-text-weight-bold">Add a stock</h1>
              <form onSubmit={handleSubmit}>
                <div className="field column is-one-third">
                  <div className="is-normal my-3 ">
                    <label className="label">Hallmark UID :</label>
                  </div>
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
                <div className="columns is-multiline">
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Jewellery Type :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setJewelleryType(e.target.value)}
                        value={jewelleryType}
                      >
                        {data.jewellery_type.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Product Type :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setproductType(e.target.value)}
                        value={productType}
                      >
                        {data.product_type.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Gender :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                      >
                        {data.Gender.map((item, i) => {
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
                <div className="is-flex is-flex-direction-row mb-4">
                  <div className="">
                    <div className="is-normal my-3">
                      <label className="label">Metal Color :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setMetalColor(e.target.value)}
                        value={metalColor}
                      >
                        {data.Metal_color.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="mx-4">
                    <div className="is-normal my-3">
                      <label className="label">Purity :</label>
                    </div>
                    <div className="select">
                      <select
                        className=""
                        onChange={(e) => setPurity(e.target.value)}
                        value={Purity}
                      >
                        {data.purity.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item} (carat)
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="columns is-multiline">
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Metal :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setMetal(e.target.value)}
                        value={Metal}
                      >
                        {data.metal.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Community Type :</label>
                    </div>
                    <div className="select">
                      <select
                        onChange={(e) => setCommunityType(e.target.value)}
                        value={CommunityType}
                      >
                        {data.community_type.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Bangles Size :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Bangle"}
                        onChange={(e) => setBanglesSize(e.target.value)}
                        value={BanglesSize}
                      >
                        {data.bangles_size.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Bracelet Size :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Bracelet"}
                        onChange={(e) => setBraceletSize(e.target.value)}
                        value={BraceletSize}
                      >
                        {data.bracelet_size.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Chain Size :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Chain"}
                        onChange={(e) => setchainSize(e.target.value)}
                        value={chainSize}
                      >
                        {data.chain_size.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Ring Size :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Finger Rings"}
                        onChange={(e) => setRingSize(e.target.value)}
                        value={RingSize}
                      >
                        {data.ring_size.map((item, i) => {
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
                <div className="columns">
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Coin Weight :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Gold Coin"}
                        onChange={(e) => setcoinWeight(e.target.value)}
                        value={coinWeight}
                      >
                        {data.coin_weight.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Mangalsutra Size :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={
                          productType !== "Mangalsutra" &&
                          productType !== "Mangalsutra Set"
                        }
                        onChange={(e) => setMangalsutraSize(e.target.value)}
                        value={MangalsutraSize}
                      >
                        {data.mangalsutra_size.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Pendant Height :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Pendant"}
                        onChange={(e) => setpendantHeight(e.target.value)}
                        value={pendantHeight}
                      >
                        {data.pendant_height.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Pendant Width :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Pendant"}
                        onChange={(e) => setpendantWidth(e.target.value)}
                        value={pendantWidth}
                      >
                        {data.pendant_width.map((item, i) => {
                          return (
                            <option value={item} key={i}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Earring Height :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Earrings"}
                        onChange={(e) => setearringHeight(e.target.value)}
                        value={earringHeight}
                      >
                        {data.earring_height.map((item, i) => {
                          return <option key={i}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="column">
                    <div className="is-normal my-3">
                      <label className="label">Earring Width :</label>
                    </div>
                    <div className="select">
                      <select
                        disabled={productType !== "Earrings"}
                        onChange={(e) => setearringWidth(e.target.value)}
                        value={earringWidth}
                      >
                        {data.earring_width.map((item, i) => {
                          return <option key={i}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="column is-two-thirds">
                  <h1 className="is-size-5 has-text-weight-bold my-4">
                    Add Details
                  </h1>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Gold Weight : </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            disabled={Metal !== "Gold"}
                            type="text"
                            placeholder="Gold Weight"
                            value={goldWeight}
                            onChange={(e) => setGoldWeight(e.target.value)}
                          />
                        </p>
                      </div>
                      <div className="select">
                        <select>
                          {data.units.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Silver Weight : </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            disabled={Metal !== "Silver"}
                            type="text"
                            placeholder="Silver Weight"
                            value={SilverWeight}
                            onChange={(e) => setSilverWeight(e.target.value)}
                          />
                        </p>
                      </div>
                      <div className="select">
                        <select>
                          {data.units.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Platinum Wt : </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            disabled={Metal !== "Platinum"}
                            type="text"
                            placeholder="Platinum Weight"
                            value={platinumWeight}
                            onChange={(e) => setPlatinumWeight(e.target.value)}
                          />
                        </p>
                      </div>
                      <div className="select">
                        <select>
                          {data.units.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
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
                        onClick={handleReset}
                      >
                        Cancel
                      </button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
