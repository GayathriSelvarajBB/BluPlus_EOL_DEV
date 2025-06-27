import { TAB_NAME } from "app_constants";

const FinishSetup = ({
   stationCountFormik,
   editStationFormik,
   setActiveTab,
}) => {
   return (
      <div className="finish-setup-con">
         <p className="fs-title">Initial configuration summary</p>
         <div className="summary">
            {stationCountFormik?.values?.pdx_file?.name && (
               <div className="pdx-selection">
                  <span>{stationCountFormik?.values?.pdx_selection}</span>
                  <input
                     type="text"
                     value={stationCountFormik?.values?.pdx_file?.name}
                     readOnly
                  />
               </div>
            )}
            <div className="no-of-station">
               <span>Number of stations</span>
               <input
                  type="text"
                  value={editStationFormik?.values?.stations?.length}
                  readOnly
               />
            </div>
         </div>
         <div className="fs-table-container">
            <table className="fs-table-header">
               <thead>
                  <tr>
                     <th className="th-sno">Station No.</th>
                     <th>Station Name</th>
                     <th>Assign ECU from PDX</th>
                  </tr>
               </thead>
            </table>
            {/* table body */}
            <div className="table-scroll-container">
               <table className="table-body">
                  {editStationFormik.values.stations.map((row, index) => (
                     <tr key={row.id}>
                        <td className="td-sno">
                           <div className="common-div sno-con">{index + 1}</div>
                        </td>
                        <td>
                           <div className="common-div">
                              <input
                                 className="station-input"
                                 type="text"
                                 placeholder="Input station name..."
                                 // name="stationName"
                                 readOnly
                                 name={`stations[${index}].stationName`}
                                 value={
                                    editStationFormik.values.stations[index]
                                       .stationName
                                 }
                              />
                           </div>
                        </td>

                        <td>
                           <div className="common-div browse-con">
                              <input
                                 className="ecu-input"
                                 type="text"
                                 placeholder="No ECU assigned"
                                 readOnly
                                 value={
                                    editStationFormik.values.stations[index]
                                       .pdx_file?.name || ""
                                 }
                              />
                           </div>
                        </td>
                     </tr>
                  ))}
               </table>
            </div>
         </div>
         {/* buttons */}
         <div className="button-container finish-setup-btn">
            <span className="btn btn-cancel">Cancel</span>
            <div className="btn-left-con">
               <span
                  className="btn"
                  onClick={() => setActiveTab(TAB_NAME.editStation)}
               >
                  Previous
               </span>
               <button className="btn" type="submit">
                  Create Configuration
               </button>
            </div>
         </div>
      </div>
   );
};

export default FinishSetup;
