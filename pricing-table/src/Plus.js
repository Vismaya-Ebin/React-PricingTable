import { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck} from "@fortawesome/free-solid-svg-icons";




export default function Plus() {
  const [over, onHover] = useState(false);

  const pricingTable = [
   
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
            <li> <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <strong>{data.user} </strong></li>
            <li><span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.storage}</li>
            <li><span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.projectsPublic}</li>
            <li><span>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.access}</li>
            <li>
            <span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.projectsPrivate}</li>
            <li><span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.phoneSupport}</li>
            <li><span>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.domain}</li>
            <li class="text-muted"> 
            <span> 
           </span>
              {data.reports}</li>
          </ul>

          <button  type="button" class="btn btn-primary btnStyle">
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
}
