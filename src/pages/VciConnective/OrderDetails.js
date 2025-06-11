import vciConnective from "../../assets/images/vciconnective.png";
import equal from "../../assets/images/tick.png";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { useEffect } from "react";
import { fetchWorIDInformation } from "services/dashboardService";
import { useState } from "react";
import { removeAllScanEcuListRedux } from "redux/ecusScanList.slice";
import { removeAllDTCListRedux } from "redux/ecuDtcList.slice";
import { useDispatch, useSelector } from "react-redux";

// import { useSelector } from "react-redux";
// import notequal from"../../assets/images/notequal.png"
const OrderDetails = () => {
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const [details, setDetails] = useState({});
   const [isbuttonDisable, setIsButtonDisable] = useState();
   const dispatch = useDispatch();
   useEffect(() => {
      fetchWorIDInformation(OrderNumber)
         .then((res) => {
            if (res?.data?.status === 200) {
               setDetails(res?.data?.data?.[0]);
               setIsButtonDisable(false);
            } else {
               setIsButtonDisable(true);
            }
            console.log("data", res?.data);
         })
         .catch((err) => console.log("err", err));
   }, []);
   const Navigate = useNavigate();
   const FlowStatus = () => {
      dispatch(removeAllScanEcuListRedux([]));
      dispatch(removeAllDTCListRedux([]));
      Navigate(routePaths.EolFlow);
   };
   return (
      <div className="vechile-eol-container">
         <div className="vechile-eol-contianer-sec">
            <div className="vci-connected-car">
               <img src={vciConnective} alt="vciConnective" />
               <img src={equal} alt="equal" />
               <img src={equal} alt="equal" />
               <div className="fetch-vci">
                  <div>
                     <div className="order-details">
                        <div className="list-details">
                           <table>
                              <tbody>
                                 {Object?.entries(details)?.map(
                                    ([key, value], i) => (
                                       <tr key={i}>
                                          <td>{key}</td>
                                          <td>
                                             <input
                                                type="text"
                                                value={value}
                                                key={i}
                                                disabled={true}
                                             />
                                          </td>
                                       </tr>
                                    )
                                 )}
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="fetch-button">
                        <button onClick={FlowStatus} disabled={isbuttonDisable}>
                           Next
                        </button>
                     </div>
                     {!isbuttonDisable ? (
                        <div className="connection-check">
                           <span>Vehicle Connection Established</span>
                        </div>
                     ) : (
                        <div className="connection-check error">
                           <span>
                              Session Token Expired, please login again
                           </span>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderDetails;
