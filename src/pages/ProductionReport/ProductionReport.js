/* eslint-disable no-unused-vars */
import SideBar from "components/componentFlashingSidebar/ComponentFlashingSideBar";
import { ReactComponent as SearchIcon } from "../../assets/images/search.svg";
import { useEffect, useState } from "react";
import { eolGetComponent } from "services/dashboardService";
const ProductionReport = () => {
   const [batchid, setBatchId] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [batchDetails, setBatchDetails] = useState([]);
   useEffect(() => {
      eolGetComponent(batchid, startDate, endDate).then((res) => {
         setBatchDetails(res.data.data);
      });
   }, [batchid, startDate, endDate]);
   const batchSearch = (e) => {
      const value = e.target.value;
      setBatchId(value);
   };
   const FromDate = (e) => {
      setStartDate(e.target.value);
   };
   const End = (e) => {
      setEndDate(e.target.value);
   };
   const ClearData=()=>{
      setStartDate("")
      setEndDate("")
      setBatchId("")
   }
   let today = new Date().toLocaleDateString("fr-ca");
   console.log("batchDetais", batchDetails?.length);
   return (
      <div className="routine-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="production-container">
                  <div className="production-contianer-sec">
                     <div className="Production-Report">
                        <div className="bullentin_body">
                           <div className="search_bar_div">
                              <input
                                 type="search"
                                 placeholder="Search by Batch ID"
                                 onChange={batchSearch}
                              ></input>
                              <SearchIcon className="search_icon" />
                              <input
                                 type="date"
                                 className="FromDate date"
                                 onChange={FromDate}
                                 value={startDate}
                              />
                              <input
                                 type="date"
                                 className="EndDate date"
                                 onChange={End}
                                 value={endDate}
                                 max={today}
                              />
                              <button onClick={ClearData}>Clear</button>
                           </div>
                        
                           <div className="production-table">
                              <table className="table_batch">
                                 <thead>
                                    <tr>
                                       <th>S.NO</th>
                                       <th>Batch</th>
                                       <th>ECU Name</th>
                                       <th>Hardware PartNumber</th>
                                       <th>Software PartNumber</th>
                                       <th>Boot Version</th>
                                       <th>Activity Date</th>
                                       <th>Flash Status</th>
                                       <th>Print</th>
                                    </tr>
                                 </thead>
                                 {batchDetails?.length > 0 && (
                                    <tbody>
                                       <>
                                          {batchDetails?.map((item, i) => (
                                             <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item.batchId}</td>
                                                <td>{item.ECU_Name}</td>
                                                <td>
                                                   {item.ECU_Hardware_Number}
                                                </td>
                                                <td>
                                                   {item.ECU_Software_Number}
                                                </td>
                                                <td>
                                                   {
                                                      item.bootloaderVersionNumber
                                                   }
                                                </td>
                                                <td>{item.flashDate}</td>
                                                <td>{item.flashStatus}</td>
                                                <td>{item.printStatus}</td>
                                             </tr>
                                          ))}
                                       </>
                                    </tbody>
                                 )}
                              </table>
                              {batchDetails?.length ===0 && (
                                 <div className="no-datafound">
                                    <p>No Data Found</p>
                                 </div>
                              )}
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

export default ProductionReport;
