/* eslint-disable indent */
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Tatanano from "assets/images/Tatanano.png";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateServiceSeesion1 } from "redux/serviceSession.slice";
let interval;
function SessionCard({ session, value }) {
   const [timer, setTimer] = useState("05:00:00");
   const [click, setClick] = useState(false);
   let t = -1800000;
   const vin = "19XFB2F95DE056700";
   const dispatch = useDispatch();
   useEffect(() => {
      interval = setInterval(() => {
         t = t - 1000;
         setTimer(format(new Date(t), "hh:mm:ss"));
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, []);

   const serviceSession = () => {
      setClick(!click);
      Toast("service session ended");
      clearInterval(interval);
      dispatch(updateServiceSeesion1({ session, index: value }));
   };
   const Toast = (getParam) => {
      toast.success(`${getParam} successfully`, {
         position: toast.POSITION.TOP_RIGHT,
      });
   };
   return (
      <div className="service-session-card">
         <div className="session-id">
            <span>#{session.sessionId}</span>
            {session.serviceStatus !== "Completed" && (
               <button onClick={serviceSession}>End Service Session</button>
            )}
         </div>
         <div className="session-user">
            <div className="user-icon">
               <img src={Tatanano} alt="bb" />
            </div>
            <div className="vechicle-model">
               <span>{session.carModel}</span>
               <span>{session.year}</span>
            </div>
         </div>
         <div className="service-details-date">
            <span className="service-date">{session.arrivedDate}</span>
            <span
               className={`service-state ${
                  session.serviceStatus === "Completed"
                     ? "state-completed"
                     : "state-pending"
               }`}
            >
               {session.serviceStatus}
            </span>
            <div className="service-time">
               <div className="start-time">
                  <span>Start Time</span>
                  <span>{session.startTime}</span>
               </div>
               <div className="start-time">
                  <span>
                     {session.serviceStatus === "Completed"
                        ? "End Time"
                        : "Pending Hours"}
                  </span>
                  {session.serviceStatus === "Completed" ? (
                     <span>{session.pendingHours}</span>
                  ) : (
                     <span className="timer-session">{timer}</span>
                  )}
               </div>
            </div>
         </div>
         <h5>
            <span>VIN:</span>
            <span>
               {vin}
               {value}
            </span>
         </h5>
      </div>
   );
}

export default SessionCard;
