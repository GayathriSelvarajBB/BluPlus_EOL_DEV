// import SideBar from "components/SideBar/SideBar";
// import "react-toastify/dist/ReactToastify.css";
// import Software from "assets/images/layers.png";
// import Hardware from "assets/images/microprocessor.png";
// import VIN from "assets/images/investigation.png";
// import Refresh from "assets/images/check-update.png";
// // import Clear from "assets/images/clear.png";
// import { useEffect } from "react";
// import { ecuSocket } from "socket";
// import { useDispatch, useSelector } from "react-redux";
// import { clearDtcData, clearEcuParamData } from "redux/ecuParams.slice";
// import {
//    emitFetchAllDTCsEvent,
//    emitFetchEcuParamEvent,
// } from "socket/socketEmitters";
// import { socketProcedures } from "socket/socketConstants";

// function StackIntegration() {
//    const ecuParams = useSelector((state) => state.ecuParams);

//    const dispatch = useDispatch();

//    useEffect(() => {
//       setTimeout(() => {
//          fetchParamsFromECU();
//          fetchAllDTCFromStack();
//       }, 500);
//    }, []);

//    const fetchParamsFromECU = () => {
//       const fields = [socketProcedures.partNo, socketProcedures.vinNumber];
//       // fetching param values
//       fields.forEach((field, i) => {
//          if (ecuSocket.connected) {
//             setTimeout(() => {
//                emitFetchEcuParamEvent(field);
//             }, i * 1000);
//          }
//       });
//    };

//    const fetchAllDTCFromStack = () => {
//       setTimeout(() => {
//          emitFetchAllDTCsEvent();
//       }, 2000);
//    };

//    const refreshParams = () => {
//       dispatch(clearEcuParamData());
//       fetchParamsFromECU();
//    };

//    const refreshDTC = () => {
//       dispatch(clearDtcData());
//       fetchAllDTCFromStack();
//    };

//    const renderLoader = () => {
//       return <span className="param-loader" />;
//    };

//    return (
//       <div className="stack-integration-page">
//          <div className="page-wrapper">
//             <SideBar />
//             <div className="body-wrapper">
//                <div className="stack-integration">
//                   <h1 className="page-title">Demo Page</h1>
//                   <div className="stack-integration-col">
//                      <div className="stack-integration-box">
//                         <div className="dtc-title">
//                            <h2>Diagnostics</h2>
//                            <div className="dtc-clear">
//                               <button title="Refresh" onClick={refreshParams}>
//                                  <img src={Refresh} alt="Refresh" />
//                                  <span>Refresh</span>
//                               </button>
//                            </div>
//                         </div>
//                         <ul className="vehicle-info-primary-stack">
//                            <li>
//                               <img src={Software} alt="info" />
//                               <span className="info-title">
//                                  ECU software number
//                               </span>
//                               <span>
//                                  {ecuParams.softwarePartNumber ??
//                                     renderLoader()}
//                               </span>
//                            </li>
//                            <li>
//                               <img src={Hardware} alt="info" />
//                               <span className="info-title">
//                                  ECU Hardware number
//                               </span>
//                               <span>
//                                  {ecuParams.hardwarePartNumber ??
//                                     renderLoader()}
//                               </span>
//                            </li>
//                            <li>
//                               <img src={VIN} alt="info" />
//                               <span className="info-title">VIN Number</span>
//                               <span>
//                                  {ecuParams.vinNumber ?? renderLoader()}
//                               </span>
//                            </li>
//                         </ul>
//                      </div>
//                      <div className="stack-table-dtc">
//                         <div className="dtc-title">
//                            <h2>DTC List</h2>
//                            <div className="dtc-clear">
//                               {/* <button title="Clear DTC">
//                                  <img src={Clear} alt="Clear" />
//                                  <span>Clear DTC</span>
//                               </button> */}
//                               <button title="Refresh" onClick={refreshDTC}>
//                                  <img src={Refresh} alt="Refresh" />
//                                  <span>Refresh</span>
//                               </button>
//                            </div>
//                         </div>
//                         <table>
//                            <thead>
//                               <tr>
//                                  <td>Fault Code</td>
//                                  <td>Status</td>
//                                  <td>Description</td>
//                               </tr>
//                            </thead>
//                            <tbody>
//                               {ecuParams.dtcData?.map((dtc, i) => (
//                                  <tr key={i}>
//                                     <td>{dtc.dtcCode}</td>
//                                     <td>{dtc.dtcStatus}</td>
//                                     <td>{dtc.dtcDescription}</td>
//                                  </tr>
//                               ))}
//                            </tbody>
//                         </table>
//                         {!ecuParams.dtcData?.length && renderLoader()}
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default StackIntegration;
