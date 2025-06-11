import SideBar from "components/SideBar/SideBar";
import qrcode from "../../assets/images/qrcode.png";
import { useEffect, useState } from "react";
import { getEolLabel } from "services/dashboardService";
import { useSelector } from "react-redux";
const LabelPrintCopy = () => {
   // const [ecusScanList, setEcusScanList] = useState([]);
   // const [data, setData] = useState([]);
   const [ecuSelect, setEcuSelect] = useState([]);
   const [labelvalue, setLabelValue] = useState([]);
   const Batchvalue = useSelector(
      (state) => state?.updateInputValue?.inputValue
   );
   const eculistselected1 = useSelector(
      (state) => state?.updateFileName?.fileName
   );
   // const [isSelectAll,setIsSelectAll]=useState(false)
   // useEffect(() => {
   //    getScanEcusList().then((res) => {
   //       console.log("object", res.data.data.ecuData);
   //       setEcusScanList(res.data.data.ecuData);
   //    });
   // }, []);
   useEffect(() => {
      getEolLabel(ecuSelect).then((res) => {
         setLabelValue(res.data.data[0].ecuParameterList);
      });
   }, [ecuSelect]);
   const [count, setCount] = useState([]);
   const getEcuSelect = ({ e, ecu, i }) => {
      if (count.indexOf(i) !== -1) {
         setCount(count.filter((checkBox) => checkBox !== i));
      } else {
         setCount([...count, i]);
      }
      if (e.target.checked) {
         setEcuSelect((prev) => [...prev, ecu.item]);
      } else {
         for (let j = 0; j < ecuSelect.length; j++) {
            if (ecuSelect[j] === ecu.item) {
               var splice = ecuSelect.splice(j, 1);
               console.log("remove", splice);
            }
         }
         setEcuSelect([...ecuSelect]);
      }
   };
   console.log("Batchvalue", Batchvalue);
   // useEffect(() => {
   //    ecusScanList?.map((ele) => setData((prev) => [...prev, ele.ecuName]));
   // }, [ecusScanList]);
   // const dummyData = [
   //    { name: "taukir", id: 25 },
   //    { name: "yash", id: 22 },
   //    { name: "yash", id: 22 },
   // ];
   // const getSelectAll = () => {
   //    for (let i = 0; i < ecuSelect.length; i++) {
   //       // setEcuSelect()
   //       console.log("dd", ecuSelect[i]);
   //    }
   //    // ecusScanList.map((ele)=>(
   //    //    setData((prev)=>[...prev,ele.ecuName])
   //    // ))
   //    // setIsSelectAll(true)
   //    // console.log("dd",data)
   // };
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec">
                     <div className="dtc-container-list">
                        {/* =======buttons group on the top===== */}
                        {/* <div className="left_btns_div" id="left_btns_div">
                              <button
                                 onClick={getSymptomData}
                                 id="Symptoms-Diagnostics-btn"
                              >
                                 <span>Symptoms Diagnostics</span>
                              </button>
                              <button
                                 onClick={getTechBulletinData}
                                 id="Technical-Bulletin-btn"
                              >
                                 <span>Technical Bulletin</span>
                              </button>
                           </div> */}

                        {/* ====Ecu & dtc parameters==== */}
                        <div className="fault-manage-DTC">
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
                              <div className="label-body">
                               
                                 <div className="label-list">
                                    {labelvalue?.map((ele, i) => (
                                       <div className="label-box" key={i}>
                                          {ecuSelect?.map((ele, i) => (
                                             <h6 key={i}>{i}</h6>
                                          ))}
                                          <div className="label-data">
                                             <div>
                                                <ul>
                                                   <li>
                                                      <p>VIN</p>:
                                                      <p>{ele.vinNumber}</p>
                                                   </li>
                                                   <li>
                                                      <p>HW Part No </p> :{" "}
                                                      <p>
                                                         {
                                                            ele[
                                                               "ECU-HardwareNumber"
                                                            ]
                                                         }
                                                      </p>{" "}
                                                   </li>
                                                   <li>
                                                      <p>SW Part No</p> :
                                                      <p>
                                                         {" "}
                                                         {
                                                            ele[
                                                               "ECU-SoftwareNumber"
                                                            ]
                                                         }
                                                      </p>
                                                   </li>
                                                   <li>
                                                      <p>Boot Version</p> :
                                                      <p>
                                                         {" "}
                                                         {
                                                            ele[
                                                               "bootLoaderVersionNumber"
                                                            ]
                                                         }
                                                      </p>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div className="label-image">
                                                <img
                                                   src={qrcode}
                                                   alt="qrcode"
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="Flashing-button">
                           <button>Print</button>
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
