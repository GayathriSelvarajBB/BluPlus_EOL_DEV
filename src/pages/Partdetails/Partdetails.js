/* eslint-disable no-prototype-builtins */
import CommonPopup from "components/commonPopup/CommonPopup";
import SideBar from "components/componentFlashingSidebar/ComponentFlashingSideBar";
import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { removeParameter } from "redux/getEcuParameterData.slice";
// import { getEolParameter } from "services/dashboardService";
import { getreadEcuParameterValue } from "socket/socketEmitters";

const Partdetails = () => {
   // const [parameterDrop, setParameterDrop] = useState([{}]);
   // const [parameterList, setParameterList] = useState([{}]);
   // const [ecusScanList, setEcusScanList] = useState([]);
   const [selectedOptions, setSelectedOptions] = useState([]);
   const [sideactive, setSideactive] = useState("");
   const eculistselected = useSelector(
      (state) => state?.updateFileName?.fileName
   );
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   const dispatch = useDispatch();
   // const parameterTable=Object?.values(ecuParameterTable)
   // console.log("ecuParameterTable",parameterTable)
   // eslint-disable-next-line no-unused-vars
   const selectEcu = (ecu) => {
      dispatch(removeParameter([]));
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      const request = {};
      request[ecu] = [
         "ECU Hardware Number",
         "ECU Software Number",
         "Bootloader Version Number",
         "Manufacturing Date",
      ];
      for (let key in request) {
         request[key]?.forEach((value) => {
            formated.ecuParameter = {
               ecuName: key,
               ecuParameter: value,
            };
            getreadEcuParameterValue(formated);
            console.log("monitorObj", key, value, formated);
         });
         console.log("formated", formated);
      }
      setSideactive(ecu);
      console.log("ecu", ecu);
   };
   const Options = Object?.values(ecuParameterTable)?.map((ele) => ({
      label: ele?.ecuParameter,
      value: ele?.ecuParameter,
   }));

   const parameterDropDown = (selected) => {
      setSelectedOptions(selected);
   };
   const Updatelist = ecuParameterTable?.map((obj) => {
      const newItem = {}; 
      console.log("Updatelist", obj);
      if (
         selectedOptions?.find((option) => option?.value === obj?.ecuParameter)
      ) {
         newItem[obj?.ecuParameter] = obj?.ecuParameterValue;
      }
      console.log("Updatelist", newItem, Options, selectedOptions);
      return newItem;
   });
   console.log("Updatelists", Updatelist);
   useEffect(() => {
      removeParameter([]);
   },[]);
   return (
      <div className="routine-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list">
                        <div className="fault-manage-DTC">
                           <div className="sidebar-routine">
                              {Options?.length !== 4 && sideactive!=="" && (
                                 <CommonPopup
                                    child="ECU parameters are loading. Please wait..."
                                    isPopup={true}
                                 />
                              )}
                              <ul className="sidebar-part-list">
                                 {eculistselected?.map((ecu, i) => {
                                    return (
                                       <li
                                          key={i}
                                          className={`${
                                             ecu.item === sideactive
                                                ? "dtc-select active-dtc"
                                                : "dtc-select"
                                          }`}
                                          onClick={() => selectEcu(ecu.item)}
                                       >
                                          <span>{ecu.item}</span>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                           <div className="bus-code-status">
                              <>
                                 <MultiSelect
                                    isopen={true}
                                    options={Options}
                                    value={selectedOptions}
                                    labelledBy="Select"
                                    hasSelectAll={true}
                                    onChange={parameterDropDown}
                                 />

                                 {/* <select>
                                    <option>--select--</option>
                                    {Object?.keys(parameter[0])?.map(
                                       (ele, i) => (
                                          <option key={i}>{ele}</option>
                                       )
                                    )}
                                 </select> */}
                              </>

                              <div className="injector-list">
                                 <table>
                                    <thead>
                                       <tr>
                                          <th>Parameter</th>
                                          <th>Value</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {Updatelist?.map((elm, index) => (
                                          <tr key={index}>
                                             <td>
                                                {" "}
                                                {Object?.keys(
                                                   Updatelist[index]
                                                )?.map((ele, i) => (
                                                   <tr key={i}>
                                                      <td key={i}>{ele}</td>
                                                   </tr>
                                                ))}
                                             </td>
                                             <td>
                                                {Object?.values(
                                                   Updatelist[index]
                                                )?.map((elm, i) => (
                                                   <tr key={i}>
                                                      <td>{elm}</td>
                                                   </tr>
                                                ))}
                                             </td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                              <div className="code"></div>
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

export default Partdetails;
