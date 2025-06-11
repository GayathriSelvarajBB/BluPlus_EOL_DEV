/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchStationInformation } from "services/dashboardService";

const Eolsignoff = () => {
   const [stationData, setStationData] = useState([]);
   // const [stationData, setStationData] = useState([
   //    {
   //       stationName: "Battery Fitment",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Break Fitment",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Key card learning",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Static 1",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Static 2",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "WAHA",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Dynamic",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "ADAS",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "DTC Check",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   //    {
   //       stationName: "Short Track Test",
   //       stationDate: new Date().toDateString(),
   //       stationTime: new Date().toTimeString(),
   //       progress: "completed",
   //    },
   // ]);
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   useEffect(() => {
      fetchStationInformation(OrderNumber)
         .then((res) => {
            setStationData(res?.data?.data);
         })
         .catch((err) => console.log("err", err));
   }, [OrderNumber]);

   return (
      <div className="vechile-eol-container">
         <div className="vechile-eol-contianer-sec">
            <div className="sign-table">
               <table>
                  <thead>
                     <th>Station Name</th>
                     <th>Date</th>
                     <th>Time</th>
                     <th>Status</th>
                  </thead>
                  <tbody>
                     {stationData?.map((ele, i) => {
                        return (
                           <tr key={i}>
                              <td>{ele?.stationName}</td>
                              <td>{ele?.date}</td>
                              <td>{ele?.time}</td>
                              <td>{ele?.status}</td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Eolsignoff;
