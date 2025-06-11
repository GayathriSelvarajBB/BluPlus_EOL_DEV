/* eslint-disable indent */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SessionCard from "./SessionCard";
import Tatanano from "assets/images/Tatanano.png";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setServiceSession } from "redux/serviceSession.slice";

let interval;
function ServiceSessionModel() {
   const [timer, setTimer] = useState("05:00:00");
   const [click, setClick] = useState(false);
   const userList = useSelector((state) => state.serviceSessionSlice);
   const dispatch = useDispatch();
   let t = -1800000;

   useEffect(() => {
      interval = setInterval(() => {
         t = t - 1000;
         setTimer(format(new Date(t), "hh:mm:ss"));
      }, 1000);
      return () => {
         clearInterval(interval);
      };
   }, []);

   const topSessionData = {
      id: "7",
      sessionId: "#BB-9745267",
      carModel: "Tata Nano",
      arrivedDate: format(new Date(), "MMMM dd, yyyy"),
      serviceStatus: "Completed",
      vinNumber: "19XFB2F95DE056101",
      startTime: "10:00:00",
      pendingHours: format(new Date(), "HH:mm:mm"),
      year: "2021",
   };

   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      swipeToSlide: true,
      responsive: [
         {
            breakpoint: 1300,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            },
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   const Toast = (getParam) => {
      toast.success(`${getParam} successfully`, {
         position: toast.POSITION.TOP_RIGHT,
      });
      setClick(!click);
   };

   const serviceSession = () => {
      Toast("service session ended");
      clearInterval(interval);
      dispatch(setServiceSession(topSessionData));
   };

   return (
      <div className="service-session">
         <div className="service-session-list">
            <div className="service-session-details">
               {!click ? (
                  <div className="active-service-session">
                     <h3>Active Service Session</h3>
                     <div className="active-service-session-details">
                        <div className="service-session-id-details">
                           <div className="service-session-details-vin-active">
                              <span>{topSessionData?.sessionId}</span>
                              <span>VIN: {topSessionData?.vinNumber}</span>
                           </div>
                           <button onClick={serviceSession}>
                              {!click
                                 ? "End Service Session"
                                 : "    Service Session"}
                           </button>
                        </div>
                        <div className="vehicle-img">
                           <div className="vehicle-content">
                              <div className="current-car-img">
                                 <img src={Tatanano} alt="bb" />
                              </div>
                              <div className="vehicle-model-content">
                                 <span>{topSessionData?.carModel}</span>
                                 <span>{topSessionData?.year}</span>
                              </div>
                           </div>
                           <div className="service-active-content">
                              <div className="service-session-time">
                                 <span>Start Time</span>
                                 <span>{topSessionData?.startTime}</span>
                              </div>
                              <div className="service-session-pending">
                                 <span>Pending Time</span>
                                 <div className="service-pending">
                                    <div className="service-pending-percentage"></div>
                                    <span>{timer}</span>
                                 </div>
                                 <div className="service-session-pending">
                                    {/* <span>Ending Time</span>
                              <div className="service-pending">
                                 <div className="service-pending-percentage"></div>
                                 <span>{timer}</span>
                              </div> */}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : null}
               <div className="existing-service">
                  <h3>Existing Service Session ({userList.length})</h3>
                  <Slider {...settings}>
                     {userList?.map((s, i) => (
                        <SessionCard session={s} key={s.id} value={i} />
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ServiceSessionModel;
