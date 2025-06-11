import { useEffect, useState } from "react";
import SideBar from "components/SideBar/SideBar";
import { busEcuList } from "./busEcu";
import SelectEmpty from "assets/images/select-item.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ActuatorTesting() {
   const [busOptions, setBusOptions] = useState([]);
   const [busSelected] = useState([]);
   const [ecuOptions, setEcuOptions] = useState([]);
   const [ecuSelected] = useState([]);
   // const [color, setColor] = useState("");

   const actuatorTesting = {
      // "Theft Alarm Trigger": [
      //    ["Turn On", "Alarm Trigger Turned On"],
      //    ["Turn Off", "Alarm Trigger Turned Off"],
      // ],
      "Exterior Lamp": [
         ["ON", "Exterior Lamp Turned On",false],
         ["OFF", "Exterior Lamp Turned Off",true],
      ],
      "Head Lamp Lh":[
         ["ON", " Head Lamp Lh Turned On"],
         ["OFF", "Head Lamp Lh Turned Off"],
      ],
      "Head Lamp Rh":[
         ["ON", "Head Lamp Rh  Turned On"],
         ["OFF", "Head Lamp Rh Turned Off"],
      ],
      "Interior Lamp": [
         ["ON", "Interior Lamp Turned On"],
         ["OFF", "Interior Lamp Turned Off"],
      ],
      "Interior room Lamp":[
         ["ON", "Interior room Lamp Turned On"],
         ["OFF", "Interior room Lamp Turned Off"],
      ],
      "2nd Low Lamp":[
         ["ON", "2nd Low Lamp Turned On"],
         ["OFF", "2nd Low Lamp Turned Off"],

      ],
      "Interior room Lamp-2nd Low Lamp":[
         ["ON", "Interior room Lamp-2nd Low Lamp Turned On"],
         ["OFF", "Interior room Lamp-2nd Low Lamp Turned Off"],
      ],
      "Daytime Lamp": [
         ["ON", " Daytime Lamp Turned On"],
         ["OFF", "Daytime Lamp Turned Off"],
      ],

      // "Power Mode": [
      //    ["Turn On", "Power Mode Turned On"],
      //    ["Turn Off", "Power Mode Turned Off"],
      // ],
      // "Left Front Window": [
      //    ["Up", "Window Closed"],
      //    ["Down", "Window Opened"],
      //    ["Express Up", "Window Closed"],
      //    ["Express Down", "Window Opened"],
      // ],
      // "Right Front Window": [
      //    ["Up", "Window Closed"],
      //    ["Down", "Window Opened"],
      //    ["Express Up", "Window Closed"],
      //    ["Express Down", "Window Opened"],
      // ],
      // "Left Rear Window": [
      //    ["Up", "Window Closed"],
      //    ["Down", "Window Opened"],
      //    ["Express Up", "Window Closed"],
      //    ["Express Down", "Window Opened"],
      // ],
      // "Right Rear Window": [
      //    ["Up", "Window Closed"],
      //    ["Down", "Window Opened"],
      //    ["Express Up", "Window Closed"],
      //    ["Express Down", "Window Opened"],
      // ],
      "Front Wipers": [
         ["ON", "Front Wipers is On"],
         ["OFF", "Front Wipers is OFF"],
      ],
      "Ream Wiper": [
         ["ON", "Ream Wiper is On"],
         ["OFF", "Ream Wiper is Off"],
      ],
   };
   // const actuatorTesting1={
   //    "Theft Alarm Trigger": [
   //       ["Turn On", "Alarm Trigger Turned On"],
   //       ["Turn Off", "Alarm Trigger Turned Off"],
   //    ],

   // }
   const [getBusValue, setGetBusValue] = useState();
   const [, setGetEcuValue] = useState();
   const [ecuTableView, setEcuTableView] = useState(false);

   useEffect(() => {
      let busValues = [];
      Object.keys(busEcuList).forEach((data) => {
         const getBus = {
            label: data,
            value: data,
         };
         busValues.push(getBus);
      });
      setBusOptions(busValues);

      let ecuList = [];

      if (getBusValue) {
         busEcuList[getBusValue].forEach((ecuData) => {
            if (ecuData.type === "ota") {
               const ecuObj = {
                  label: ecuData.ecu_name,
                  value: ecuData.short_name,
               };
               ecuList.push(ecuObj);
            }
         });
      }

      setEcuOptions(ecuList);
   }, [busSelected, ecuSelected, getBusValue]);

   const getBusName = (event) => {
      if (event.target.value !== "0") {
         setGetBusValue(event.target.value);
      }
      if (event.target.value === "0") {
         setGetBusValue(0);
      }
   };

   const getEcuName = (event) => {
      if (event.target.value !== "0") {
         setGetEcuValue(event.target.value);
         setEcuTableView(true);
      }
      if (event.target.value === "0") {
         setGetEcuValue(0);
         setEcuTableView(false);
      }
   };

   const notify = (getParam) => {
      toast.success(`${getParam} Successfully !`, {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   // const HandleBusSelect = (e) => {
   //    setColor(e.currentTarget.dataset.id);

   // };

   return (
      <div
         className="actuator-testing-page"
         id="actuator-testing-div"
         data-testid="actuator-testing-div"
      >
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="actuator-testing">
                  <div className="select-parameters-list">
                     <div className="multi-select-container select-bus">
                        {/* <MultiSelect
                                options={busOptions}
                                value={busSelected}
                                onChange={setBusSelected}
                                className="selectBusValue"
                            /> */}
                        <select
                           data-testid="bus-name-select"
                           onChange={getBusName}
                        >
                           <option value="0">-- Select Bus Option --</option>
                           {busOptions.map((data, i) => (
                              <option
                                 data-testid="bus-name-option"
                                 value={data.value}
                                 key={i}
                              >
                                 {data.label}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className="multi-select-container select-ecu">
                        {/* <MultiSelect
                                options={ecuOptions}
                                value={ecuSelected}
                                onChange={setEcuSelected}
                                className="selectEcuValue"
                            /> */}
                        <select
                           data-testid="ecu-name-select"
                           onChange={getEcuName}
                        >
                           <option value="0">-- Select ECU Option --</option>
                           {getBusValue !== "0" &&
                              ecuOptions.map((data, i) => (
                                 <option
                                    data-testid="ecu-name-option"
                                    value={data.value}
                                    key={i}
                                 >
                                    {data.label}
                                 </option>
                              ))}
                        </select>
                     </div>
                  </div>
                  {ecuTableView ? (
                     <div className="acutuator-testing-params">
                        {Object.keys(actuatorTesting).map((data, i) => (
                           <div className="actuator-testing-box" key={i}>
                              <h4>{data}</h4>
                              <div className="testing_buttons">
                                 {actuatorTesting[data].map((actionItem, j) => (
                                    <button
                                       id={"generic-button_"+i+"_"+j}
                                       data-testid="generic-button"
                                       // disabled={actionItem[2]?.false?.setColor("blue")}
                                       // eslint-disable-next-line no-unused-expressions
                                       onClick={() => notify(actionItem[1])}
                                       key={j}
                                    >
                                       {actionItem[0]}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="select-empty">
                        <img src={SelectEmpty} alt="select empty" />
                        <h4>
                           Select the Bus and ECU to start actuator testing
                        </h4>
                     </div>
                  )}
               </div>
            </div>
         </div>
         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </div>
   );
}

export default ActuatorTesting;
