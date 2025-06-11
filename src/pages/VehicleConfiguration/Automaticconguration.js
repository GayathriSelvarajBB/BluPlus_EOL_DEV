import { useState } from "react";

const Automaticconguration = () => {
   let [downloadPercentage, setDownloadPercentage] = useState(0);
   let [configurationPercentage, setConfigurationPercentage] = useState(0);
   const [command, setCommand] = useState("");
   const downloadSingle = () => {
      setCommand("The download is currently underway");
      const clear = setInterval(() => {
         if (downloadPercentage < 100) {
            downloadPercentage++;
         }
         if (downloadPercentage === 100) {
            setCommand("The download has been completed");
            setTimeout(() => {
               setCommand("");
            }, 2000);
            clearInterval(clear);
         }
         setDownloadPercentage(downloadPercentage);
      }, 100);
      console.log(downloadPercentage);
   };
   const SingleConfiguration = (configuation) => {
      console.log("conf", configuation);
      setCommand("Configuration is in-progress");
      if (configuation === "reconfiguration") {
         configurationPercentage = 0;
      }
      const clearconfiguration = setInterval(() => {
         if (configurationPercentage < 100) {
            configurationPercentage++;
         }
         if (configurationPercentage === 100) {
            setCommand("Configuration is completed");
            setTimeout(() => {
               setCommand("");
            }, 2000);
            clearInterval(clearconfiguration);
         }
         setConfigurationPercentage(configurationPercentage);
      }, 100);
   };
   return (
      <div>
         <div className="caution-msg">
            <h4>Condition:</h4>
            <ul className="list-content">
               <li>Configuration to be done after replacing the new ECU</li>
               <li>
                  If incase of configuration failure, ECU function can&apos;t
                  work. Please retry.
               </li>
            </ul>
         </div>
         <div className="flash">
            {downloadPercentage === 0 && (
               <div className="configuation-ecu-progess">
                  <button className="button-height" onClick={downloadSingle}>
                     <span>Download Now</span> 
                  </button>
               </div>
            )}
            {downloadPercentage < 100 && downloadPercentage > 0 && (
               <div className="configuation-ecu-progess">
                  <div
                     className="configuration-current-progress"
                     style={{
                        width: downloadPercentage + "%",
                     }}
                  ></div>
                  <span>{downloadPercentage}%</span>
               </div>
            )}
            {downloadPercentage === 100 && configurationPercentage === 0 && (
               <div className="configuation-ecu-progess">
                  <button
                     className="button-flash"
                     onClick={() => SingleConfiguration("configuration")}
                  >
                     <span>Start Configuration</span>
                  </button>
               </div>
            )}
            {downloadPercentage === 100 && configurationPercentage === 100 && (
               <div className="configuation-ecu-progess">
                  <button
                     className="button-reflash"
                     onClick={() => SingleConfiguration("reconfiguration")}
                  >
                     <span>Re Configure</span>
                  </button>
               </div>
            )}

            {configurationPercentage < 100 && configurationPercentage > 0 && (
               <div className="configuation-ecu-progess">
                  <div
                     className="configuration-progress"
                     style={{
                        width: configurationPercentage + "%",
                     }}
                  ></div>
                  <span>{configurationPercentage}%</span>
               </div>
            )}
            {command !== "" ? (
               <div className="data-comments">{command}</div>
            ) : null}
         </div>
      </div>
   );
};

export default Automaticconguration;
