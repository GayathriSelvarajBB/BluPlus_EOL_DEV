/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Battery from "../../assets/images/Battery-img.png";
import routePaths from "routes/routePaths";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batteryStatusDetails } from "redux/batteryFlow.slice";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import {
   SaveStationActivity,
   batteryManufacture,
} from "services/dashboardService";
import { getDashboardParametersVehicleVoltage } from "socket/socketEmitters";
import { ecuSocket } from "socket";
import { socketEvents } from "socket/socketConstants";

const BatteryFitment = () => {
   const [batteryValue, setBatteryValue] = useState();
   const [active, setActive] = useState(false);
   const [batteryName, setBatteryName] = useState([]);
   const [selectStatus, setSelectStatus] = useState(true);
   const [batteryStatus, setBatteryStatus] = useState(false);
   const [command, setCommand] = useState("");
   const [selectValue, setSelectValue] = useState("");
   const Navigate = useNavigate();
   const carDetails = useSelector((state) => state.carDetails);
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const DynamicBatteryVoltage = Number(
      carDetails?.vehicleVoltage?.split("V").join("")
   );
   const StationActivity = {
      activity: ["VIN verification", "Manufacturer Name", "Battery Voltage"],
      activityDescription: [
         "Vehicle VIN  verification with Cloud VIN completed",
         `Manufacturer name is ${selectValue}`,
         `Battery voltage is ${DynamicBatteryVoltage}`,
      ],

      activityStatus: ["Completed", "Completed", "Completed"],
   };
   console.log("DynamicBatteryVoltage", DynamicBatteryVoltage);
   const postData = {
      orderId: OrderNumber,
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: StationActivity?.activity?.map(
         (activity, i) => ({
            stationName: "battery fitment",
            stationId: "st01",
            ecuName: "BATTERY",
            activity,
            activityDescription: StationActivity?.activityDescription?.[i],
            activityStatus: StationActivity?.activityStatus?.[i],
         })
      ),
   };
   console.log("StationActivity", StationActivity, postData);

   // const Navigate = useNavigate();
   const Validate = () => {
      getDashboardParametersVehicleVoltage();
      setCommand("Please wait battery is validating");
      setBatteryStatus(true);
      setTimeout(() => {
         setBatteryValue(DynamicBatteryVoltage);
         setActive(true);
      }, 3000);
   };
   // const HandleBatteryParameter=(data)=>{
   //    console.log("object",data)
   // }
   console.log("postData", postData);
   const dispatch = useDispatch();
   const BatterySubmit = () => {
      SaveStationActivity(postData);
      Navigate(routePaths.VciConnective);
      dispatch(batteryStatusDetails(true));
      dispatch(UpdateStationStatus("Brake Fitment"));
   };
   const SelectManufacture = (value) => {
      console.log("object", value);
      setSelectValue(value);
      setBatteryValue("");
      setActive(false);
      setBatteryStatus(false);
      setSelectStatus(false);
      setBatteryValue("");
      setActive(false);
      setBatteryStatus(false);
   };
   useEffect(() => {
      batteryManufacture()
         .then((res) => {
            setBatteryName(res?.data?.data[0]?.manufacture);
         })
         .catch((err) => console.log("err", err));
   }, []);

   return (
      <div className="vechile-eol-container">
         <div className="vechile-eol-contianer-sec">
            <div className="Battery-fitment-main">
               <div className="Battery-fitment">
                  <div className="Battery-image">
                     <h4>Connect 12V battery and switch on the power supply</h4>
                     <img src={Battery} alt="Battery" />
                  </div>
                  <div className="fetch-vci">
                     <div className="Battery-details">
                        <div className="list-details">
                           <span>Manufacturer</span>
                           <select
                              onChange={(e) =>
                                 SelectManufacture(e.target.value)
                              }
                           >
                              <option>--Select Manufacturer--</option>
                              {batteryName?.map((item, i) => (
                                 <option key={i} value={item}>
                                    {item}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <div className="list-details">
                           <span>Battery Voltage</span>
                           <input
                              type="text"
                              value={batteryValue}
                              disabled={true}
                           />
                        </div>
                        <div className="Validate-battery">
                           {!active ? (
                              <button
                                 onClick={Validate}
                                 disabled={selectStatus}
                              >
                                 {batteryStatus && (
                                    <span className="mini-loader" />
                                 )}
                                 {!batteryStatus
                                    ? "Validate battery voltage"
                                    : command}
                              </button>
                           ) : (
                              <button onClick={BatterySubmit}>Submit</button>
                           )}
                           {/* <button>Submit</button> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BatteryFitment;
