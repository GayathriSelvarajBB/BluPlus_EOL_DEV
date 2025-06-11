/* eslint-disable jsx-a11y/label-has-associated-control */
import ClosePopup from "assets/images/close.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserParam } from "redux/userParam.slice";
import {
   getParameterPopupInfo,
   storeParamInfo,
} from "services/dashboardService";
import { getUserTokenData } from "storage/userTokenStorage";

function ParameterPopup(props) {
   const getParamPopupData = props.connectivityParamPopup;
   const openParamPopupInfo = props.openParamPopupInfo;
   const [selectedParams, setSelectedParams] = useState({});
   const [, setParamData] = useState({});
   const [groupedparams, setGroupedparams] = useState({});
   const [selectedBus, setSelectedBus] = useState("");
   const selectedParamsStore = useSelector((state) => state.userParam);

   useEffect(() => {
      if (props.connectivityParamPopup) {
         // Arguments for getParameterPopupInfo method is not passed to fetch all the records irrespective of default flag
         getParameterPopupInfo().then((res) => {
            if (res.status === 200) {
               const group = res.data.data.reduce((obj, item) => {
                  groupData(obj, item);
                  return obj;
               }, {});
               setSelectedBus(Object.keys(group)[0]);
               setGroupedparams(group);
               setParamData(res.data.data);
            }
            function userSelectedList(obj, item) {
               return { ...obj, [item.parameter]: item };
            }
            const paramlist = selectedParamsStore.reduce(userSelectedList, {});
            setSelectedParams(paramlist);
         });
      }
   }, [props.connectivityParamPopup]);

   function groupData(obj, item) {
      if (obj[item.bus]) {
         if (obj[item.bus][item.ecu]) {
            obj[item.bus][item.ecu].push(item);
         } else {
            obj[item.bus][item.ecu] = [item];
         }
      } else {
         obj[item.bus] = {
            [item.ecu]: [item],
         };
      }
   }
   const dispatch = useDispatch();

   const saveChanges = async () => {
      if (selectedParams && Object.keys(selectedParams).length === 12) {
         const body = {
            technician: (await getUserTokenData()).username,

            paramList: { data: Object.values(selectedParams) },
         };

         storeParamInfo(body).then((res) => {
            if (res.status === 200) {
               dispatch(setUserParam(Object.values(selectedParams)));

               // success toast message
               toast.success("succesfully updated");

               openParamPopupInfo();
            }
         });
      } else {
         toast.error("Please select 12 parameters.");
      }
   };
   const handleCheckBox = (paramObj) => () => {
      const updatedValue = { ...selectedParams };
      if (paramObj.parameter in updatedValue) {
         delete updatedValue[paramObj.parameter];
      } else {
         updatedValue[paramObj.parameter] = paramObj;
      }
      setSelectedParams(updatedValue);
   };

   const handleBusSelect = (e) => {
      setSelectedBus(e.currentTarget.dataset.id);
   };
   return (
      <React.Fragment>
         {getParamPopupData && (
            <div className="parameter-popup">
               <div className="parameter-content">
                  <div
                     className="close-popup-parameter"
                     onClick={openParamPopupInfo}
                  >
                     <img src={ClosePopup} alt="Close" />
                  </div>
                  <div className="parameters-list">
                     <div className="parameters-title">
                        <ul>
                           {Object.keys(groupedparams).map((bus) => {
                              return (
                                 <li
                                    onClick={handleBusSelect}
                                    className={`${
                                       selectedBus === bus
                                          ? "active-parameter-title"
                                          : ""
                                    }`}
                                    key={bus}
                                    data-id={bus}
                                 >
                                    <span>{bus} </span>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                     <div className="parameter-input">
                        <form>
                           <div className="ecu-each-parameter-popup">
                              <h4>{selectedBus}</h4>
                              {Object.keys(
                                 groupedparams[selectedBus] || {}
                              ).map((ecu) => {
                                 return (
                                    <>
                                       <h5 key={ecu}>{ecu}</h5>
                                       {groupedparams[selectedBus][ecu].map(
                                          (parameter) => {
                                             return (
                                                <div
                                                   className="form-input-parameters"
                                                   key={parameter.parameter}
                                                >
                                                   <input
                                                      type="checkbox"
                                                      key={parameter.parameter}
                                                      checked={
                                                         selectedParams[
                                                            parameter.parameter
                                                         ]
                                                      }
                                                      onChange={handleCheckBox(
                                                         parameter
                                                      )}
                                                      data-id={
                                                         parameter.parameter
                                                      }
                                                      id={parameter.parameter.replaceAll(
                                                         " ",
                                                         "_"
                                                      )}
                                                   />
                                                   <label
                                                      htmlFor={parameter.parameter.replaceAll(
                                                         " ",
                                                         "_"
                                                      )}
                                                   >
                                                      {parameter.parameter}
                                                   </label>
                                                </div>
                                             );
                                          }
                                       )}
                                    </>
                                 );
                              })}{" "}
                           </div>
                        </form>
                     </div>
                     <div className="save-parameter-btn">
                        <button onClick={openParamPopupInfo}>Cancel</button>
                        <button onClick={saveChanges}>Save</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </React.Fragment>
   );
}

export default ParameterPopup;
