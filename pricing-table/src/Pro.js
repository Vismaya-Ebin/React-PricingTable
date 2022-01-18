import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
    width: "400px",
    height: "580px",
    margin: "50px 0px",
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
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span><strong>{data.user}</strong></li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.storage}</li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.projectsPublic}</li>
            <li>
            <span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.access}</li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.projectsPrivate}</li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.phoneSupport}</li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.domain}</li>
            <li><span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.reports}</li>
          </ul>

          <button  type="button" class="btn btn-primary btnStyle">
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
}
