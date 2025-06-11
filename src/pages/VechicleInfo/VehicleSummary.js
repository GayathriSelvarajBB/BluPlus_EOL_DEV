import CarSection from "components/VehicleInfoSummary/Car2dSection/CarSection";
// import QuiclAccess from "../../components/VehicleInfoSummary/QuickAccess/QuickAccess";
import SideBar from "components/SideBar/SideBar";
import { useState } from "react";
import EcusHealthStatus from "components/VehicleInfoSummary/EcuHealthStatus/EcusHealthStatus";

const VehicleSummary = () => {
   const [orderedEcus, setOrderedEcus] = useState([]);
   const [ecuFaultParameters, setEcuFaultParameters] = useState([]);
   const [isDignoseBtnDisable, setIsDignoseBtnDisable] = useState(false);
   const [notDetectEcu, setNotDetectEcu] = useState({});
   const [eachEcuDetails, setEachEcuDetails] = useState({});
   const [ecusFaulty, setEecusFaulty] = useState([]);
   const [allEcus, AllEcus] = useState([]);
   const [dtcList, setDtcList] = useState([]);

   const [isDisabled, setisDisabled] = useState(true);

   return (
      <div className="vehicle-info-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="parameter-section body_wrapper">
                  <CarSection
                     setOrderedEcus={setOrderedEcus}
                     setEcuFaultParameters={setEcuFaultParameters}
                     setIsDignoseBtnDisable={setIsDignoseBtnDisable}
                     isDignoseBtnDisable={isDignoseBtnDisable}
                     setNotDetectEcu={setNotDetectEcu}
                     notDetectEcu={notDetectEcu}
                     setEachEcuDetails={setEachEcuDetails}
                     eachEcuDetails={eachEcuDetails}
                     setEecusFaulty={setEecusFaulty}
                     ecusFaulty={ecusFaulty}
                     setisDisabled={setisDisabled}
                     isDisabled={isDisabled}
                     //
                     AllEcus={AllEcus}
                     allEcus={allEcus}
                     setDtcList={setDtcList}
                     dtcList={dtcList}
                  />
                  <section className="ecu_section">
                     <EcusHealthStatus
                        orderedEcus={orderedEcus}
                        ecuFaultParameters={ecuFaultParameters}
                        setIsDignoseBtnDisable={setIsDignoseBtnDisable}
                        isDignoseBtnDisable={isDignoseBtnDisable}
                        setNotDetectEcu={setNotDetectEcu}
                        setEachEcuDetails={setEachEcuDetails}
                        ecusFaulty={ecusFaulty}
                        isDisabled={isDisabled}
                        //
                        AllEcus={AllEcus}
                        allEcus={allEcus}
                        setDtcList={setDtcList}
                        dtcList={dtcList}
                     />
                     {/* <div className="quick_access_link">
                        <p className="para_heading">Quick Access Links</p>
                        <QuiclAccess />
                     </div> */}
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
};

export default VehicleSummary;
