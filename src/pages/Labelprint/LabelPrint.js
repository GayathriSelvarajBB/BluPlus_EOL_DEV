/* eslint-disable no-unused-vars */
import SideBar from "components/componentFlashingSidebar/ComponentFlashingSideBar";
import qrcode from "../../assets/images/qrcode.png";
import { useEffect, useState } from "react";
import {
   eolBatchID,
   eolSaveComponent,
   getEolLabel,
} from "services/dashboardService";
import { useDispatch, useSelector } from "react-redux";
import { updateFileData } from "redux/filedata.slice";
import { toast } from "react-toastify";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { QRCodeSVG } from "qrcode.react";
import { removeParameter } from "redux/getEcuParameterData.slice";
import { getreadEcuParameterValue } from "socket/socketEmitters";
import CommonPopup from "components/commonPopup/CommonPopup";
const LabelPrintCopy = () => {
   // const [ecusScanList, setEcusScanList] = useState([]);
   // const [data, setData] = useState([]);
   const [ecuSelect, setEcuSelect] = useState([]);
   const [checkboxes, setCheckboxes] = useState([]);
   const [labelvalue, setLabelValue] = useState([]);
   const [engine, setEngine] = useState(false);
   const [bcm, setBcm] = useState(false);
   const [adas, setADAS] = useState(false);
   const [print, setPrint] = useState([]);
   const [isDiasble, setIsDiasble] = useState(true);
   const [selectBatchId1, setSelectBatchId] = useState([]);
   const dispatch = useDispatch();
   const eculistselected1 = useSelector(
      (state) => state?.updateFileName?.fileName
   );
   const ComponentFlashingEcuList = useSelector(
      (state) => state?.updateFileData?.fileData
   );
   const Batchvalue = useSelector(
      (state) => state?.updateInputValue?.inputValue
   );
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   console.log("ecuParameterTable", ecuParameterTable);
   // useEffect(() => {
   //    getEolLabel(ecuSelect).then((res) => {
   //       setLabelValue(res.data.data[0].ecuParameterList);
   //    });
   // }, [ecuSelect]);
   const [count, setCount] = useState([]);
   const formatedTable = ecuParameterTable?.reduce((acc, item) => {
      const ecuName = item?.ecuName;
      const ecuParam = item?.ecuParameter;
      const ecuParamValue = item?.ecuParameterValue;

      // Check if there is an object for the current ecuName
      if (!acc[ecuName]) {
         acc[ecuName] = { ecuName };
      }

      // Set the value for the ecuParameter
      acc[ecuName][ecuParam] = ecuParamValue;

      return acc;
   }, {});
   const formattedArray = Object.values(formatedTable);
   const getEcuSelect = ({ e, ecu, i }) => {
      const isChecked = e.target.checked;
      if (count.indexOf(i) !== -1) {
         setCount(count.filter((checkBox) => checkBox !== i));
      } else {
         setCount([...count, i]);
      }
      const updatedItems = ComponentFlashingEcuList.map((item) =>
         item.ecuName === ecu.item
            ? { ...item, printStatus: isChecked ? "yes" : "no" }
            : item
      );
      console.log("updatedItems", updatedItems);
      dispatch(updateFileData(updatedItems));
      if (isChecked) {
         setIsDiasble(false)
         setEcuSelect((prev) => [...prev, ecu.item]);
      } else {
         setCheckboxes((prevValues) => {
            const newValues = [...prevValues];
            newValues[i] = !newValues[i];
            return newValues;
         });
         for (let j = 0; j < ecuSelect.length; j++) {
            if (ecuSelect[j] === ecu.item) {
               var splice = ecuSelect.splice(j, 1);
               console.log("remove", splice);
            }
         }
         setEcuSelect([...ecuSelect]);
      }
   };
   useEffect(() => {
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      const request = {};
      ecuSelect?.map(
         (ele) =>
            (request[ele] = [
               "ECU Hardware Number",
               "ECU Software Number",
               "Bootloader Version Number",
               "Manufacturing Date",
            ])
      );
      for (let key in request) {
         request[key].forEach((value) => {
            formated.ecuParameter = {
               ecuName: key,
               ecuParameter: value,
            };
            getreadEcuParameterValue(formated);
            console.log("monitorObj", key, value, formated);
         });
         console.log("formated", formated);
      }
      console.log("request", request);
      if(ecuSelect?.length===0){
         setIsDiasble(true)
      }
   }, [ecuSelect]);
   const PrintLabel = () => {
      const content = document.getElementById("divToPrint");
      const printWindow = window.open("", "", "width=600,height=600");
      printWindow.document.open();
      printWindow.document.write(
         "<html><head><title>Print</title></head><body>"
      );
      printWindow.document.write(content.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
      // toast.success("Printed successfully");
      const request = {
         ComponentFlashingEcuList: ComponentFlashingEcuList,
         batchId: Batchvalue,
      };
      eolSaveComponent(request);
   };
   useEffect(() => {
      dispatch(removeParameter([]));
   }, []);
   const formattedArrayFilter = formattedArray?.filter((ele) =>
      ecuSelect?.includes(ele.ecuName)
   );

   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list">
                        {/* =======buttons group on the top===== */}

                        {/* ====Ecu & dtc parameters==== */}
                        <div className="fault-manage-DTC">
                           {(ecuSelect?.length !== formattedArrayFilter?.length)  && (
                              <CommonPopup
                                 child="ECU parameters are loading. Please wait..."
                                 isPopup={true}
                              />
                           )}

                           {/* ====Ecus rendering==== */}
                           <div className="sidebar-routine">
                              {/* <div className="select_all" id="select-all-div">
                                 <span id="select-all-btn">Select all</span>
                                 <input
                                    type="checkbox"
                                    name="select all"
                                    // checked={IsSelectAllCheckboxes}
                                    onChange={getSelectAll}
                                 />
                              </div> */}
                              <ul
                                 className="sidebar-part-list"
                                 id="ul-sidebar-bus-list-dtc"
                              >
                                 {eculistselected1?.map((ecu, i) => (
                                    <li
                                       key={i}
                                       id={ecu.ecuName}
                                       className={`${
                                          count.includes(i)
                                             ? "dtc-select active-dtc"
                                             : "dtc-select"
                                       }`}
                                    >
                                       {ecu.item}
                                       <input
                                          type="checkbox"
                                          name="ecuName"
                                          // checked={isSelectAll}
                                          checked={count.includes(i)}
                                          // // checked={ecuSelect.includes(ecu.ecuName)}
                                          // onChange={(e) =>
                                          //    getDTCApi({ e, ecu })
                                          // }
                                          onChange={(e) =>
                                             getEcuSelect({ e, ecu, i })
                                          }
                                       />
                                    </li>
                                 ))}
                              </ul>
                           </div>
                           {/* =====parameters rendering===== */}
                           <div className="bus-code1">
                              <div className="label-body" id="divToPrint">
                                 <div className="label-list">
                                    {formattedArrayFilter?.map((ele, i) => (
                                       <div
                                          className="label-box"
                                          key={i}
                                          id={i}
                                       >
                                          <h6>{ele?.ecuName}</h6>
                                          <div className="label-data">
                                             <div className="print-table">
                                                <table>
                                                   <tbody>
                                                      <tr>
                                                         <td>HW Part No </td>
                                                         <td>
                                                            {" "}
                                                            :{" "}
                                                            {
                                                               ele?.[
                                                                  "ECU Hardware Number"
                                                               ]
                                                            }
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>SW Part No </td>
                                                         <td>
                                                            {" "}
                                                            :{" "}
                                                            {
                                                               ele?.[
                                                                  "ECU Software Number"
                                                               ]
                                                            }
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Boot Version </td>
                                                         <td>
                                                            {" "}
                                                            :{" "}
                                                            {
                                                               ele?.[
                                                                  "Bootloader Version Number"
                                                               ]
                                                            }
                                                         </td>
                                                      </tr>
                                                      <tr>
                                                         <td>Mfg Date </td>
                                                         <td>
                                                            {" "}
                                                            :{" "}
                                                            {
                                                               ele?.[
                                                                  "Manufacturing Date"
                                                               ]
                                                            }
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                {/* <ul>
                                                   <li>
                                                      <span>VIN</span>:
                                                      <span>{ele["VIN Number"]}</span>
                                                   </li>
                                                   <li>
                                                      <span>HW spanart No </span> :{" "}
                                                      <span>
                                                         {
                                                            ele[
                                                               "ECU_Hardware_Number"
                                                            ]
                                                         }
                                                      </span>{" "}
                                                   </li>
                                                   <li>
                                                      <span>SW spanart No</span> :
                                                      <span>
                                                         {" "}
                                                         {
                                                            ele[
                                                               "ECU_Software_Number"
                                                            ]
                                                         }
                                                      </span>
                                                   </li>
                                                   <li>
                                                      <span>Boot Version</span> :
                                                      <span>
                                                         {" "}
                                                         {
                                                            ele[
                                                               "Bootloader Version Number"
                                                            ]
                                                         }
                                                      </span>
                                                   </li>
                                                </ul> */}
                                             </div>
                                             <div className="label-image">
                                                <QRCodeSVG
                                                   value={Object.keys(ele)
                                                      ?.map(
                                                         (key) =>
                                                            `${key}:${ele[key]}`
                                                      )
                                                      .join(",")}
                                                />
                                                {/* <img
                                                   src={qrcode}
                                                   alt="qrcode"
                                                /> */}
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="Flashing-button">
                           <button onClick={PrintLabel} disabled={isDiasble}>Print</button>
                        </div>
                     </div>
                     {/* legends on the bottom */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LabelPrintCopy;
