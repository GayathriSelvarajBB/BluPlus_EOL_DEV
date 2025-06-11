import Close from "../../assets/images/close.svg";

const SnapShot = (props) => {
   const ecuStatus = [
      {
         EngineSpeed: "2000 rpm",
         VehicleSpeed: "40 KMPH",
         BatteryVoltage: "13.6 V",
      },
   ];

   return (
      <div className="dtc-snapshot">
         <img src={Close} onClick={props.click} alt="close" />
         <div className="Snapshot">
            <table className="manual-table">
               <thead>
                  <th>Parameters/Status</th>
                  <th>Values</th>
               </thead>
               <tbody>
                  {ecuStatus.map((ele, i) => {
                     return (
                        <>
                           <tr key={i}>
                              <td>Engine Speed</td>
                              <td>{ele.EngineSpeed}</td>
                           </tr>
                           <tr>
                              <td>Vehicle Speed</td>
                              <td>{ele.VehicleSpeed}</td>
                           </tr>
                           <tr>
                              <td>Battery Voltage</td>
                              <td>{ele.BatteryVoltage}</td>
                           </tr>
                        </>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default SnapShot;
