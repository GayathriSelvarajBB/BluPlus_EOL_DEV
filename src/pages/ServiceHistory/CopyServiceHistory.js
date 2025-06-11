import EnterVINnumber from "components/EnterVINnumber/EnterVINnumber";
import PopupWithDate from "components/PopupWithDate/PopupWithDate";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isPopupOpen } from "redux/isPopup.slice";
import routePaths from "routes/routePaths";
import {
   getServiceHistoryApi,
   getVehicleDetailsApi,
} from "services/dashboardService";
import crossLog from "../../assets/images/close.svg";
import V_historyLogo from "../../assets/images/SH.svg";

export const v_info = [
   { name: "VIN NO", value: "TN1537H" },
   {
      name: "Vehicle Name",
      value: "HYUDAI - I20",
   },
   {
      name: "Region/Country",
      value: "ASIA/INDIA",
   },

   {
      name: "Production Date",
      value: "19/12/2022 : 08:05:32 AM",
   },
   {
      name: "Model",
      value: "E2",
   },
   {
      name: "Body Type",
      value: "HATCHBACK",
   },
];

// const sHistory = [
//    {
//       createdAt: "2022-07-04",
//       id: 1,
//       h_data: {
//          "Repair Order Number": "12",
//          "Service Center Visited": "2022-07-04",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 1,
//          "Fault Identified": 2,
//          "Actions by Technician": 2,
//          "Repair / Replacement Done": 2,
//       },
//    },
//    {
//       createdAt: "2020-07-04",
//       id: 2,
//       h_data: {
//          "Repair Order Number": "08",
//          "Service Center Visited": "2020-07-04",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 4,
//          "Fault Identified": 3,
//          "Actions by Technician": 3,
//          "Repair / Replacement Done": 3,
//       },
//    },
//    {
//       createdAt: "2018-12-30",
//       id: 3,
//       h_data: {
//          "Repair Order Number": "05",
//          "Service Center Visited": "2018-12-30",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 1,
//          "Fault Identified": 2,
//          "Actions by Technician": 2,
//          "Repair / Replacement Done": 2,
//       },
//    },
//    {
//       createdAt: "2019-11-30",
//       id: 4,
//       h_data: {
//          "Repair Order Number": "07",
//          "Service Center Visited": "2019-11-30",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 6,
//          "Fault Identified": 5,
//          "Actions by Technician": 5,
//          "Repair / Replacement Done": 5,
//       },
//    },
//    {
//       createdAt: "2023-01-01",
//       id: 5,
//       h_data: {
//          "Repair Order Number": "03",
//          "Service Center Visited": "2023-01-01",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 4,
//          "Fault Identified": 3,
//          "Actions by Technician": 3,
//          "Repair / Replacement Done": 4,
//       },
//    },
//    {
//       createdAt: "2018-11-16",
//       id: 6,
//       h_data: {
//          "Repair Order Number": "05",
//          "Service Center Visited": "2018-11-16",
//          Odometer: "8000 Km",
//          "Customer Symtoms": 1,
//          "Fault Identified": 2,
//          "Actions by Technician": 3,
//          "Repair / Replacement Done": 3,
//       },
//    },
// ];

const ServiceHistoryCopy = (e) => {
   const [IsPopupInsertion, setIsPopupInsertion] = useState(false);

   // const [products, setProducts] = useState([]);
   // const [allProducts, setAllProducts] = useState([]);
   const [vinInput, setVinInput] = useState("");
   const [inputErrorMsg, setInputErrorMsg] = useState("");
   //==========================================================
   const [serviceHistoryAllData, setServiceHistoryAllData] = useState([]);
   const [serviceHistoryData, setServiceHistoryData] = useState([]);
   const [vehicleInfoAllData, setVehicleInfoAllData] = useState([]);
   //==========================================================

   // console.log("vehicleInfoAllData", vehicleInfoAllData);
   const isPopupOpened = useSelector((state) => state.isPopupSlice);
   const dispatch = useDispatch();

   // const radioBtnChangeHandler = (e) => {
   //    if (e.target.value === "Specified Date") {
   //       setIsPopupInsertion(true);
   //    } else if (e.target.value === "Last 5 Services") {
   //       setProducts(allProducts.slice(0, 5));
   //    } else {
   //       setProducts(allProducts.slice(0, 1));
   //    }
   // };

   // useEffect(() => {
   //    let firstDisplayData = sHistory.filter((elem) => elem.id === 1);
   //    setProducts(firstDisplayData);
   //    setAllProducts(sHistory);
   // }, []);
   console.log("serviceHistoryData", serviceHistoryData);
   const radioBtnChangeHandler = (e) => {
      if (e.target.value === "Specified Date") {
         setIsPopupInsertion(true);
      } else if (e.target.value === "Last 5 Services") {
         setServiceHistoryData(serviceHistoryAllData.slice(0, 5));
      } else {
         setServiceHistoryData(serviceHistoryAllData.slice(0, 1));
      }
   };
   useEffect(() => {
      getServiceHistoryApi()
         .then((res) => {
            if (res.status === 200) {
               // console.log("serviceHistoryData res", res);
               setServiceHistoryData(res?.data?.data?.slice(0, 1));
               setServiceHistoryAllData(res?.data?.data);
            }
         })
         .catch((err) => console.log(err));

      getVehicleDetailsApi("T834023XC3943HU4R")
         .then((res) => {
            if (res.status === 200) {
               setVehicleInfoAllData(res?.data?.data);
               console.log("ress", res);
            }
         })
         .catch((err) => console.log(err));
   }, []);

   const handlClickPopup = () => {
      setIsPopupInsertion(true);
   };
   const getVehicleDerviceDatafromApi = () => {
      if (vinInput.length > 0) {
         dispatch(isPopupOpen(true));
      } else {
         setInputErrorMsg("Please enter VIN number");
      }
   };
   const handleChange = (e) => {
      if (e.target.value.length > 0) {
         setInputErrorMsg("");
      }
      setVinInput(e.target.value);
   };

   return (
      <>
         {isPopupOpened ? (
            <div className="dtc-scan-page">
               <div className="page-wrapper">
                  <div className="vin_details">
                     <div className="vin_header">
                        <p>Service History</p>
                        <Link to={routePaths.hardwareInterface}>
                           <small onClick={() => dispatch(isPopupOpen(false))}>
                              <img src={crossLog} alt="crossImg" />
                           </small>
                        </Link>
                     </div>
                     <div className="dtc-contianer-sec">
                        {/* {isPopupOpened ? ( */}
                        <div className="dtc-container-list">
                           {IsPopupInsertion ? (
                              <PopupWithDate
                                 IsPopupInsertion={IsPopupInsertion}
                                 setIsPopupInsertion={setIsPopupInsertion}
                                 setServiceHistoryAllData={
                                    setServiceHistoryAllData
                                 }
                                 serviceHistoryAllData={serviceHistoryAllData}
                                 setServiceHistoryData={setServiceHistoryData}
                              />
                           ) : null}
                           <div className="service_history_top_div">
                              <p className="v_h_paragraph">Vehicle Info</p>
                              <div className="v_h_details">
                                 <ul>
                                    {vehicleInfoAllData ? (
                                       <>
                                          <li>
                                             <span>VIN No.</span>
                                             <span>
                                                {vehicleInfoAllData.vinNumber}
                                             </span>
                                          </li>
                                          <li>
                                             <span>Vehicle Name</span>
                                             <span>
                                                {vehicleInfoAllData.vehicleName}
                                             </span>
                                          </li>
                                          <li>
                                             <span>Region/Country</span>
                                             <span>
                                                {vehicleInfoAllData.region?vehicleInfoAllData.region:""}{vehicleInfoAllData.country?vehicleInfoAllData.country:""}
                                             </span>
                                          </li>
                                          <li>
                                             <span>Production Date & Time</span>
                                             <span>
                                                {
                                                   vehicleInfoAllData.productionDateTime
                                                }
                                             </span>
                                          </li>
                                          <li>
                                             <span>Model</span>
                                             <span>
                                                {vehicleInfoAllData.model}
                                             </span>
                                          </li>
                                          <li>
                                             <span>Body Type</span>
                                             <span>
                                                {vehicleInfoAllData.bodyType}
                                             </span>
                                          </li>
                                       </>
                                    ) : (
                                       <p className="no_data_found">
                                          No Data Found
                                       </p>
                                    )}
                                 </ul>

                                 {/* {v_info?.length >= 0 ? (
                                    <ul>
                                       {v_info.map((item, i) => (
                                          <>
                                             <li key={i}>
                                                <span>{item.name}</span>
                                                <span>{item.value}</span>
                                             </li>
                                          </>
                                       ))}
                                    </ul>
                                 ) : (
                                    <p>No Data Found</p>
                                 )} */}
                              </div>
                           </div>

                           <div className="service_history_bottom_div">
                              <div className="s_h_sub_header">
                                 <div className="s_h_left_div ">
                                    <p>Service History</p>
                                 </div>
                                 <div className="s_h_right_div">
                                    <div>
                                       <input
                                          type="radio"
                                          value="Last Service"
                                          name="service"
                                          defaultChecked
                                          onChange={radioBtnChangeHandler}
                                       />
                                       &nbsp;
                                       <span>Last Service</span>
                                    </div>
                                    <div>
                                       <input
                                          type="radio"
                                          value="Last 5 Services"
                                          name="service"
                                          onChange={radioBtnChangeHandler}
                                       />
                                       &nbsp;
                                       <span>Last 5 Services</span>
                                    </div>
                                    <div>
                                       <input
                                          type="radio"
                                          value="Specified Date"
                                          name="service"
                                          onChange={radioBtnChangeHandler}
                                       />
                                       &nbsp;
                                       <span onClick={handlClickPopup}>
                                          Specified Date
                                       </span>
                                    </div>
                                 </div>
                              </div>

                              <div className="v_h_card_div ">
                                 {/* {products?.length > 0 ? (
                                    <div className="service_history_render_div">
                                       {products?.map((elm, i) => {
                                          if (elm.createdAt) {
                                             return (
                                                <ul key={i}>
                                                   {Object.keys(elm.h_data).map(
                                                      (item, i) => (
                                                         <li key={i}>
                                                            <span>{item}</span>
                                                            <span>
                                                               {item ===
                                                               "Repair Order Number" ? (
                                                                  <Link
                                                                     to={
                                                                        routePaths.serviceHistoryDetailsCopy
                                                                     }
                                                                  >
                                                                     {
                                                                        elm
                                                                           .h_data[
                                                                           item
                                                                        ]
                                                                     }
                                                                     &nbsp;(View
                                                                     Details)
                                                                  </Link>
                                                               ) : (
                                                                  elm.h_data[
                                                                     item
                                                                  ]
                                                               )}
                                                            </span>
                                                         </li>
                                                      )
                                                   )}
                                                </ul>
                                             );
                                          }
                                       })}
                                    </div>
                                 ) : (
                                    <p className="no_data_found">
                                       No data found
                                    </p>
                                 )} */}
                                 {serviceHistoryData?.length > 0 ? (
                                    <div className="service_history_render_div">
                                       {serviceHistoryData?.map((item, i) => {
                                          let totalRepair =
                                             item?.ServiceDiagnostics?.filter(
                                                (item) => item.repairReplacement
                                             );

                                          let totalSustomerSymptoms =
                                             item?.ServiceDiagnostics?.filter(
                                                (item) => item.customerSymptoms
                                             );
                                          let formatDate =
                                             item.serviceCentreVisited
                                                .split("-")
                                                .reverse()
                                                .join("-");

                                          if (item.vinNumber) {
                                             return (
                                                <ul key={i}>
                                                   <li>
                                                      <span>
                                                         Repair Order Number
                                                      </span>
                                                      <Link
                                                         to={`${routePaths.serviceHistoryDetailsCopy}/${item.repairOrderNo}`}
                                                      >
                                                         <span>
                                                            {item.repairOrderNo}{" "}
                                                            (View Details)
                                                         </span>
                                                      </Link>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Service Center Visited
                                                      </span>
                                                      <span>{formatDate}</span>
                                                   </li>
                                                   <li>
                                                      <span>Odometer</span>
                                                      <span>
                                                         {item.odometerReading}
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Customer Symptoms
                                                      </span>
                                                      <span>
                                                         {
                                                            totalSustomerSymptoms.length
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Fault Identified
                                                      </span>
                                                      <span>
                                                         {
                                                            item
                                                               .ServiceDiagnostics
                                                               .length
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Actions by Technician
                                                      </span>
                                                      <span>
                                                         {totalRepair.length}
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>
                                                         Repair / Replacement
                                                         Done
                                                      </span>
                                                      <span>
                                                         {totalRepair.length}
                                                      </span>
                                                   </li>
                                                </ul>
                                             );
                                          }
                                       })}
                                    </div>
                                 ) : (
                                    <p className="no_data_found">
                                       No data found
                                    </p>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <EnterVINnumber
               vinInput={vinInput}
               inputErrorMsg={inputErrorMsg}
               handleChange={handleChange}
               getVehicleDerviceDatafromApi={getVehicleDerviceDatafromApi}
               title="Service History"
               icon={V_historyLogo}
            />
         )}
      </>
   );
};

export default ServiceHistoryCopy;
