import CarSection from "components/VehicleInfoSummary/Car2dSection/CarSection";
import EcusHealthStatus from "components/VehicleInfoSummary/EcuHealthStatus/EcusHealthStatus";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";

const Static2 = () => {
   const [orderedEcus, setOrderedEcus] = useState([]);
   const [ecuFaultParameters, setEcuFaultParameters] = useState([]);
   const [isDignoseBtnDisable, setIsDignoseBtnDisable] = useState(false);
   const [notDetectEcu, setNotDetectEcu] = useState({});
   const [eachEcuDetails, setEachEcuDetails] = useState({});
   const [ecusFaulty, setEecusFaulty] = useState([]);
   const [isDisabled, setisDisabled] = useState(true);
   const [buttondisable, setButtonDisable] = useState(true);
   const [allEcus, AllEcus] = useState([]);
   const [dtcList, setDtcList] = useState([]);

   const Navigate = useNavigate();
   const Next = () => {
      Navigate(routePaths.Static2deatils);
   };
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="body-wrapper">
               <div className="parameter-section body_wrapper">
                  <div className="static-carsection">
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
                        setButtonDisable={setButtonDisable}
                        buttonDisable={buttondisable}
                        AllEcus={AllEcus}
                        allEcus={allEcus}
                        setDtcList={setDtcList}
                        dtcList={dtcList}
                     />
                  </div>
                  <div className="static-section">
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
         <div className="Break-submit">
            <div className="comments">
               <span>Please completed the required actions</span>
            </div>
            <div>
               <button onClick={Next}>
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default Static2;
