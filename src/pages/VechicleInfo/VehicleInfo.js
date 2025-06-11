import { useSelector } from "react-redux";
import routePaths from "routes/routePaths";
import { Link } from "react-router-dom";
import crossLog from "../../assets/images/close.svg";
// import { ReactComponent as V_info } from "../../assets/images/Car-info.svg";
import V_infoLogo from "../../assets/images/Car-info.svg";
import { getVehicleDetailsApi } from "services/dashboardService";
import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import EnterVINnumber from "components/EnterVINnumber/EnterVINnumber";

const VehicleInfo = () => {
   const freezeAll = useSelector((state) => state.freezeSlice);
   // const vehicleInfoData = useSelector((state) => state.vehicleInfoSlice);//redux
   const [vInfo, setVinfoDetails] = useState();
   const [vinInput, setVinInput] = useState("T834023XC3943HU4R");
   const [inputErrorMsg, setInputErrorMsg] = useState("");
   const [isVinfoOpen, setIsVinfoOpen] = useState(false);
   console.log("vInfo", vInfo);

   const getVehicleInfoDatafromApi = () => {
      if (
         (vinInput.length > 0 && vinInput === "T834023XC3943HU4R") ||
         vinInput === "T834037XC3943H75R"
      ) {
         getVehicleDetailsApi(vinInput)
            .then((res) => {
               if (res.status === 200) {
                  setVinInput("");
                  // dispatch(getVehicleInfoData(res));
                  setVinfoDetails(res?.data?.data);
               }
            })
            .catch((err) => console.log(err));
         setIsVinfoOpen(true);
      } else {
         setInputErrorMsg("Please enter VIN number");
      }
   };
   useEffect(() => {
      if (freezeAll) {
         getVehicleDetailsApi()
            .then((res) => {
               setVinfoDetails(res?.data?.data);
            })
            .catch((err) => console.log(err));
      }
   }, []);
   const handleChange = (e) => {
      if (e.target.value.length > 0) {
         setInputErrorMsg("");
      }
      setVinInput(e.target.value);
   };

   return (
      <>
         {isVinfoOpen ? (
            <div className="vin_details">
               <>
                  <div className="vin_header">
                     <p>Vehicle Info</p>
                     <Link to={routePaths.hardwareInterface}>
                        <small>
                           <img src={crossLog} alt="crossImg" />
                        </small>
                     </Link>
                  </div>
                  <div className="vin_body">
                     <div className="vin_search_div">
                        <div className="vin_input_div">
                           <input
                              type="search"
                              placeholder="Enter VIN number"
                              value={vinInput}
                              onChange={handleChange}
                           />

                           <SearchIcon className="search_icon" />
                           <button onClick={getVehicleInfoDatafromApi}>
                              Submit
                           </button>
                        </div>
                        {inputErrorMsg ? (
                           <span className="input_error">{inputErrorMsg}</span>
                        ) : (
                           ""
                        )}
                     </div>
                     <div className="service_history_top_div">
                        <p className="v_h_paragraph">Vehicle Details</p>
                        <div className="v_h_details_info_page">
                           <ul>
                              {vInfo ? (
                                 <>
                                    {" "}
                                    <li>
                                       <span>VIN No.</span>
                                       <span>{vInfo.vinNumber}</span>
                                    </li>
                                    <li>
                                       <span>Vehicle Name</span>
                                       <span>{vInfo.vehicleName}</span>
                                    </li>
                                    <li>
                                       <span>Region/Country</span>
                                       <span> {vInfo.region}/{vInfo.country}</span>
                                    </li>
                                    <li>
                                       <span>Production Date & Time</span>
                                       <span> {vInfo.productionDateTime}</span>
                                    </li>
                                    <li>
                                       <span>Model</span>
                                       <span>{vInfo.model}</span>
                                    </li>
                                    <li>
                                       <span>Body Type</span>
                                       <span> {vInfo.bodyType} </span>
                                    </li>
                                    <li>
                                       <span>Airbag</span>
                                       <span> {vInfo.airbag} </span>
                                    </li>
                                    <li>
                                       <span>Architecture</span>
                                       <span> {vInfo.architecture} </span>
                                    </li>
                                    <li>
                                       <span>Audio/ Video</span>
                                       <span> {vInfo.audioVideo} </span>
                                    </li>
                                    <li>
                                       <span>Battery Number</span>
                                       <span> {vInfo.batteryNumber} </span>
                                    </li>
                                    <li>
                                       <span>Braking</span>
                                       <span> {vInfo.braking} </span>
                                    </li>
                                    <li>
                                       <span>Drive Type</span>
                                       <span> {vInfo.driveType} </span>
                                    </li>
                                    <li>
                                       <span>Engine Type</span>
                                       <span> {vInfo.engineType} </span>
                                    </li>
                                    <li>
                                       <span>Gear Box</span>
                                       <span> {vInfo.gearBox} </span>
                                    </li>
                                    <li>
                                       <span>Hassle Free Entry</span>
                                       <span> {vInfo.hassleFreeEntry} </span>
                                    </li>
                                    <li>
                                       <span>Head lamp</span>
                                       <span> {vInfo.headlamp} </span>
                                    </li>
                                    <li>
                                       <span>Heater & Conditioning</span>
                                       <span>
                                          {" "}
                                          {vInfo.heaterAndConditioning}{" "}
                                       </span>
                                    </li>
                                    <li>
                                       <span>Injector Codes</span>
                                       <span> {vInfo.injectorCodes} </span>
                                    </li>
                                    <li>
                                       <span>Power Steering</span>
                                       <span> {vInfo.powerSteering} </span>
                                    </li>
                                    <li>
                                       <span>Power Train</span>
                                       <span> {vInfo.powerTrain} </span>
                                    </li>
                                    <li>
                                       <span>Power Window</span>
                                       <span> {vInfo.powerWindow} </span>
                                    </li>
                                    <li>
                                       <span>Vehicle Code</span>
                                       <span> {vInfo.vehicleCode} </span>
                                    </li>
                                    <li>
                                       <span>Wiper</span>
                                       <span> {vInfo.wiper} </span>
                                    </li>
                                 </>
                              ) : (
                                 <p className="no_data_found">No Data Found</p>
                              )}
                           </ul>

                           <div className="ecu_specifications_div">
                              <p>ECU Specifications</p>
                              {vInfo?.ecuSpecifications?.length > 0 ? (
                                 <div className="ecu_specifications_body_div">
                                    {vInfo?.ecuSpecifications.map(
                                       (ecuSpecification, i) => {
                                          if (ecuSpecification.ecuName) {
                                             return (
                                                <ul key={i}>
                                                   <li>
                                                      <span>ECU Name</span>

                                                      <span>
                                                         {
                                                            ecuSpecification.ecuName
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Calibration Number
                                                      </span>

                                                      <span>
                                                         {
                                                            ecuSpecification.calibrationNo
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>H/W Number</span>

                                                      <span>
                                                         {
                                                            ecuSpecification.hardwarePartNo
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>S/W Number</span>

                                                      <span>
                                                         {
                                                            ecuSpecification.softwarePartNo
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>S/W version</span>

                                                      <span>
                                                         {
                                                            ecuSpecification.softwareVersionNo
                                                         }
                                                      </span>
                                                   </li>
                                                </ul>
                                             );
                                          }
                                       }
                                    )}
                                 </div>
                              ) : (
                                 <p className="no_data_found">No Data Found</p>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </>
            </div>
         ) : (
            <>
               <EnterVINnumber
                  vinInput={vinInput}
                  handleChange={handleChange}
                  inputErrorMsg={inputErrorMsg}
                  getVehicleInfoDatafromApi={getVehicleInfoDatafromApi}
                  title="Vehicle Info"
                  icon={V_infoLogo}
               />
            </>
         )}
      </>
   );
};

export default VehicleInfo;
