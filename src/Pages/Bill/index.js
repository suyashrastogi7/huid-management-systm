import React from "react";

//Components
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Biller from "../../Components/Biller";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Bill = () => {
  return (
    <div>
      <Header />
      <div className="is-flex">
        <Navbar />
        <div className="column has-background-light">
          <div className="block">
            <div className="box py-5">
              <h1 className="is-size-5 has-text-weight-bold">All Bills</h1>
              <PDFDownloadLink document={<Biller />} fileName="invoice.pdf">
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download now!"
                }
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
