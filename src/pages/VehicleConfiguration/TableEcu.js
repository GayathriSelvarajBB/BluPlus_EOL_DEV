import { useState } from "react";

const TableEcu = () => {
   const [command, setCommand] = useState("");
   const Conform = () => {
      setCommand("Configuration is in-progress");
      setTimeout(() => {
         setCommand("Configuration is completed");
      }, 3000);
   };
   const FunctionalityList = [
      "KeylessEntry",
      "Start/Stop",
      "Auto Light/Rain",
      "Rear Wiper",
      "Headlamp Type",
      "Curtain Airbag",
   ];
   const EcuConfiguration = FunctionalityList.map((ele, i) => {
      return (
         <tr key={i}>
            <td>{ele}</td>
            {ele !== "Headlamp Type" ? (
               <td>
                  <select>
                     <option>With</option>
                     <option>Without</option>
                  </select>
               </td>
            ) : (
               <td>
                  <select>
                     <option>LED</option>
                     <option>Halogen</option>
                  </select>
               </td>
            )}
         </tr>
      );
   });
   return (
      <div>
         <table className="manual-table">
            <thead>
               <th>Functionality</th>
               <th></th>
            </thead>
            <tbody>{EcuConfiguration}</tbody>
         </table>
         <div className="Manualconguration">
            <button onClick={Conform}>
               {command === "" && <span>Confirm</span>}
               {command === "Configuration is in-progress" && (
                  <span>LOADING...</span>
               )}
               {command === "Configuration is completed" && (
                  <span>Reconfirm</span>
               )}
            </button>
         </div>
         {command !== "" ? (
            <div className="data-comments">{command}</div>
         ) : null}
      </div>
   );
};

export default TableEcu;
