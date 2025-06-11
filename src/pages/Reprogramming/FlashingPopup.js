/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";

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

function FlashingPopup({
   flashingDetails,
   setFlashingPopup,
   setVehcileFlashed,
}) {
   let timerInterval;
   const [ecuList] = useState([]);
   let [flashCount, setFlashCount] = useState(0);

   useEffect(() => {
      Object.keys(flashingDetails).map((busData) => {
         Object.keys(flashingDetails[busData]).map((ecuData) => {
            ecuList.push(ecuData);
         });
      });
      for (var i = 0; i < ecuList.length; i++) {
         ecuUpdate(i);
      }
      flashingRun();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const flashingRun = () => {
      timerInterval = setInterval(flashTimer, 930);
   };

   const flashTimer = () => {
      if (flashCount !== 100) {
         flashCount++;
      }
      setFlashCount(flashCount);
      if (flashCount === 100) {
         clearInterval(timerInterval);
         setVehcileFlashed(true);
      }
      setTimeout(() => {
         setFlashingPopup(false);
      }, 97000);
   };

   const ecuUpdate = (i) => {
      setTimeout(function () {
         const newNode = document.createElement("li");
         newNode.className = "ecu-running";
         newNode.setAttribute("id", "ecu-" + i);
         const textNode = document.createTextNode(ecuList[i]);
         newNode.appendChild(textNode);
         let writingSeq = document.getElementById("ecu-content");
         writingSeq.insertBefore(newNode, writingSeq.children[0]);
         setTimeout(function () {
            document.getElementById("ecu-" + i).classList.remove("ecu-running");
            document.getElementById("ecu-" + i).classList.add("ecu-success");
         }, 16000);
         for (var j = 0; j < sequence.length; j++) {
            sequenceRunning(j);
         }
      }, 16000 * i);
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
            <span className="falshing-file-name">Flash-Vehicle.s19</span>
            <div className="flashing-percentage">
               <div
                  className="flashing-progress-bar"
                  style={{ width: flashCount + "%" }}
               ></div>
            </div>
            <span className="flashing-percentage-number">
               Flashing Complete: {flashCount}%
            </span>
            <div className="flashing-sequence">
               <div className="current-ecu">
                  <ul id="ecu-content"></ul>
               </div>
               <div className="flash-sequence">
                  <ul id="sequence-flashing"></ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default FlashingPopup;
