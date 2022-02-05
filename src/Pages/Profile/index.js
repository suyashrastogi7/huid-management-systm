import React, { useState, useEffect } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import { getCompanyInfo } from "../../data.service";

const Profile = () => {
  const [data, setData] = useState({});
  const username = localStorage.getItem("username");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getCompanyInfo();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div
          className="column has-background-light"
          style={{ height: "85vh", overflowY: "scroll" }}
        >
          <div className="box is-flex is-justify-content-space-between">
            <div>
              <h1 className="is-capitalized is-size-3 has-text-weight-semibold">
                Welcome,{""}
                <strong className="is-family-sans-serif has-text-info">
                  {""} {username}
                </strong>
              </h1>
              <p className="is-size-5 has-text-grey">Your Profile</p>
              <div className="mt-4">
                <h1 className="is-family-sans-serif has-text-info is-size-4 has-text-weight-bold">
                  Address
                </h1>
                <p className="has-text-weight-bold is-family-monospace is-size-5">
                  {data.shop_name}
                </p>
                <p className="is-family-monospace is-size-5">
                  {data.street_name}, {data.area_name}
                </p>
                <p className="is-family-monospace is-size-5">
                  {data.city_name}, {data.state_name}
                </p>
              </div>
              <div className="mt-4">
                <h1 className="is-family-sans-serif has-text-info is-size-4 has-text-weight-bold">
                  Firm Information
                </h1>
                <p className="is-family-monospace is-size-5">
                  <strong>GSTIN : </strong>
                  {data.gst_number}
                </p>
                <p className="is-family-monospace is-size-5">
                  <strong>CIN Number : </strong>
                  {data.cin_number}
                </p>
                <p className="is-family-monospace is-size-5">
                  <strong>TIN Number : </strong>
                  {data.tin_number}
                </p>
              </div>
              <div className="my-4">
                <h1 className="is-family-sans-serif has-text-info is-size-4 has-text-weight-bold">
                  Contact Information
                </h1>
                <p className="is-family-monospace is-size-5">
                  <strong>Email : </strong>
                  {data.email}
                </p>
                <p className="is-family-monospace is-size-5">
                  <strong>Phone : </strong>
                  {data.phone_number}
                </p>
                <p className="is-family-monospace is-size-5">
                  <strong>Landline : </strong>
                  {data.landline}
                </p>
              </div>
            </div>
            <div
              className="image is-outlined is-danger "
              style={{ width: "200px" }}
            >
              <img
                className="is-rounded is-clickable"
                src={data.logo}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
