import { useState } from "react";
import "./App.css";

export default function Pro() {
  const [over, onHover] = useState(false);

  const pricingTable = [
    
    
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
      }
  ];

  const [initialPricingTable, updatedPriceTable] = useState(pricingTable);
 
  
  
  const innerDiv = {
    backgroundColor: "white",
    borderRadius: "15px",
    width: "360px",
    height: "580px",
    margin: "50px 0px",
  };
  const btnStyle = {
    borderRadius: "5rem",
    margin: "5px 25px",
    width: "320px",
    height: "50px",
    fontSize: "0.9rem",
    fontWeight: "bold",
    letterSpacing: ".3rem",

    padding: "1rem",
    opacity: "0.7",
    transition: "all 0.2s",
  };
  
  if (over) {
    innerDiv.margin = "20px 0px";
  }
  return (
    <div>
      {initialPricingTable.map((data) => (
        <div
          style={innerDiv}
          onMouseOver={() => onHover(true)}
          onMouseOut={() => onHover(false)}
        >
          <h5 className="mode">
            {data.mode}
          </h5>
          <h6 className="price">
            {data.price} <span  className="month">/month</span>
          </h6>
          <hr />
          <ul className="ulItems">
            <li><strong>{data.user}</strong></li>
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
