/* eslint-disable indent */
import { useEffect, useState } from "react";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import {
   getMeasurementParameter,
   getMeasurementParameterValues,
} from "services/dashboardService";
// import Pagination from "react-js-pagination";
import ReactPaginate from "react-paginate";
import { Table12 } from "./Graph";
const ParameterMain = (props) => {
   const [checkboxselected, setCheckboxSelected] = useState(false);
   const [input1, setInput1] = useState([]);
   const Handler = () => {
      setCheckboxSelected(!checkboxselected);
      Measurement();
   };
   console.log("ecu", props.ecuName);
   const [value, setValue] = useState("");
   const [count, setCount] = useState(0);
   const ChangeHandler = (e) => {
      const datat = e.target.value;
      setValue(datat);
      console.log(datat);
   };
   const [ischecked, setChecked] = useState([]);
   const [data1, setData1] = useState(false);
   // const [inpu, setInpu] = useState([]);
   const checkHandler = ({ e, ele }) => {
      if (e.target.checked) {
         setData1(true);
         setCount(count + 1);
         setChecked((prev) => [...prev, ele]);
         setInput1((prev) => [...prev, props.ele + ele]);
      } else {
         for (let i = 0; i < ischecked.length; i++) {
            if (ischecked[i] === ele) {
               var spliced = ischecked.splice(i, 1);
               console.log("Removed Value => ", spliced);
            }
         }
         setData1(false);
         setCount(count - 1);
      }
   };
   console.log("object", input1);
   const Clear = (e) => {
      setInput1([]);
      setChecked([]);
      setCount(0);
      setData1(false);
      setCheckboxSelected(false);
   };
   const [input, setInput] = useState([]);
   const [measurementStatus, setMeasurementStatus] = useState([]);
   const [totalStatus, setTotalStatus] = useState(0);
   const [tabledata, setTableData] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
   // eslint-disable-next-line no-unused-vars
   const [rowsperpage, setRowsPerPage] = useState(9);
   let parameterList = [];
   let ecuStatusName = [];
   const Measurement = () => {
      ischecked.forEach((element) => {
         parameterList.push(element);
      });
      props.ecuName.forEach((element) => {
         if (!ecuStatusName.includes(element)) {
            ecuStatusName.push(element);
         }
      });
      var request = {
         params: {
            ecuName: ecuStatusName.join(),
            ecuStatus: parameterList.join(),
         },
      };
      console.log("child", props.ele);
      getMeasurementParameterValues(request).then((res) => {
               setTableData(res.data.data);
               console.log("table", res.data.data);
               console.log(tabledata);
            });
   };
   useEffect(() => {
      if (value.length >= 3 || value === "") {
         const result = measurementStatus.filter((ele) =>
            ele.toLowerCase().includes(value)
         );
         console.log(result);
         setInput(result);
         console.log(input);
      }
   }, [value, measurementStatus]);
   useEffect(() => {
      Measurement();
   }, []);
   const getMeasurment = (ele) => {
      document
         .querySelectorAll("input[type=checkbox]")
         .forEach((el) => (el.checked = false));
      getMeasurementParameter(ele).then((res) => {
         console.log("status", res);
         setMeasurementStatus(res.data.data[props.ele]);
         setTotalStatus(res.data.data[props.ele].length);
         // setCount(0)
         // setData1(false)
      });
      console.log(measurementStatus);
   };
   useEffect(() => {
      getMeasurment(props.ele);
   }, [props.ele]);
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
   return (
      <>
         {!checkboxselected ? (
            <>
               <div className="Parameter">
                  <div className="Parameter-tab">
                     <span>Total Status : {totalStatus}</span>
                     <span>Selected Status : {count}</span>
                  </div>
                  <div className="Parameter-search">
                     <input
                        type="search"
                        onChange={ChangeHandler}
                        placeholder="Search Status..."
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
                        {getTheparameter().map((ele, i) => {
                           return (
                              <div key={i} className="Parameter-card">
                                 <input
                                    checked={input1.includes(props.ele + ele)}
                                    type="checkbox"
                                    value={ele.Stauts}
                                    onChange={(e) => checkHandler({ e, ele })}
                                    id={
                                       props.ele +
                                       "-" +
                                       ele.replaceAll(" ", "-").toLowerCase()
                                    }
                                 />
                                 <label
                                    htmlFor={
                                       props.ele +
                                       "-" +
                                       ele.replaceAll(" ", "-").toLowerCase()
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
                     <span>Found no matching value</span>
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
               <div className="Table-Section">
                  <Table12
                     tabledata={tabledata}
                     ischecked={ischecked}
                     onClick={Clear}
                  ></Table12>
               </div>
            </>
         )}
               <div className="button-pagination">
                        <button onClick={Handler} disabled={!data1}>
                           Check Status
                        </button>
                        <button onClick={Clear} disabled={!data1}>
                           Clear all
                        </button>
                     </div>
      </>
   );
};
export default ParameterMain;
