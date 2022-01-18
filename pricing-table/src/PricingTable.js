import { useState } from "react";
import "./App.css";

export default function Pricing() {
  const pricingTable = [
    {
      mode: "free",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      projectsPublic: "Unlimited Public Projects",
      access: "Community Access",
      projectsPrivate: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      mode: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      projectsPublic: "Unlimited Public Projects",
      access: "Community Access",
      projectsPrivate: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
    },
    {
      mode: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      projectsPublic: "Unlimited Public Projects",
      access: "Community Access",
      projectsPrivate: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      domain: " Unlimited Free Subdomain",
      reports: "Monthly Status Reports",
    },
  ];

  const [initialPricingTable, updatedPriceTable] = useState(pricingTable);
  const styles = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "#007bff",
  };
  const ulItems = {
    lineHeight: "41px",
    listStyleType: "none",
  };
  const price = {
    fontSize: "3rem",
    textAlign: "center",
  };
  const month = {
    fontSize: "0.8rem",
  };
  const innerDiv = {
    backgroundColor: "white",
    borderRadius: "15px",
    width: "360px",
    height: "660px",
    margin: "50px 0px",
  };
  const btnStyle = {
    borderRadius: "15px",
    margin: "25px",
    width: "320px",
    height: "50px",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };
  return (
    <div style={styles}>
      {initialPricingTable.map((data) => (
        <div style={innerDiv}>
          <h5 class="card-title text-muted text-uppercase text-center m-4">
            {data.mode}
          </h5>
          <h6 style={price}>
            {data.price} <span style={month}>/month</span>
          </h6>
          <hr />
          <ul style={ulItems}>
            <li>{data.user}</li>
            <li>{data.storage}</li>
            <li>{data.projectsPublic}</li>
            <li>{data.access}</li>
            <li>{data.projectsPrivate}</li>
            <li>{data.phoneSupport}</li>
            <li>{data.domain}</li>
            <li>{data.reports}</li>
          </ul>

          <button style={btnStyle} type="button" class="btn btn-primary">
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
}
