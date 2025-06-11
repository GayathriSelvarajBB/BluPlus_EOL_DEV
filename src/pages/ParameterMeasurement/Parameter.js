/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsx-a11y/label-has-associated-control */
import SideBar from "components/SideBar/SideBar";
import { useEffect, useState } from "react";
import Status from "./Status";
import { Table12 } from "./table3";
import { ReactComponent as Search } from "../../assets/images/search.svg";
// import {
//    // getMeasurementParameter,
//    // getMeasurementParameterValues,
//    // getMesurementEcuList,
// } from "services/dashboardService";
import ReactPaginate from "react-paginate";
// import edit from "../../assets/images/edit.svg";
import ReadEcu from "./ReadEcu";
import { getreadEcuParameterValue } from "socket/socketEmitters";
import { useDispatch, useSelector } from "react-redux";
import { ecuNameConstants } from "app_constants/ecuName";
import { ecuParameter } from "app_constants/ecuParameter";
import { removeParameter } from "redux/getEcuParameterData.slice";
import { removeStatus } from "redux/getEcuStatus.slice";
const Parameter = () => {
   const [value, setValue] = useState("");
   const [input, setInput] = useState([]);
   const [data, setData] = useState(false);
   const [count, setCount] = useState(0);
   const [sideactive, setSideactive] = useState("ENGINE");
   const [active, setActive] = useState(true);
   const [checkedItems, setCheckedItems] = useState([]);
   const [data1, setData1] = useState(false);
   const [parameter, setParameter] = useState([]);

   const [totalParameter, setTotalParameter] = useState();
   const [tabledata, setTableData] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   // eslint-disable-next-line no-unused-vars
   const [rowsperpage, setRowsperpage] = useState(9);
   const [input1, setInput1] = useState([]);
   const [check, setcheck] = useState({});
   const [readEcu, setReadEcu] = useState(true);
   const [MeasurementParamenterData, setMeasurementParamenterData] = useState([
      "VIN Number",
      "Battery Voltage",
   ]);
   const dispatch = useDispatch();
   const ecuList = Object.keys(ecuNameConstants);
   const ecuParameterTable = useSelector(
      (state) => state?.getParameterData?.ecuParameter
   );
   // const getCurrentSelectedList = [];
   console.log("check", check);
   //  Start Monitoring
   const Handler = () => {
      Measurement();
      setData(true);
      setCurrentPage(0);
   };
   // side Active
   const Active = () => {
      setActive(!active);
      dispatch(removeStatus([]));
      // setSideactive("ENGINE");
   };
   const update = (ecu) => {
      setSideactive(ecu);
   };
   // change handler for search
   const ChangeHandler = (e) => {
      const datat = e.target.value;
      setValue(datat);
   };

   // check box handler
   // eslint-disable-next-line sonarjs/cognitive-complexity
   const CheckHandler = ({ e, ele }) => {
      if (e.target.checked) {
         let item = e.target.id.split(":");
         let key = item[0].toString();
         let value = item[1].split("-").join(" ");
         checkedItems.map((data, i) => {
            if (data.category === key) {
               data.items.push(value);
            }
            // return data;
         });
         setCheckedItems(checkedItems);
         setCount(count + 1);
         setInput1((prev) => [...prev, sideactive + ":" + ele]);
      } else {
         checkedItems.map((check) => {
            for (let i = 0; i < check.items?.length; i++) {
               if (check.items[i] === ele) {
                  var spliced = check.items.splice(i, 1);
                  console.log("Removed Value => ", spliced);
               }
            }
         });
         for (let j = 0; j < input1?.length; j++) {
            if (input1[j] === sideactive + ":" + ele) {
               var splice = input1.splice(j, 1);
               console.log("remove", splice);
            }
         }

         setCount(count - 1);
      }
      console.log("checkedItems", checkedItems);
   };

   // const test1 = checkedItems?.map((ele) => ele.category);
   // const test2 = checkedItems?.map((ele) => ele.items);
   console.log("checked", ecuParameterTable);
   // console.log("checked", test1);
   // clear check box button
   const Clear = () => {
      setData1(false);
      checkedItems.map((check) => (check.items = []));
      setCheckedItems(checkedItems);
      dispatch(removeParameter([]));
      setInput1([]);
      setCount(0);
      setData(false);
      setValue("");
      setVinTable(false);
   };
   const Back = () => {
      dispatch(removeParameter([]));
      setData1(true);
      setData(false);
   };
   // ecu api call
   const getECUlist = () => {
      // getMesurementEcuList().then((res) => {
      //    if (res?.status === 200) {
      //       console.log("side", res);
      //       setParameter(res.data.data);
      //    }
      setParameter(ecuList?.map((ele) => ele));
      if (checkedItems?.length === 0) {
         let EcuData = ecuList?.map((param) => {
            return {
               category: param,
               items: [],
            };
         });
         setCheckedItems(EcuData);
         console.log("ecuList", ecuList);
      }
   };
   //ecu parameter api call
   const getMeasurment = (ecu) => {
      setcheck(false);
      setSideactive(ecu);
      setCurrentPage(0);
      let filterData = ecuParameter?.filter((ele) => ele.name === ecu);
      console.log("object", filterData[0]?.Parameter);
      // getMeasurementParameter(ecu).then((res) => {
      //    if (res?.status === 200) {
      //       console.log("parametrsss", res);
      //       setMeasurementParamenter(res?.data?.data[ecu]);
      setMeasurementParamenterData(filterData[0]?.Parameter);
      setTotalParameter(filterData[0]?.Parameter?.length);
   };
   // });
   console.log("measure", sideactive);
   // parameter values api call
   const Measurement = () => {
      let monitorObj = {};
      checkedItems.forEach((ele) => {
         monitorObj[ele.category] = ele.items;
      });
      var request = monitorObj;

      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuParameter: {},
      };
      for (let key in request) {
         request[key].forEach((value) => {
            formated.ecuParameter = {
               ecuName: key,
               ecuParameter: value,
            };
            getreadEcuParameterValue(formated);
            console.log("monitorObj", key, value, formated,monitorObj);
         });
         console.log("formated", formated);
      }
      console.log("monitorObj", checkedItems);

      setTableData(ecuParameterTable);
   };

   console.log("tabledata", tabledata);

   // search function and ecu list useeffect
   useEffect(() => {
      if (value?.length >= 3 || value === "") {
         // setCurrentPage(0);
         const result = MeasurementParamenterData?.filter((ele) => {
            return ele?.toLowerCase()?.includes(value.toLowerCase());
         });
         setInput(result);
         console.log("ee", result);
      }
   }, [value, MeasurementParamenterData]);
   //to keep default as engine
   useEffect(() => {
      getMeasurment(sideactive);
   }, [sideactive]);
   useEffect(() => {
      if (count > 0) {
         setData1(true);
      } else {
         setData1(false);
      }
   }, [count]);
   // const [vinNumber, setVinNumber] = useState([]);
   // useEffect(() => {
   //    if (value.length >= 3 || value === "") {
   //       setCurrentPage(0);
   //       const result = measurementparameter?.filter((ele) =>
   //          ele?.includes("VIN Number")
   //       );
   //       setVinNumber(result);
   //       console.log("vinNumber", result);
   //    }
   // }, [value, measurementparameter]);
   const getTheparameter = () => {
      return input?.slice(
         currentPage * rowsperpage,
         currentPage * rowsperpage + rowsperpage
      );
   };
   const pageCount = Math?.ceil(input?.length / rowsperpage);
   const paginateData = ({ selected: pageNumber }) => {
      setCurrentPage(pageNumber);
   };

   const Read = () => {
      setReadEcu(!readEcu);
   };
   const [vintable, setVinTable] = useState(false);

   useEffect(() => {
      getECUlist();
   }, []);

   // console.og("vinNumber",vinNumber)
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="parameter-contianer-sec">
                     <div className="parameter-contianer">
                        {!active ? (
                           <Status
                              onCheck={CheckHandler}
                              count={count}
                              onChange={ChangeHandler}
                              sideactive={sideactive}
                              active={Active}
                              parameter={parameter}
                              update={update}
                           />
                        ) : (
                           <div className="fault-manage">
                              <div className="sidebar-bus">
                                 {parameter.map((ele, i) => (
                                    <div key={i} id="sidebar-bus-list-div">
                                       <ul
                                          className="sidebar-bus-list"
                                          id="sidebar-bus-list"
                                       >
                                          <li
                                             onClick={() =>
                                                !data &&
                                                readEcu &&
                                                getMeasurment(ele)
                                             }
                                             className={`${
                                                ele === sideactive
                                                   ? "dtc-values active-dtc"
                                                   : "dtc-values"
                                             }`}
                                          >
                                             <span>{ele}</span>
                                          </li>
                                       </ul>
                                    </div>
                                 ))}
                              </div>
                              {readEcu ? (
                                 <>
                                    <div className="bus-code-parameter">
                                       <ul className="Measurement-header">
                                          <li
                                             onClick={Active}
                                             className={
                                                active ? "param-tab-active" : ""
                                             }
                                          >
                                             Parameters
                                          </li>
                                          <li
                                             onClick={Active}
                                             className={
                                                !active
                                                   ? "param-tab-active"
                                                   : ""
                                             }
                                          >
                                             Status
                                          </li>
                                       </ul>
                                       {!data ? (
                                          <>
                                             <div className="Parameter">
                                                <div className="Parameter-tab">
                                                   <span>
                                                      Total Parameters:{" "}
                                                      {totalParameter}
                                                   </span>
                                                   <span>
                                                      Selected Parameters:{" "}
                                                      {count}
                                                   </span>
                                                </div>
                                                <div className="Parameter-search">
                                                   <input
                                                      className="search-input"
                                                      type="search"
                                                      placeholder="Search Parameter..."
                                                      onChange={ChangeHandler}
                                                   ></input>
                                                   <Search />
                                                   {/* {value !== "" ? (
                                                   <p>{suggest}</p>
                                                ) : null} */}
                                                </div>
                                             </div>

                                             {getTheparameter()?.length !==
                                             0 ? (
                                                   <>
                                                      <div className="Parameter-box">
                                                         {getTheparameter()?.map(
                                                            (ele, i) => {
                                                               return (
                                                                  <div
                                                                     key={i}
                                                                     id={i}
                                                                     // key={sideactive+"-"+i}
                                                                     // id={sideactive+"-"+i}
                                                                     className="Parameter-card"
                                                                  >
                                                                     <input
                                                                        type="checkbox"
                                                                        data-currentecu={
                                                                           sideactive
                                                                        }
                                                                        onChange={(
                                                                           e
                                                                        ) =>
                                                                           CheckHandler(
                                                                              {
                                                                                 e,
                                                                                 ele,
                                                                              }
                                                                           )
                                                                        }
                                                                        checked={input1.includes(
                                                                           sideactive +
                                                                           ":" +
                                                                           ele
                                                                        )}
                                                                        id={
                                                                           sideactive +
                                                                        ":" +
                                                                        ele.replaceAll(
                                                                           " ",
                                                                           "-"
                                                                        )
                                                                        }
                                                                        value={ele}
                                                                     />
                                                                     <label
                                                                        htmlFor={
                                                                           sideactive +
                                                                        ":" +
                                                                        ele.replaceAll(
                                                                           " ",
                                                                           "-"
                                                                        )
                                                                        }
                                                                     >
                                                                        {ele}
                                                                     </label>
                                                                  </div>
                                                               );
                                                            }
                                                         )}
                                                         {/* {ischecked} */}
                                                      </div>
                                                   </>
                                                ) : (
                                                   <div className="serach-notfound">
                                                      <span>
                                                      No matching values found
                                                      </span>
                                                   </div>
                                                )}

                                             <div className="pagination-main">
                                                {input?.length > 9 && (
                                                   <ReactPaginate
                                                      // Disabled={paginationDisabled}
                                                      activePage={currentPage}
                                                      itemsCountPerPage={
                                                         rowsperpage
                                                      }
                                                      pageCount={pageCount}
                                                      pageRangeDisplayed={2}
                                                      breakLabel="..."
                                                      breakClass="break-me"
                                                      marginPagesDisplayed={2}
                                                      onPageChange={
                                                         paginateData
                                                      }
                                                      previousLabel="< Prev"
                                                      nextLabel="Next >"
                                                      containerClassName="pagination"
                                                      itemClass="page-item"
                                                      linkClass="page-link"
                                                      active="active"
                                                      disabled="disabled"
                                                   />
                                                )}
                                             </div>
                                          </>
                                       ) : (
                                          <div className="Table-Section">
                                             <Table12
                                                vinTable={vintable}
                                                tabledata={tabledata}
                                                onClick={Back}
                                                sideactive={sideactive}
                                                count={count}
                                             ></Table12>
                                          </div>
                                       )}
                                    </div>
                                 </>
                              ) : (
                                 <ReadEcu click={Read} />
                              )}
                           </div>
                        )}
                        {!data &&
                           active === true &&
                           readEcu &&
                           getTheparameter()?.length !== 0 && (
                           <div className="button-pagination">
                              <button onClick={Handler} disabled={!data1}>
                                    View/Monitor
                              </button>
                              <button onClick={Clear} disabled={!data1}>
                                    Clear all
                              </button>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Parameter;
