import { useEffect, useState } from "react";
// import Header from "../Header/Header";
// import SideBar from "../SideBar/SideBar";
import Sync from "../../assets/images/rotate.png";
import Equal from "../../assets/images/accept.png";
import NotEqual from "../../assets/images/NotEqual1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "components/SideBar/SideBar";
import axios from "axios";
import CommonPopup from "components/commonPopup/CommonPopup";

function VehicleConfiguration() {
   // const [configDetails, setConfigDetails] = useState({
   //    BMS: {
   //       longName: "Battery Management System",
   //       value: true,
   //    },
   //    WEVC: {
   //       longName: "Wireless Electric Vehicle Charging",
   //       value: false,
   //    },
   //    ECC: {
   //       longName: "Electrical Climate Controller",
   //       value: false,
   //    },
   //    PDU: {
   //       longName: "Power Distribution Unit",
   //       value: true,
   //    },
   //    VCU: {
   //       longName: "Vehicle Control Unit",
   //       value: false,
   //    },
   // });
   // const [vehicleLevel, setVehicleLevel] = useState({
   //    "Vehicle Configuration": false,
   // });

   const notify = () => {
      toast.success("Features Configured Successfully !", {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   const [vechileConfiguration, setVechileConfiguration] = useState([]);
   // const [vechileConfiguration1, setVechileConfiguration1] = useState([]);
   const [subscribed1, setSubscribed1] = useState(false);
   // const [statement,setStatement]=useState([])
   const [command, setCommand] = useState("Initialization in progress");
   const [popup, setPopup] = useState(false);
   const [commandfeature, setCommandfeature] = useState("");
   // const [cloud, setCloud] = useState(true);

   // console.log(setCloud);

   const syncConfig = () => {
      setPopup(true);
      // setCloud(true);
      ecuUpdate();
      setTimeout(() => {
         setSubscribed1(true);
         setCommand("");
         setCommandfeature("");
         notify();
         fetchData();
         setPopup(false);
         vechileConfiguration1();
      }, 24000);
      Object.keys(vechileConfiguration1).forEach((key) => {
         if (vechileConfiguration1[key]["inSyncWithCar"] === "false") {
            console.log(vechileConfiguration1[key], "coming");
            axios.patch(
               "https://apiservicediagnostics.bluebinaries.com/dtd-demo/sync-vehicle-features",
               {
                  package_name: vechileConfiguration1[key]["name"],
                  // validTill: vechileEcu[0].validTill.replaceAll("-","/"),
                  vin: "VIN-0012",
                  sync: "true",
               }
               // {
               //    headers: { Authorization: `Bearer ${access_token}` },
               // }
            );
         }
      });
   };
   console.log("subscribed", subscribed1[2]);

   // const access_token =
   //    "!AQMAQPbRhmmzBE.snWlW4oZfFIfxglpNtj_RbK_zCuWJ6PPX3PfrjMw8Btl._tu.wDkQXQlY3wF51UFmzsTrFlVLzvxKllTF";
   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = () => {
      axios
         .post(
            "https://apiservicediagnostics.bluebinaries.com/dtd-demo/get-vehicle-features",
            {
               VIN: "VIN-0012",
            }
            // {
            //    headers: { Authorization: `Bearer ${access_token}` },
            // }
         )
         .then((res) => setVechileConfiguration(res.data))
         .catch((err) => console.log("error", err));
   };

   const vechileConfiguration1 = Object.fromEntries(
      Object.entries(vechileConfiguration).filter(
         ([key, value]) =>
            value !== null &&
            value.validTill !== null &&
            value.subscribed !== "false"
      )
   );

   const vechileSyncConfiguration = [
      "Initialization in progress",
      "Starting Installation",
      "Installing the features in the car",
      "Installation completed successfully",
      "Synchronizing Vehicle features",
   ];

   const ecuUpdate = (i) => {
      setTimeout(function () {
         for (var j = 0; j < vechileSyncConfiguration.length; j++) {
            sequenceRunning(j);
         }
      }, 20000 * i);
   };

   const sequenceRunning = (i) => {
      setTimeout(function () {
         setTimeout(function () {
            console.log(vechileSyncConfiguration[i], "checking data");
            setCommand(vechileSyncConfiguration[i]);
         }, 4000);
      }, 4000 * i);
   };
   // const [cloud1, setCloud1] = useState(false);
   // const featureExpand = () => {
   //    setCloud(!cloud);
   // };
   // const Expand = () => {
   //    setCloud1(!cloud1);
   // };
   // const vechileEcu=Object.values(vechileConfiguration1)
   // const vechileEcu1 = vechileConfiguration1;

   console.log("vechileConfiguration", vechileSyncConfiguration);
   return (
      <div className="vehicle-configuration-page">
         {/* <Header headerActive={true} connectivityStatus={true} /> */}
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="config-title">
                     <h2>Vehicle Configuration</h2>
                     <button onClick={syncConfig}>
                        <img src={Sync} alt="Sync" />
                        <span>Sync Configuration</span>
                     </button>
                  </div>
                  {/* <div className="vehicle-level">
                     <div className="config-each-title">
                        <h3>Vehicle Level</h3>
                        <span>VOD</span>
                     </div>
                     <div className="config-container">
                        <ul>
                           <li className="config-success">
                              <h4>H</h4>
                              <div className="config-result">
                                 <img src={NotEqual} alt="Equal" />
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div> */}
                  <div className="ecu-level">
                     <div className="config-each-title">
                        <h3>Features</h3>
                        <span>Functions Subscribed</span>
                        <span>Functions Available In Car</span>
                     </div>
                     <div id="scan-progress-msg">
                        {popup ? (
                           <CommonPopup
                              isPopup={popup}
                              child={command}
                              commandfeature={commandfeature}
                           />
                        ) : null}
                     </div>
                     <div className="config-container">
                        <ul>
                           {Object.keys(vechileConfiguration1)?.map(
                              (ele, i) => (
                                 <li className={"config-success"} key={i}>
                                    <h4>{ele.replace(/([A-Z]+)/g, " $1")}</h4>
                                    <div className="config-result">
                                       <img src={Equal} alt="Equal" />
                                    </div>
                                    <div className="config-result">
                                       {console.log(
                                          vechileConfiguration1[ele][
                                             "inSyncWithCar"
                                          ],
                                          "ele"
                                       )}
                                       <img
                                          src={
                                             vechileConfiguration1[ele][
                                                "inSyncWithCar"
                                             ] === "true"
                                                ? Equal
                                                : NotEqual
                                          }
                                          alt="Equal"
                                       />
                                    </div>
                                 </li>
                              )
                           )}
                        </ul>
                     </div>
                  </div>
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

export default VehicleConfiguration;
