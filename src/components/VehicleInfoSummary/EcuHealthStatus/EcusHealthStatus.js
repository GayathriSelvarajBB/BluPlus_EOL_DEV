/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { getEachEcuDetails } from "services/dashboardService";

const EcusHealthStatus = ({
   setIsDignoseBtnDisable,
   setEachEcuDetails,
   ecusFaulty,
   isDisabled,
   setDtcList,
   dtcList,
}) => {
   const history = useNavigate();

   //navigate to fault measurement page
   const onClickGotoFaultMngSideBar = async (ecu) => {
      if (ecu.ecuStatus !== "Inactive") {
         history(routePaths.diagnosticMeasurement);
      } else {
         getEachEcuDetails(ecu.ecuName).then((res) => {
            if (res.status === 200) {
               setIsDignoseBtnDisable(true);
               setEachEcuDetails(res);
            }
         });
      }
      localStorage.setItem("faultEcu", JSON.stringify(ecu?.ecuName));
      localStorage.setItem("sidebarMenuName", JSON.stringify("Fault Management"));

   };
   console.log("dtcList",dtcList)
   return (
      <>
         <div className="ecu_health_status">
            <p className="para_heading">ECU&apos;s Health Status</p>
            {dtcList?.length > 0 ? (
               <div className="fault_ecus_con">
                  {dtcList?.map((ecu, i) => {
                     if (ecu?.isDtcFound === "found")
                        return (
                           <div
                              id="fault_ecus_orange"
                              key={i}
                              className="fault_ecus_div fault_ecus_orange"
                           >
                              <p
                                 onClick={() =>
                                    isDisabled &&
                                    onClickGotoFaultMngSideBar(ecu)
                                 }
                              >
                                 {`${ecu?.ecuName} (${ecu?.ecuDtcMapList?.length})`}
                              </p>
                           </div>
                        );
                  })}
               </div>
            ) : null}

            {/* {newData?.length > 0 ? (
               <div className="fault_ecus_con">
                  {newData?.map((ecu, i) => (
                     <div
                        id={`${
                           ecu?.ecuStatus === "Fault"
                              ? "fault_ecus_orange"
                              : "fault_ecus_inactive"
                        }`}
                        key={i}
                        className={`fault_ecus_div ${
                           ecu?.ecuStatus === "Fault"
                              ? "fault_ecus_orange"
                              : "fault_ecus_inactive"
                        }`}
                     >
                        <p
                           onClick={() =>
                              isDisabled && onClickGotoFaultMngSideBar(ecu)
                           }
                        >
                           {ecu?.ecuName}
                           {ecu?.ecuParam > 0 ? ` (${ecu?.ecuParam})` : null}
                        </p>
                     </div>
                  ))}
               </div>
            ) : null} */}
         </div>
      </>
   );
};

export default EcusHealthStatus;
