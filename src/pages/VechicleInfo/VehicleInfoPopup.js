import React, { useState, useEffect } from "react";
import Close from "assets/images/close.png";
import BBKarma from "assets/images/fisker-ocean.png";
import { getActiveVinData } from "storage/Activevinstorage";
import { getVehicleInfo } from "services/dashboardService";

function VehicleInfoPopup(props) {
   const getPopupData = props.connectivityPopup;
   const openPopupInfo = props.openPopupInfo;

   const [makemodel, setMakemodel] = useState("");
   const [modelyear, setModelyear] = useState("");
   const [powertrain, setPowertrain] = useState("");
   const [series1, setSeries1] = useState("");

   useEffect(() => {
      getActiveVinData().then((data) => {
         getVehicleInfo(data.vinNumber).then((_vehicledata) => {
            setMakemodel(VinData.makeandmodel[data.vinNumber[3]] || "-");
            setPowertrain(VinData.powertrain[data.vinNumber[5]] || "-");
            setSeries1(VinData.series[data.vinNumber[4]] || "-");
            setModelyear(VinData.modelyear[data.vinNumber[9]] || "-");
         });
      });
   }, []);

   const VinData = {
      series: {
         S: "Support",
         U: "Ultra",
         E: "Extreme",
         Z: "Ocean Zone",
      },
      makeandmodel: {
         1: "Fisker ocean",
      },
      powertrain: {
         A: "SBP/SN.FWD",
         B: "LBP/DM/AWD",
      },
      modelyear: {
         P: "2023",
         R: "2024",
         S: "2025",
         T: "2026",
         V: "2027",
         W: "2028",
         X: "2029",
         Y: "2030",
         I: "2031",
      },
   };

   return (
      <React.Fragment>
         {getPopupData && (
            <div
               className="vehicle-info-popup"
               id="vehicle-info-popup"
               data-testid="vehicle-info-popup"
            >
               <div className="vehicle-info-content">
                  <div className="close-popup" onClick={openPopupInfo}>
                     <img src={Close} alt="Close" />
                  </div>
                  <div className="car-detailsv1">
                     <div className="car-imagev1">
                        <img src={BBKarma} alt="fisker car" />
                     </div>
                     <ul>
                        <li>
                           <span className="extra-titlev1">Vehicle Model</span>
                           <span className="extra-resultv1">{makemodel}</span>
                        </li>
                        <li>
                           <span className="extra-titlev1">Power Train</span>
                           <span className="extra-resultv1">{powertrain}</span>
                        </li>
                        <li>
                           <span className="extra-titlev1">Model year</span>
                           <span className="extra-resultv1">{modelyear}</span>
                        </li>
                        <li>
                           <span className="extra-titlev1">Series</span>
                           <span className="extra-resultv1">{series1}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         )}
      </React.Fragment>
   );
}

export default VehicleInfoPopup;
