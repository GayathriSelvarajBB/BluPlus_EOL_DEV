/* eslint-disable array-callback-return */
import { useEffect } from "react";

const sequence = [
   "Write data by Identifier",
   "Entering extended diagnostic session",
   "Control DTC setting - OFF",
   "Disable Non-diagnostic communication",
   "ECU Identification",
   "Check programming preconditions",
   "Security access - Read Seed",
   "Security access - Send Key",
   "Erase memory",
   "Request download",
   "Transfer data",
   "Check memory",
   "ECU reset",
   "Entering extended diagnostic session",
   "Enable Non-diagnostic communication",
   "Control DTC setting - ON",
   "Entering default diagnostic session",
];

function EcuLevelFlash({
   flashingDetails,
   ecuData,
   busData,
   setFlashingDetails,
   setFlashPopup,
}) {
   let timerInterval;

   useEffect(() => {
      flashingDetails[busData][ecuData]["flashPercentage"] = 0;
      setFlashingDetails(flashingDetails);
      flashStart();
      for (var i = 0; i < sequence.length; i++) {
         sequenceRunning(i);
      }
   }, []);

   const flashStart = () => {
      timerInterval = setInterval(flashTimer, 180);
      setTimeout(() => {
         setFlashPopup(false);
      }, 17000);
   };

   const flashTimer = () => {
      if (flashingDetails[busData][ecuData]["flashPercentage"] !== 100) {
         flashingDetails[busData][ecuData]["flashPercentage"]++;
      }
      setFlashingDetails(flashingDetails);
      if (flashingDetails[busData][ecuData]["flashPercentage"] === 100) {
         clearInterval(timerInterval);
      }
   };

   const sequenceRunning = (i) => {
      setTimeout(function () {
         const newNode = document.createElement("li");
         newNode.className = "seq-running";
         newNode.setAttribute("id", "seq-" + i);
         const textNode = document.createTextNode(sequence[i]);
         newNode.appendChild(textNode);
         let writingSeq = document.getElementById("sequence-flashing");
         writingSeq.insertBefore(newNode, writingSeq.children[0]);
         setTimeout(function () {
            document.getElementById("seq-" + i).classList.remove("seq-running");
            document.getElementById("seq-" + i).classList.add("seq-success");
         }, 1000);
      }, 1000 * i);
   };
   return (
      <div className="vehicle-flashing-popup">
         <div className="flashing-content">
            <span className="falshing-file-name">
               {flashingDetails[busData][ecuData]["flashFile"]}
            </span>
            <div className="flashing-percentage">
               <div
                  className="flashing-progress-bar"
                  style={{
                     width:
                        flashingDetails[busData][ecuData]["flashPercentage"] +
                        "%",
                  }}
               ></div>
            </div>
            <span className="flashing-percentage-number">
               Flashing Complete:{" "}
               {flashingDetails[busData][ecuData]["flashPercentage"]}%
            </span>
            <div className="flashing-sequence">
               <div className="current-ecu">
                  <ul id="ecu-content">
                     <li className="ecu-running">{ecuData}</li>
                  </ul>
               </div>
               <div className="flash-sequence">
                  <ul id="sequence-flashing"></ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default EcuLevelFlash;
