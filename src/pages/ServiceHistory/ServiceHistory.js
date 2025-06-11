import PopupWithDate from "components/PopupWithDate/PopupWithDate";
import SideBar from "components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routePaths from "routes/routePaths";
import {
   getServiceHistoryApi,
   getVehicleDetailsApi,
} from "services/dashboardService";

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
//          "Customer Symptoms": 1,
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
//          "Customer Symptoms": 4,
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
//          "Customer Symptoms": 1,
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
//          "Customer Symptoms": 6,
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
//          "Customer Symptoms": 4,
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
//          "Customer Symptoms": 1,
//          "Fault Identified": 2,
//          "Actions by Technician": 3,
//          "Repair / Replacement Done": 3,
//       },
//    },
// ];

const ServiceHistory = (e) => {
   const [IsPopupInsertion, setIsPopupInsertion] = useState(false);
   const [serviceHistoryAllData, setServiceHistoryAllData] = useState([]);
   const [serviceHistoryData, setServiceHistoryData] = useState([]);
   const [vehicleInfoAllData, setVehicleInfoAllData] = useState([]);

   const radioBtnChangeHandler = (e) => {
      if (e.target.value === "Specified Date") {
         setIsPopupInsertion(true);
      } else if (e.target.value === "Last 5 Services") {
         setServiceHistoryData(serviceHistoryAllData.slice(0, 5));
      } else {
         setServiceHistoryData(serviceHistoryAllData.slice(0, 1));
      }
   };
   //============================================

   // const handleClickDate = () => {
   //    setOpenDate((openDate) => !openDate);
   // };

   // useEffect(() => {
   //    document.addEventListener("keydown", hideOnEscape, true);
   //    document.addEventListener("click", hideOnClickOutSide, true);
   // }, []);

   // const hideOnEscape = (e) => {
   //    if (e.key === "Escape") {
   //       setOpenDate(false);
   //    }
   // };
   // const hideOnClickOutSide = (e) => {
   //    if (dateRef.current && !dateRef.current.contains(e.target)) {
   //       setOpenDate(false);
   //    }
   // };

   // useEffect(() => {
   //    let firstDisplayData = serviceHistoryData.slice(0, 1);
   //    // let firstDisplayData = sHistory.filter((elem) => elem.id === 1);
   //    setServiceHistoryData(firstDisplayData);
   //    // setProducts(firstDisplayData);
   //    setServiceHistoryAllData();
   //    // setAllProducts(sHistory);
   // }, []);
   const handlClickPopup = () => {
      setIsPopupInsertion(true);
   };

   //getting service history Api data
   useEffect(() => {
      getServiceHistoryApi()
         .then((res) => {
            if (res?.status === 200) {
               //=================================================
               // let filtered = res?.data?.data?.reduce((product) => {
               //    // let formateDate = fromDate.split("-").reverse().join("/");
               //    // setFromDate(e.target.value.split("-").reverse().join("/"));

               //    // let productDate = new Date(product["createdAt"]).toLocaleDateString();
               //    let productDate = new Date(product["serviceCentreVisited"]);

               //    return (
               //       // productDate >= new Date(formateDate) &&
               //       productDate >=
               //       new Date(
               //          res?.data?.data?.filter(
               //             (item) => item["serviceCentreVisited"]
               //          )
               //       )
               //       // productDate <= new Date(endDate)
               //    );
               // },0);
               // console.log("res", filtered);
               //============================================================
               setServiceHistoryData(res?.data?.data?.slice(0, 1));
               setServiceHistoryAllData(res?.data?.data);
            }
         })
         .catch((err) => console.log(err));

      getVehicleDetailsApi("T834023XC3943HU4R")
         .then((res) => {
            if (res.status === 200) {
               setVehicleInfoAllData(res?.data?.data);
            }
         })
         .catch((err) => console.log(err));
   }, []);


   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
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
                                             {vehicleInfoAllData.region
                                                ? vehicleInfoAllData.region
                                                : ""}
                                             {vehicleInfoAllData.country
                                                ? vehicleInfoAllData.country
                                                : ""}
                                             {/* {`${vehicleInfoAllData.region}/${vehicleInfoAllData.country}`} */}
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
                                       id="Last Service"
                                       defaultChecked
                                       onChange={radioBtnChangeHandler}
                                    />
                                    &nbsp;
                                    <label htmlFor="Last Service">Last Service</label>
                                 </div>
                                 <div>
                                    <input
                                       type="radio"
                                       value="Last 5 Services"
                                       name="service"
                                       id="Last 5 Services"
                                       onChange={radioBtnChangeHandler}
                                    />
                                    &nbsp;
                                    <label htmlFor="Last 5 Services">Last 5 Services</label>
                                 </div>
                                 <div>
                                    <input
                                       type="radio"
                                       value="Specified Date"
                                       name="service"
                                       onChange={radioBtnChangeHandler}
                                       id="Specified Date"
                                    />
                                    &nbsp;
                                    <label onClick={handlClickPopup} htmlFor="Specified Date">
                                       Specified Date
                                    </label>
                                 </div>
                              </div>
                           </div>

                           <div className="v_h_card_div ">
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
                                                      to={`${routePaths.serviceHistoryDetails}/${item.repairOrderNo}`}
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
                                                   <span>Fault Identified</span>
                                                   <span>
                                                      {
                                                         item.ServiceDiagnostics
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
                                                      Repair / Replacement Done
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
                                 <p className="no_data_found">No data found</p>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceHistory;
