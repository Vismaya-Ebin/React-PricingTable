import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Free() {
  const [over, onHover] = useState(false);

  const pricingTable = [
    {
      mode: "FREE",
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
  ];

  const [initialPricingTable, updatedPriceTable] = useState(pricingTable);

  const innerDiv = {
    backgroundColor: "white",
    borderRadius: "15px",
    width: "400px",
    height: "580px",
    margin: "50px 0px",
    justifyContent:"center"
  };
  

  if (over) {
    innerDiv.margin = "20px 0px";
  }
  return (
    <div style={innerDiv}>
      {initialPricingTable.map((data) => (
        <div
          onMouseOver={() => onHover(true)}
          onMouseOut={() => onHover(false)}
        >
          <h5 className="mode">{data.mode}</h5>
          <h6 className="price">
            {data.price} <span className="month">/month</span>
          </h6>
          <hr />
          <ul className="ulItems">
            <li>
              <span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.user}{" "}
            </li>
            <li>
              <span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{" "}
              {data.storage}
            </li>
            <li>
              <span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.projectsPublic}
            </li>
            <li>
              <span style={{marginRight: '0.7rem'}}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.access}
            </li>
            <li class="text-muted">   <span style={{marginRight: '0.7rem'}}><strong>X</strong> </span >{data.projectsPrivate}</li>
            <li class="text-muted">   <span style={{marginRight: '0.7rem'}}><strong>X</strong> </span >{data.phoneSupport}</li>
            <li class="text-muted">   <span style={{marginRight: '0.7rem'}}><strong>X</strong> </span >{data.domain}</li>
            <li class="text-muted">   <span style={{marginRight: '0.7rem'}}><strong>X</strong> </span >{data.reports}</li>
          </ul>

          <button  type="button" className="btn btn-primary btnStyle">
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
}
