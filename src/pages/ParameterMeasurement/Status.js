/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import { useEffect, useState } from "react";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import {
   // getMeasurementParameterStatus,
   getMeasurementParameterStatusData,
   // getMeasurementStatus,
   // getMesurementEcuList,
} from "services/dashboardService";
import Tablestatus from "./tablestatus";
// import Pagination from "react-js-pagination";
import ReactPaginate from "react-paginate";
// import edit from "../../assets/images/edit.svg";
import Editoption from "./Editoption";
import { ecuStatus } from "app_constants/ecuStatus";
import { getreadEcuStatusValue } from "socket/socketEmitters";
import { ecuNameConstants } from "app_constants/ecuName";
import { useDispatch } from "react-redux";
import { removeStatus } from "redux/getEcuStatus.slice";
// eslint-disable-next-line sonarjs/cognitive-complexity
const Status = (props) => {
   const [checkboxselected, setCheckboxSelected] = useState(false);
   const [input1, setInput1] = useState([]);
   const [checkedItems, setCheckedItems] = useState([]);
   const [count, setCount] = useState(0);
   const [value, setValue] = useState("");
   const [data1, setData1] = useState();
   const [input, setInput] = useState([]);
   const [measurementStatus, setMeasurementStatus] = useState([]);
   const [totalStatus, setTotalStatus] = useState(0);
   // const [tabledata, setTableData] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   // const [sideactive, setSideactive] = useState("ENGINE");
   const [parameter, setParameter] = useState([]);
   // eslint-disable-next-line no-unused-vars
   const [rowsperpage, setRowsPerPage] = useState(9);
   const [ecuEdit, setEcuEdit] = useState(true);
   // const [measurementStatusData,setMeasurementStatusData]=useState([])
   const [ecuEditData, setEcuEditData] = useState([]);
   const [sidebardisable, setSideBarDisable] = useState(false);
   const ecuList = Object.keys(ecuNameConstants);
   const dispatch = useDispatch();

   const Handler = () => {
      setCheckboxSelected(true);
      Measurement();
      setSideBarDisable(true);
   };
   // side Active
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
         setInput1((prev) => [...prev, props.sideactive + ":" + ele]);
      } else {
         checkedItems.map((check) => {
            for (let i = 0; i < check.items.length; i++) {
               if (check.items[i] === ele) {
                  var spliced = check.items.splice(i, 1);
                  console.log("Removed Value => ", spliced);
               }
            }
         });
         for (let j = 0; j < input1.length; j++) {
            if (input1[j] === props.sideactive + ":" + ele) {
               var splice = input1.splice(j, 1);
               console.log("remove", splice);
            }
         }
         setCount(count - 1);
      }
      console.log("checkedItems", checkedItems);
   };
   console.log("checked", input1);
   // clear check box button
   const Clear = () => {
      setData1(false);
      // setChecked([]);
      checkedItems.map((check) => {
         check.items = [];
      });
      setCheckedItems(checkedItems);
      setInput1([]);
      setCount(0);
      setValue("");
   };
   const Back = () => {
      dispatch(removeStatus([]));
      setCheckboxSelected(false);
      setSideBarDisable(false);
   };
   console.log("checkedItems", checkedItems);
   // ecu api call
   const getECUlist = () => {
      // getMesurementEcuList().then((res) => {
      // console.log("side", res);
      setParameter(ecuList?.map((ele) => ele));

      console.log("aaa", checkedItems);
      if (checkedItems.length === 0) {
         console.log("aaa", []);
         let EcuData = ecuList.map((param) => {
            return {
               category: param,
               items: [],
            };
         });
         setCheckedItems(EcuData);
      }
   };
   //ecu parameter api call
   const getMeasurment = (ecu) => {
      console.log("checkeee", checkedItems);
      props.update(ecu);
      // setSideactive(ecu);
      // setChecked([])
      let filterData = ecuStatus?.filter((ele) => ele.name === ecu);
      console.log("object", filterData[0]?.Status);
      setMeasurementStatus(filterData[0]?.Status);
      setTotalStatus(filterData[0]?.Status?.length);
      // getMeasurementStatus(ecu).then((res) => {
      //    console.log("parametrsss", res);
      //    setMeasurementStatus(res.data.data[ecu]);
      //    // setMeasurementStatusData(res.data.data[ecu]?.filter((ele)=>!ele.includes("Horn")))
      //    setTotalStatus(res.data.data[ecu].length);
      // });
      setCurrentPage(0);
      // const act=element.join()
      // const measure={
      //    "ENGINE":checked.join()

      // }
      console.log("measure", props.sideactive);
   };
   // parameter values api call
   const Measurement = () => {
      // ischecked.forEach((element) => {
      //    parameterList.push(element);
      // });

      let monitorObj = {};
      checkedItems.forEach((ele) => {
         monitorObj[ele.category] = ele.items;
      });

      var request = monitorObj;
      let formated = {
         dllCallMethod: "ReadDatabyidentifier",
         ecuStatusParam: {},
      };
      for (let key in request) {
         request[key].forEach((value) => {
            formated.ecuStatusParam = {
             
               ecuName: key,
               ecuStatusParam: value,
            };
            console.log("formated.ecuParameter", formated);
            getreadEcuStatusValue(formated);
         });
      }
      console.log("monitorObj", checkedItems);
      console.log("monitorObj", monitorObj);
      console.log("request", request);

      // getMeasurementParameterStatus(request).then((res) => {
      //    setTableData(res.data.data);
      //    // console.log("table", res.data.data);
      //    console.log("tabledata", tabledata);
      // });
   };
   console.log("parameter", ecuEditData);

   // search function and ecu list useeffect
   useEffect(() => {
      getECUlist();
      if (value.length >= 3 || value === "") {
         setCurrentPage(0);
         const result = measurementStatus.filter((ele) => {
            return ele.toLowerCase().includes(value.toLowerCase());
         });
         setInput(result);
         console.log("ee", result);
      }
      // if(check===false){
      //    setChecked([])
      // }
   }, [value, measurementStatus]);
   useEffect(() => {
      if (count > 0) {
         setData1(true);
      } else {
         setData1(false);
      }
   }, [count]);
   //to keep default as engine
   useEffect(() => {
      getMeasurment(props.sideactive);
   }, [props.sideactive]);
   // useEffect(() => {
   //    getMeasurment(sideactive);
   // }, []);
   const getTheparameter = () => {
      return input.slice(
         currentPage * rowsperpage,
         currentPage * rowsperpage + rowsperpage
      );
   };
   const pageCount = Math.ceil(input.length / rowsperpage);
   const paginateData = ({ selected: pageNumber }) => {
      setCurrentPage(pageNumber);
   };
   const Edit = () => {
      var req = {
         params: {
            ecuName: props.sideactive,
            ecuStatus: "Horn",
         },
      };
      getMeasurementParameterStatusData(req).then((res) => {
         if (res?.status === 200) {
            setEcuEditData(res.data.data);
         }
      });
      setEcuEdit(!ecuEdit);
   };
   // const [hornTable,setHornTable]=useState(false)
   // const CheckHandlerHorn=(e)=>{
   //    if(e.target.checked){
   //       setCount(count+1)
   //       setHornTable(true)
   //    }
   //    else{
   //       setCount(count-1)
   //       setHornTable(false)
   //    }

   // }
   console.log("ecuEditData", ecuEditData);
   // const Horn=measurementStatus?.filter((ele)=>ele.includes("Horn"))
   return (
      <>
         <div className="fault-manage">
            <div className="sidebar-bus">
               {parameter.map((ele, i) => (
                  <div key={i}>
                     <ul className="sidebar-bus-list">
                        <li
                           onClick={() =>
                              !sidebardisable && ecuEdit && getMeasurment(ele)
                           }
                           className={`${
                              ele === props.sideactive
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
            {ecuEdit ? (
               <div className="bus-code-parameter">
                  <ul className="Measurement-header">
                     <li
                        onClick={props.active}
                        className={!props.active ? "param-tab-active" : ""}
                     >
                        Parameters
                     </li>
                     <li
                        onClick={props.active}
                        className={props.active ? "param-tab-active" : ""}
                     >
                        Status
                     </li>
                  </ul>
                  {!checkboxselected ? (
                     <>
                        <div className="Parameter">
                           <div className="Parameter-tab">
                              <span>Total Status: {totalStatus}</span>
                              <span>Selected Status: {count}</span>
                           </div>
                           <div className="Parameter-search">
                              <input
                                 type="search"
                                 onChange={ChangeHandler}
                                 placeholder="Search Status..."
                                 className="search-input"
                              ></input>
                              <Search />
                              {/* {value !== "" ? (
                        <p onClick={(ele) => Submit(ele)}>{suggest}</p>
                     ) : null} */}
                           </div>
                        </div>
                        {getTheparameter().length !== 0 ? (
                           <>
                              <div className="Parameter-box">
                                 {/* {Horn.length>0&&(
                              <div className="Parameter-card">
                                 <input type="checkbox" id={Horn}checked={hornTable} onChange={CheckHandlerHorn}/>
                                 <label htmlFor={Horn}>{Horn}</label>
                                 <img onClick={Edit} src={edit} alt="edit" />
                              </div>
                              )} */}
                                 {getTheparameter().map((ele, i) => {
                                    return (
                                       <div key={i} className="Parameter-card">
                                          <input
                                             checked={input1.includes(
                                                props.sideactive + ":" + ele
                                             )}
                                             type="checkbox"
                                             value={ele.Stauts}
                                             onChange={(e) =>
                                                CheckHandler({ e, ele })
                                             }
                                             id={
                                                props.sideactive +
                                                ":" +
                                                ele.replaceAll(" ", "-")
                                             }
                                          />
                                          <label
                                             htmlFor={
                                                props.sideactive +
                                                ":" +
                                                ele.replaceAll(" ", "-")
                                             }
                                          >
                                             {ele}
                                          </label>
                                       </div>
                                    );
                                 })}
                              </div>
                           </>
                        ) : (
                           <div className="serach-notfound">
                              <span>No matching values found</span>
                           </div>
                        )}

                        <div className="pagination-main">
                           {input.length > 9 ? (
                              <ReactPaginate
                                 // Disabled={paginationDisabled}
                                 activePage={currentPage}
                                 itemsCountPerPage={rowsperpage}
                                 pageCount={pageCount}
                                 pageRangeDisplayed={2}
                                 breakLabel="..."
                                 breakClass="break-me"
                                 marginPagesDisplayed={2}
                                 onPageChange={paginateData}
                                 prevPageText="Previous"
                                 nextPageText="Next"
                                 containerClassName="pagination"
                                 itemClass="page-item"
                                 linkClass="page-link"
                                 active="active"
                                 disabled="disabled"
                              />
                           ) : null}
                        </div>
                     </>
                  ) : (
                     <>
                        <Tablestatus
                           // tabledata1={tabledata}
                           Click={Clear}
                           sideactive={props.sideactive}
                           count={count}
                           // hornTable={hornTable}
                        ></Tablestatus>
                     </>
                  )}
               </div>
            ) : (
               <Editoption
                  ecuEditData={ecuEditData}
                  click={Edit}
                  sideactive={props.sideactive}
               />
            )}
         </div>
         {ecuEdit && (
            <>
               {!checkboxselected && getTheparameter().length !== 0 ? (
                  <div className="button-pagination">
                     <button onClick={Handler} disabled={!data1}>
                        Check Status
                     </button>
                     <button onClick={Clear} disabled={!data1}>
                        Clear all
                     </button>
                  </div>
               ) : (
                  <div className="table-button">
                     {/* <button>Stop</button> */}
                     <button onClick={Back}>Back</button>
                  </div>
               )}
            </>
         )}
      </>
   );
};
export default Status;
