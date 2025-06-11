import vciConnective from "../../assets/images/vciconnective.png";
import notequal from "../../assets/images/NotEqual1.png";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OrderInputValue } from "redux/orderDetails.slice";
import { createSocketConnection, ecuSocket } from "socket";
import { emitGetConnectivityStatusEvent } from "socket/socketEmitters";
import { clearVciInfo } from "redux/vciInfo.slice";
import { setVciStatusRedux } from "redux/vciStatus.slice";
import { socketEvents } from "socket/socketConstants";
// import notequal from"../../assets/images/notequal.png"
const VciConnective = () => {
   const [orderNumber, setOrderNumber] = useState("2023060744");
   // eslint-disable-next-line no-unused-vars
   const [active, setActive] = useState(false);
   // const [disable,setDisable] = useState(false)
   const [command, setCommand] = useState("");
   const [fetchcommand, setFetchCommand] = useState("");
   const Navigate = useNavigate();
   const dispatch = useDispatch();


   useEffect(() => {
      // establish socket connection
      createSocketConnection().then(() => {
         // emitting event to fetch VCI info
         emitGetConnectivityStatusEvent();
         // emitGetVciInfoEvent(); //checking h/w is connected or not
         // getVciInfo();
         // detaching the connectivity status event listener before attachin
      });
      ecuSocket.off(socketEvents.connectivityResponse);
      // attaching connectivity status event listener
      ecuSocket.on(
         socketEvents.connectivityResponse,
         handleConnectivityStatusSocketResponse
      );
   }, []);
   const handleConnectivityStatusSocketResponse = (data) => {
      dispatch(setVciStatusRedux(data?.error)); //passing true/false
      console.log("dd data", data);
      if (data?.error && data?.message === "VCI is disconnected.") {
         // checkVciInfoAfterDelay();
         // emitGetVciInfoEvent()
         setActive(true)
         dispatch(clearVciInfo());
      }else{
         setActive(false)
      }
      checkConnectivityAfterDelay();
   };
   const checkConnectivityAfterDelay = () => {
      setTimeout(() => {
         emitGetConnectivityStatusEvent();
      }, 3000);
   };
   const FetchOrder = (e) => {
      setOrderNumber(e.target.value);
   };
   const FetchOrderDetails = () => {
      setFetchCommand("Please wait while fetch the details.");
      setTimeout(() => {
         Navigate(routePaths.OrderDetails);
      }, 3000);
   };
   useEffect(() => {
      if (orderNumber.length > 10 || orderNumber?.length===0) {
         setActive(true);
         setCommand("Please Enter Valid Order Number");
      } else {
         setActive(false);
         setCommand("");
      }
   }, [orderNumber]);
   
   dispatch(OrderInputValue(orderNumber));
   console.log("order", orderNumber.length);
   return (
      <div className="vechile-eol-container">
         <div className="vechile-eol-contianer-sec">
            <div className="vci-connected-car">
               <img src={vciConnective} alt="vciConnective" />
               <img src={notequal} alt="equal" />
               <img src={notequal} alt="equal" />
               <div className="fetch-vci">
                  <div className="fetch-order">
                     <span>Order</span>
                     <input
                        type="text"
                        value={orderNumber}
                        maxLength="10"
                        onChange={FetchOrder}
                        // disabled={true}
                     />
                     <p>{command}</p>
                     <div className="fetch-button">
                        <button  onClick={FetchOrderDetails}>
                           Fetch and Establish Communication
                        </button>
                        <p>{fetchcommand}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default VciConnective;
