import { Link } from "react-router-dom";

function SoftwareUpdatePopup() {
   return (
      <div
         className="software-update-requires"
         id="software-update-requires"
         data-testid="software-update-requires"
      >
         <div className="software-version">
            <span>Current Version: 1.4</span>
            <span>Available Version: 1.46</span>
            <Link to="software-update" className="download-now">
               Download Now
            </Link>
         </div>
      </div>
   );
}

export default SoftwareUpdatePopup;
