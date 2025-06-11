import { useEffect } from "react";
import { useState } from "react";
import TableEcu from "./TableEcu";
const Manualconguration = (props) => {
   const [active, setActive] = useState(false);
   const Handle = () => {
      setActive(!active);
   };
   useEffect(()=>{
      if(props.activeBus){
         setActive(false)
      }
   },[props.activeBus])
  
   return (
      <>
         {!active ? (
            <div>
               <div className="caution-msg">
                  <h4>Caution:</h4>
                  <ul className="list-content">
                     <li>
                        Vehicle should be in Ignition ON condition (Do not start
                        the engine)
                     </li>
                     <li>
                        Before Reprogramming/programming the ECU, Vehicle
                        battery voltage should be above 13.5V
                     </li>
                     <li>
                        Ensure and use the right file for
                        programming/reprogramming the ECU
                     </li>
                     <li>
                        If reprogramming/programming is failure due to low
                        battery voltage, ECU will be corrupted.
                     </li>
                  </ul>
               </div>
               <div className="Manualconguration">
                  <button onClick={Handle}>Next</button>
               </div>
            </div>
         ) : (
            <TableEcu></TableEcu>
         )}
      </>
   );
};

export default Manualconguration;
