import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getActiveVinData } from "storage/Activevinstorage";
import { getUserSelectParamInfo } from "services/dashboardService";
import { setUserParam } from "redux/userParam.slice";
// import Refresh from "assets/images/check-update.png";

import { useSelector, useDispatch } from "react-redux";
import { getParameterPopupInfo } from "services/dashboardService";

import MotorPng from "assets/images/motor.png";
import MotorSpeedPng from "assets/images/speed.png";
import TemperaturePng from "assets/images/temprature.png";
import VoltagePng from "assets/images/voltage.png";
import WheelPng from "assets/images/wheel.png";
import BatteryCellPng from "assets/images/battery-cell-2.png";
import { toast } from "react-toastify";

const iconsMap = {
   0: MotorPng,
   1: MotorSpeedPng,
   2: TemperaturePng,
   3: VoltagePng,
   4: WheelPng,
   5: BatteryCellPng,
};

function VehicleInformation() {
   const [vehicleinfo] = useState({ data: [] });
   const dispatch = useDispatch();
   const selectedParams = useSelector((state) => state.userParam);
   console.log("selectedParams", selectedParams);

   useEffect(() => {
      getActiveVinData().then((activeVinData) => {
         if (activeVinData.automatedVin === true) {
            getUserSelectParamInfo().then((res) => {
               if (res.data.data.paramList == null) {
                  getParameterPopupInfo(true).then((res) => {
                     if (res.status === 200) {
                        dispatch(setUserParam(res.data?.data));
                        console.log(res.data?.data);
                     } else {
                        toast.error("Error while fetching parameters.");
                     }
                  });
               } else {
                  dispatch(setUserParam(res.data.data.paramList.data));

                  console.log("else", res.data.data.paramList);
               }
            });
         }
      });
      console.log("vehicleinfo", vehicleinfo);
   }, []);

   return (
      <div className="car-info-containerv1">
         {/* <Slider {...settings}> */}
         {selectedParams &&
            selectedParams.map((s, i) => (
               // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
               <div className="each-car-infov1" key={i} tabIndex="0">
                  <div
                     className={`car-info-circlev1 ${
                        // !s.unitStatus
                        i % 3 !== 0
                           ? "ecu-status-failurev1"
                           : "ecu-status-sucessv1"
                     }`}
                     info-attribute={s.parameter}
                  >
                     <div className="vehicle-parameter-info">
                        <h3>Param name</h3>
                        <span>Param Value</span>
                        <ul>
                           <li>
                              Min Value <span>minval</span>
                           </li>
                           <li>
                              Max Value <span>maxval</span>
                           </li>
                        </ul>
                     </div>
                     {i % 3 !== 0 ? (
                        <div className="vehicle-info-statusv1 vehicle-info-status-successv1">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-check"
                              viewBox="0 0 16 16"
                           >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                           </svg>
                        </div>
                     ) : (
                        <div className="vehicle-info-statusv1 vehicle-info-status-failurev1">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-exclamation-triangle"
                              viewBox="0 0 16 16"
                           >
                              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
                              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path>
                           </svg>
                        </div>
                     )}
                     <span className="percentagev1">25</span>
                     <img src={iconsMap[i % 6]} alt="unit name" />
                  </div>
               </div>
            ))}
         {/* </Slider> */}
      </div>
   );
}
export default VehicleInformation;
