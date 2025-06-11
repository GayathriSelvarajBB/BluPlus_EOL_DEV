import CarSection from "components/VehicleInfoSummary/Car2dSection/CarSection";
import EcusHealthStatus from "components/VehicleInfoSummary/EcuHealthStatus/EcusHealthStatus";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllDTCListRedux } from "redux/ecuDtcList.slice";
import routePaths from "routes/routePaths";

const StaticStation1 = () => {
   const [orderedEcus, setOrderedEcus] = useState([]);
   const [ecuFaultParameters, setEcuFaultParameters] = useState([]);
   const [isDignoseBtnDisable, setIsDignoseBtnDisable] = useState(false);
   const [notDetectEcu, setNotDetectEcu] = useState({});
   const [eachEcuDetails, setEachEcuDetails] = useState({});
   const [ecusFaulty, setEecusFaulty] = useState([]);
   const [isDisabled, setisDisabled] = useState(true);
   // const [buttondisable, setButtonDisable] = useState(true);
   const [allEcus, AllEcus] = useState([]);
   const [dtcList, setDtcList] = useState([]);
   const ParameterDetails = [
      "Flash Programing",
      "Read HW Part Number",
      "Read SW Part Number",
      "Write VIN",
      "Read DTC",
   ];
   const navgaiate = useNavigate();
   const dispatch=useDispatch()
   const Next = () => {
      navgaiate(routePaths.Static1Details);
      dispatch(removeAllDTCListRedux([]))
   };
   console.log("object", ParameterDetails);
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
                        //
                        AllEcus={AllEcus}
                        allEcus={allEcus}
                        setDtcList={setDtcList}
                        dtcList={dtcList}
                     />
                     <table className="static-table">
                        <thead>
                           <th>Parameter</th>
                        </thead>
                        <tbody>
                           {ParameterDetails?.map((ele, i) => (
                              <tr key={i}>
                                 <td>
                                    <input type="checkbox" checked={true} />
                                    <span>{ele}</span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
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
                      
                     </div> */}
                     </section>
                  </div>
               </div>
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>Please complete required actions</span>
            </div>
            <div>
               <button  onClick={Next}>
                  Next
               </button>
            </div>
         </div>
      </div>
   );
};

export default StaticStation1;
