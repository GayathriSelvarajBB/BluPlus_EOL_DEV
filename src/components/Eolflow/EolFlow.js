import BatteryFitment from "../../assets/images/Battery Fitment.png";
import BrakeFitment from "../../assets/images/Brake Fitment.png";
import carlearning from "../../assets/images/KeyCard Learnig.png";
import Static1 from "../../assets/images/Static1.png";
import Static2 from "../../assets/images/Static2.png";
import waha from "../../assets/images/waha.png";
import dynamic from "../../assets/images/Dynamic.png";
import adas from "../../assets/images/ADAS Calibration.png";
import Short from "../../assets/images/Short Track Test.png";
import EOL from "../../assets/images/EOL Checks.png";
import carStatus from "../../assets/images/CarStatus.png";
import dtcCheck from "../../assets/images/DTC Check.png";
import routePaths from "routes/routePaths";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStationName } from "redux/stationName.slice";
import { useEffect } from "react";
import { fetchWorIDInformation } from "services/dashboardService";
import { useState } from "react";
// eslint-disable-next-line sonarjs/cognitive-complexity
const EolFlow = () => {
   const Batterystatus = useSelector((state) => state?.BatteryStatus?.status);
   const [stationStatus, setStationStatus] = useState([]);
   console.log("Batterystatus", Batterystatus);
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   useEffect(() => {
      fetchWorIDInformation(OrderNumber)
         .then((res) => {
            setStationStatus(res?.data?.data?.[0]?.["Vehicle Status"]);
            // setDetails(res?.data?.data?.[0]);0
            console.log("data", res?.data?.data?.[0]?.vehicleStatus);
         })
         .catch((err) => console.log("err", err));
   }, [OrderNumber]);
   const Battery = () => {
      Navigate(routePaths.BatteryFitment);
      dispatch(UpdateStationName({ value: "Battery Fitment", id: "EOL-01" }));
   };
   const Break = () => {
      Navigate(routePaths.BrakeFitment);
      dispatch(UpdateStationName({ value: "Brake Fitment", id: "EOL-02" }));
   };
   const KeyCardLearning = () => {
      Navigate(routePaths.KeycardLearning);
      dispatch(UpdateStationName({ value: "Key Card Learning", id: "EOL-03" }));
   };
   const StaticStation1 = () => {
      localStorage.removeItem("scanEcuList");
      Navigate(routePaths.StaticStation1);
      dispatch(UpdateStationName({ value: "Static 1", id: "EOL-04" }));
   };

   const Waha = () => {
      Navigate(routePaths.Waha);
      dispatch(UpdateStationName({ value: "Waha", id: "EOL-06" }));
   };
   const Dynamic = () => {
      Navigate(routePaths.Dynamic);
      dispatch(UpdateStationName({ value: "Dynamic", id: "EOL-07" }));
   };
   const ADAS = () => {
      Navigate(routePaths.ADAS);
      dispatch(UpdateStationName({ value: "ADAS", id: "EOL-08" }));
   };
   const Staticstation2 = () => {
      localStorage.removeItem("scanEcuList");
      Navigate(routePaths.Static2);
      dispatch(UpdateStationName({ value: "Static2", id: "EOL-05" }));
   };
   const DtcCheck = () => {
      Navigate(routePaths.DtcCheck);
      dispatch(UpdateStationName({ value: "Dtc Check", id: "EOL-09" }));
   };
   const ShortTrack = () => {
      Navigate(routePaths.Shorttrack);
      dispatch(UpdateStationName({ value: "Short Track Test", id: "EOL-10" }));
   };
   const EolSignoff = () => {
      Navigate(routePaths.Signoff);
      dispatch(UpdateStationName({ value: "Eol Signoff", id: "EOL-11" }));
   };
   // const stationStatus = "WAHA"
   console.log("stationStatus", stationStatus);

   return (
      <div className="Flow-main">
         {/* <div className="Order-number">
            <span>OrderNo:123455556</span>
            <span>VIN:1234567899876</span>
         </div> */}
         <div className="Battery-station">
            <div
               className={`Battery-line ${
                  stationStatus === "Battery Fitment" && "afterline"
               }`}
               onClick={() => stationStatus === "Battery Fitment" && Battery()}
            >
               <img src={BatteryFitment} alt="BatteryFitment" />
               {stationStatus === "Battery Fitment" && (
                  <img src={carStatus} alt="car" className="Carstatus" />
               )}
            </div>
         </div>
         <div className="Brake-station">
            <div
               className={`beforeline Straight-line ${
                  stationStatus === "Brake Fitment" && "cursor-allowed"
               }`}
               onClick={() => stationStatus === "Brake Fitment" && Break()}
            >
               <img src={BrakeFitment} alt="BreakFitment" />
               {stationStatus === "Brake Fitment" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line  ${
                  stationStatus === "Key Card Learning" && "cursor-allowed"
               }`}
               onClick={() =>
                  stationStatus === "Key Card Learning" && KeyCardLearning()
               }
            >
               <img src={carlearning} alt="BatteryFitment" />
               {stationStatus === "Key Card Learning" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line ${
                  stationStatus === "Static 1" && "cursor-allowed"
               }`}
               onClick={() => stationStatus === "Static 1" && StaticStation1()}
            >
               <img src={Static1} alt="BatteryFitment" />
               {stationStatus === "Static 1" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line ${
                  stationStatus === "Static 2" && "cursor-allowed"
               }`}
               onClick={() => stationStatus === "Static 2" && Staticstation2()}
            >
               <img src={Static2} alt="BatteryFitment" />
               {stationStatus === "Static 2" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={
                  stationStatus === "WAHA" ? "Dynamic-line-curve" : "crave-line"
               }
               onClick={() => stationStatus === "WAHA" && Waha()}
            >
               <img src={waha} alt="wah" />
               {stationStatus === "WAHA" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
         </div>
         <div className="Dynamic-station">
            <div
               className={`Straight-line ${
                  stationStatus === "EOL Checks & Sign off" && "cursor-allowed"
               }`}
               onClick={() =>
                  stationStatus === "EOL Checks & Sign off" && EolSignoff()
               }
            >
               <img src={EOL} alt="wah" />
               {stationStatus === "EOL Checks & Sign off" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line ${
                  stationStatus === "Short Track Test" && "cursor-allowed"
               }`}
            >
               <img
                  src={Short}
                  alt="wah"
                  onClick={() =>
                     stationStatus === "Short Track Test" && ShortTrack()
                  }
               />
               {stationStatus === "Short Track Test" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line ${
                  stationStatus === "DTC Check" && "cursor-allowed"
               }`}
               onClick={() => stationStatus === "DTC Check" && DtcCheck}
            >
               <img src={dtcCheck} alt="wah" />
               {stationStatus === "DTC Check" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
            <div
               className={`Straight-line ${
                  stationStatus === "ADAS" && "cursor-allowed"
               }`}
               onClick={() => stationStatus === "ADAS" && ADAS()}
            >
               <img src={adas} alt="wah" />
               {stationStatus === "ADAS" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>

            <div
               className={
                  stationStatus === "Dynamic" ? "Dynamic-line" : "down-curve"
               }
               onClick={() => stationStatus === "Dynamic" && Dynamic()}
            >
               <img src={dynamic} alt="wah" />
               {stationStatus === "Dynamic" && (
                  <img src={carStatus} alt="car" className="Carstatusbreak" />
               )}
            </div>
         </div>
      </div>
   );
};

export default EolFlow;
