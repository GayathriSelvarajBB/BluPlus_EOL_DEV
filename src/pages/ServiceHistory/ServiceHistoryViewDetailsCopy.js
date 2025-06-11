import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import isPopupSlice from "redux/isPopup.slice";
import routePaths from "routes/routePaths";
import { getServiceHistoryApi } from "services/dashboardService";
import PDFdownlaodIcon from "../../assets/images/Downloadicon.svg";
import PDFviewIcon from "../../assets/images/view.svg";

// const sh_details = [
//    {
//       name: "Repair Order No",
//       value: 34935,
//    },
//    {
//       name: "Service Center Visited",
//       value: "22/02/2022",
//    },
//    {
//       name: "Odometer",
//       value: "8000 Km",
//    },
//    {
//       name: "Customer symtoms",
//       value: "Front driver power window is not working",
//    },
//    {
//       name: "Actions bt technician",
//       value: "Checked power window main switch",
//    },
//    {
//       name: "Repair/Replacement Done",
//       value: "Replace the wiring harness of the power window main switch",
//    },
// ];
const ServiceHistoryViewDetailsCopy = () => {
   const history=useNavigate()
   const handleClickToS_historyPage = () => {
      history(routePaths.serviceHistoryCopy)
   };
   const [sHistorySymptomsData, setSHistorySymptomsData] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      getServiceHistoryApi()
         .then((res) => {
            if (res.status === 200) {
               let symptomsData = res?.data?.data?.filter(
                  (item) => item.repairOrderNo === id
               );
               // setSHistoryAllData(res?.data?.data);
               setSHistorySymptomsData(symptomsData);
            }
         })
         .catch((err) => console.log(err));
   }, []);
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <div className="vin_details">
               <div className="dtc-contianer-sec">
                  <div className="dtc-container-list">
                     <div className="s_h_body">
                        <div className="v_h_header_div">
                           <div>
                              <p>Service History</p>
                           </div>
                           <div>
                              <span className="download_span">
                                 {" "}
                                 {/* <PDFviewIcon /> */}
                                 <img src={PDFviewIcon} alt=" view PDF" />
                                 &nbsp; View PDF
                              </span>
                              <span className="download_span">
                                 {" "}
                                 <img
                                    src={PDFdownlaodIcon}
                                    alt="PDF download"
                                 />
                                 &nbsp; Export PDF
                              </span>
                              <Link to={routePaths.serviceHistoryCopy}>
                                 <button onClick={handleClickToS_historyPage}>
                                    BACK
                                 </button>
                              </Link>
                           </div>
                        </div>

                        <div className="v_h_details_div">
                           {/* {sh_details.length > 0 ? (
                              <ul className="">
                                 {sh_details?.map((item, i) => (
                                    <li key={i}>
                                       <span>{item.name}</span>
                                       <span>{item.value}</span>
                                    </li>
                                 ))}
                              </ul>
                           ) : (
                              <p>No data found</p>
                           )} */}

                           {sHistorySymptomsData?.length > 0 ? (
                              <ul className="">
                                 {sHistorySymptomsData?.map((item, i) => {
                                    let symptomsData =
                                       item.ServiceDiagnostics.filter(
                                          (elem) => elem.customerSymptoms
                                       );
                                    let diagnosticsCheck =
                                       item.ServiceDiagnostics.filter(
                                          (elem) => elem.diagnosticsCheck
                                       );
                                    let formatDate = item.serviceCentreVisited
                                       .split("-")
                                       .reverse()
                                       .join("-");

                                    return (
                                       <>
                                          <li key={i}>
                                             <span>Repair Order No.</span>
                                             <span>{item.repairOrderNo}</span>
                                          </li>
                                          <li key={i}>
                                             <span>Service Center Visited</span>
                                             <span>{formatDate}</span>
                                          </li>
                                          <li key={i}>
                                             <span>Odometer</span>
                                             <span>{item.odometerReading}</span>
                                          </li>
                                          <li key={i}>
                                             <span>Customer Symptoms</span>
                                             <span>
                                                {symptomsData?.map(
                                                   (symp, i) => (
                                                      <p key={i}>
                                                         {symp.customerSymptoms}
                                                      </p>
                                                   )
                                                )}
                                             </span>
                                          </li>
                                          <li key={i}>
                                             <span>Action by Technician</span>
                                             <span className="action_by_tech">
                                                {diagnosticsCheck?.map(
                                                   (bytech, i) => (
                                                      <p key={i}>
                                                         {
                                                            bytech.diagnosticsCheck
                                                         }
                                                      </p>
                                                   )
                                                )}
                                             </span>
                                          </li>
                                          <li key={i}>
                                             <span>Repair/Replacement</span>
                                             <span>
                                                {diagnosticsCheck?.map(
                                                   (bytech, i) => (
                                                      <p key={i}>
                                                         {
                                                            bytech.repairReplacement
                                                         }
                                                      </p>
                                                   )
                                                )}
                                             </span>
                                          </li>
                                       </>
                                    );
                                 })}
                              </ul>
                           ) : (
                              <p>No data found</p>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceHistoryViewDetailsCopy;
