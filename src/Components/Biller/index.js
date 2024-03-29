import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  document: {
    width: "100%",
  },
  page: {
    width: "100%",
  },
  topBorder: {
    width: "100%",
    height: "20px",
    display: "block",
    backgroundColor: "#112e59",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    width: "100%",
    height: "95vh",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customer_details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "20px",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
  },
  company_name: {
    fontSize: "20px",
    fontWeight: "700",
  },
  invoice: {
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
  },
  bill_details: {
    fontSize: "12px",
    color: "white",
    backgroundColor: "#112e59",
    fontWeight: "700",
    marginVertical: "10px",
    textAlign: "center",
    padding: "5px 5px",
  },
  bill_headings: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "10px",
    color: "white",
    textAlign: "left",
    padding: "5px 5px",
    backgroundColor: "#112e59",
  },
  bill_content: {
    fontSize: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "10px",
    textAlign: "left",
    padding: "5px 5px",
  },
  table: {
    borderBottom: "1px solid black",
  },
  cell: {
    border: "1px solid black",
  },
  discount: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
    padding: "5px 5px",
  },
  percent: {
    marginRight: "40px",
  },
});

const Biller = ({ item, i }) => {
  const calendar = item.date.substring(0, 10);
  const dateFormat = calendar.split("-").reverse().join("-");
  return (
    <Document is="custom" style={styles.document}>
      <Page is="custom" size="A4" style={styles.page}>
        <View is="custom" style={styles.topBorder}></View>
        <View is="custom" style={styles.main}>
          <View is="custom" style={styles.header}>
            <View is="custom">
              <Text is="custom" style={styles.company_name}>
                Patharia Jewellers
              </Text>
            </View>
            <View is="custom">
              <Text is="custom" style={{ fontSize: "30px", fontWeight: "500" }}>
                INVOICE
              </Text>
            </View>
          </View>
          <View is="custom" style={styles.details}>
            <View is="custom" style={styles.contact}>
              <Text is="custom">45/2, Jutte Wali Gali, Aminabad</Text>
              <Text is="custom">Lucknow, Uttar Pradesh</Text>
              <Text is="custom">+91 9415104923</Text>
              <Text is="custom">pathariajewellers@gmail.com</Text>
              <Text is="custom">www.pathariajewellers.com</Text>
            </View>
            <View is="custom" style={styles.invoice}>
              <Text is="custom">Date : {dateFormat} </Text>
              <Text is="custom">Time : {calendar.substring(11, 19)} </Text>
              <Text is="custom">Invoice Number : {i}</Text>
              <Text is="custom">Due Date : {calendar.substring(11, 19)} </Text>
            </View>
          </View>
          <View is="custom" style={styles.customer_details}>
            <View is="custom" style={styles.contact}>
              <Text is="custom" style={styles.bill_details}>
                BILL TO
              </Text>
              <Text is="custom">
                Name : {item.CustomerFirstName + " " + item.CustomerLastName}
              </Text>
              <Text is="custom">Phone : +91 {item.CustomerPhoneNumber}</Text>
              <Text is="custom">PAN : {item.CustomerPancard}</Text>
            </View>
            <View is="custom" style={styles.contact}>
              <Text is="custom" style={styles.bill_details}>
                SHIP TO
              </Text>
              <Text is="custom">
                Name : {item.CustomerFirstName + " " + item.CustomerLastName}
              </Text>
              <Text is="custom">Phone : +91 {item.CustomerPhoneNumber}</Text>
              <Text is="custom">PAN : {item.CustomerPancard}</Text>
            </View>
          </View>
          <View is="custom" style={styles.table}>
            <View is="custom" style={styles.bill_headings}>
              <Text is="custom">S.No.</Text>
              <Text is="custom">ITEMS</Text>
              <Text is="custom">Quantity</Text>
              <Text is="custom">Rate</Text>
              <Text is="custom">Amount</Text>
            </View>
            {item.huid.map((items, i) => {
              return (
                <View is="custom" key={i} style={styles.bill_content}>
                  <Text is="custom">{i + 1}</Text>
                  <Text is="custom">{items}</Text>
                  <Text is="custom">1</Text>
                  <Text is="custom">{item.goldRate}</Text>
                  <Text is="custom">Amount</Text>
                </View>
              );
            })}
          </View>
          <View is="custom" style={styles.discount}>
            <Text>Discount : </Text>
            <Text style={styles.percent}>{item.discount}%</Text>
          </View>
          <View is="custom" style={styles.discount}>
            <Text>CGST : </Text>
            <Text style={styles.percent}>5%</Text>
          </View>
          <View is="custom" style={styles.discount}>
            <Text>SGST : </Text>
            <Text style={styles.percent}>5%</Text>
          </View>
          <View is="custom" style={styles.discount}>
            <Text>Labour : </Text>
            <Text style={styles.percent}>3%</Text>
          </View>
          <View is="custom" style={styles.discount}>
            <Text>Total Amount : </Text>
            <Text style={styles.percent}>Rs. {item.paymentAmount}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "0",
              textAlign: "center",
              fontSize: "10px",
              borderTop: "1px solid black",
            }}
          >
            <Text style={{ width: "100%", textAlign: "center" }}>
              Thankyou for shopping, Patharia Jewellers
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#112e59", height: "20px" }}></View>
      </Page>
    </Document>
  );
};
export default Biller;
