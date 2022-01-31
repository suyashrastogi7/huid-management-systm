import React, { useState, useEffect } from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Biller from "../../Components/Biller";

const OrderDetails = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/getOrderDetails", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await res.json();
      setDetail(response);
    };
    getData();
  }, []);
  console.log(detail);

  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div className="column has-background-light">
          <div className="block">
            <div className="box">
              <h1 className="is-size-4 mb-5 has-text-weight-bold">Orders</h1>
              <div className="is-flex is-flex-direction-column">
                {detail.map((item, i) => {
                  const date = item.date.substring(0, 10);
                  const dateFormat = date.split("-").reverse().join("-");
                  return (
                    <div
                      key={i}
                      className="is-flex is-flex-direction-row block is-justify-content-space-between"
                    >
                      <div className="is-flex">
                        <span>{i + 1}</span>
                        <p className="mx-5 has-text-weight-bold">{item.huid}</p>
                        <p className="mx-5">{dateFormat}</p>
                      </div>
                      <div>
                        <button className="button is-info is-inverted mx-5 text-light">
                          <PDFDownloadLink
                            document={<Biller item={item} i={i} />}
                            fileName="invoice.pdf"
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? "Loading..." : "Invoice"
                            }
                          </PDFDownloadLink>
                        </button>
                        <button className="button is-danger">Delete</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
