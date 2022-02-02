import React, { useState } from "react";

import {
  faMap,
  faMonument,
  faUser,
  faUpload,
  faCheck,
  faTimes,
  faGlobe,
  faAt,
  faPhoneAlt,
  faMobile,
  faFile,
  faMoneyBill,
  faMapMarkerAlt,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyInfo = () => {
  const states = [
    "Choose Item",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [company_name, setCompanyName] = useState("");
  const [shop_name, setShopName] = useState("");
  const [street_name, setStreetName] = useState("");
  const [area_name, setAreaName] = useState("");
  const [city_name, setCityName] = useState("");
  const [gst_number, setGstNumber] = useState("");
  const [annual_turnover, setAnnualTurnover] = useState("");
  const [cin, setCin] = useState("");
  const [tin, setTin] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [landline, setLandline] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");

  const handleAddCompanyInfo = async () => {
    const details = {
      company_name: company_name,
      shop_name: shop_name,
      street_name: street_name,
      area_name: area_name,
      city_name: city_name,
      state_name: state,
      gst_number: gst_number,
      annual_turnover: annual_turnover,
      cin_number: cin,
      tin_number: tin,
      email: email,
      website: website,
      phone_number: phone_number,
      landline: landline,
      logo: image,
    };
    const res = await fetch("http://localhost:5000/companyinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const data = await res.json();
    if (data.success) {
      const put = await fetch("http://localhost:5000/first-login", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("user").username,
          first_login: false,
        }),
      });
      const putData = await put.json();

      alert("Company Info Added Successfully");
      localStorage.setItem("company_details", details);
      history.push("/");
    } else {
      alert("Try Again");
    }
  };

  const HandleImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setImage(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div>
      <section className="hero is-primary is-fullheight">
        <div className="p-5">
          <div className="box p-5">
            <h1 className="is-size-4 has-text-weight-bold">
              Add Your Firm Details
            </h1>
            <div className="columns">
              <div className="column">
                <div className="field column is-one-third">
                  <div className="is-normal">
                    <label className="label">Company Name</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Company Name"
                          value={company_name}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column">
                  <div className="is-normal">
                    <label className="label">Upload Logo</label>
                  </div>
                  <div className="file">
                    <label className="file-label">
                      <input
                        className="file-input"
                        onChange={(e) => HandleImage(e)}
                        type="file"
                        name="resume"
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <FontAwesomeIcon icon={faUpload} />
                        </span>
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="is-size-5 has-text-weight-semibold">Address : </h1>
            <div className="columns">
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Shop No./Shop Name</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Company Name"
                          value={shop_name}
                          onChange={(e) => setShopName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faMonument} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Street Name</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Company Name"
                          value={street_name}
                          onChange={(e) => setStreetName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faStreetView} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Area Name</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Company Name"
                          value={area_name}
                          onChange={(e) => setAreaName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">City</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Company Name"
                          value={city_name}
                          onChange={(e) => setCityName(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faMap} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">State</label>
                  </div>
                  <div className="select">
                    <select
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                    >
                      {states.map((item, i) => {
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

            <h1 className="is-size-5 has-text-weight-semibold">
              Tax Details :{" "}
            </h1>
            <div className="columns">
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">GST Number</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="GST Number"
                          value={gst_number}
                          onChange={(e) => setGstNumber(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faFile} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Annual Turnover</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Annual Turnover"
                          value={annual_turnover}
                          onChange={(e) => setAnnualTurnover(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faMoneyBill} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Registration Number (CIN)</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="CIN"
                          value={cin}
                          onChange={(e) => setCin(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faFile} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">TIN Number</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="TIN Number"
                          value={tin}
                          onChange={(e) => setTin(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faFile} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="is-size-5 has-text-weight-semibold">
              Contact Information :{" "}
            </h1>
            <div className="columns">
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Email Address</label>
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
                          <FontAwesomeIcon icon={faAt} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Website</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <div className="field has-addons">
                        <p class="control">
                          <a class="button is-static">https://</a>
                        </p>
                        <p className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            required
                            type="text"
                            placeholder="Website"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                          <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faGlobe} />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Phone Number</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Phone Number"
                          value={phone_number}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faMobile} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field column ">
                  <div className="is-normal">
                    <label className="label">Landline</label>
                  </div>
                  <div className="field-body ">
                    <div className="field ">
                      <p className="control is-expanded has-icons-left">
                        <input
                          className="input"
                          required
                          type="text"
                          placeholder="Landline"
                          value={landline}
                          onChange={(e) => setLandline(e.target.value)}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="is-flex is-flex-direction-column is-align-items-center">
              <div className="is-flex is-flex-direction-row is-align-items-center">
                <button
                  className="button is-success"
                  onClick={handleAddCompanyInfo}
                >
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
      </section>
    </div>
  );
};

export default CompanyInfo;
