/* eslint-disable indent */
import SideBar from "components/SideBar/SideBar";
import { useState } from "react";
import Automaticconguration from "./Automaticconguration";
import Manualconguration from "./Manualconguration";

const EcuConfiguration = () => {
   const [flashingDetails, setFlashingDetails] = useState([
      "ENGINE",
      "BCM",
      "CLUSTER",
      "ABS",
      "HAC",
   ]);

   const [activeTab, setActiveTab] = useState("AutomaticConfiguration");
   const [activeBus, setActiveBus] = useState(flashingDetails[0]);
   const handleTab = (event) => {
      setActiveTab(event.currentTarget.getAttribute("data-attribute"));
   };
   const [command] = useState(null);

   return (
      <div>
         <div className="dtc-scan-page">
            <div className="page-wrapper">
               <SideBar />
               <div className="body-wrapper">
                  <div className="dtc-scan-container">
                     <div className="dtc-contianer-flashing">
                        <div className="dtc-container-flashing">
                           <div className="fault-manage">
                              <div className="sidebar-bus">
                                 <ul className="sidebar-bus-list">
                                    {flashingDetails.map((bus) => {
                                       console.log(bus);
                                       return (
                                          <>
                                             <li
                                                className={`${
                                                   bus === activeBus
                                                      ? "dtc-values  active-dtc"
                                                      : "dtc-values"
                                                }`}
                                                onClick={() =>
                                                   setActiveBus(bus)

                                                }
                                             >
                                                <span>{bus}</span>
                                             </li>
                                          </>
                                       );
                                    })}
                                 </ul>
                              </div>
                              <div className="bus-code-flashing">
                                 <div className="ecu-flashing">
                                    <div className="flashing-container">
                                       <div className="flash-tab-program">
                                          <ul>
                                             <li
                                                data-attribute="AutomaticConfiguration"
                                                className={`${
                                                   activeTab ===
                                                   "AutomaticConfiguration"
                                                      ? "active"
                                                      : ""
                                                }`}
                                                onClick={handleTab}
                                             >
                                                <span>
                                                   Automatic Configuration
                                                </span>
                                             </li>
                                             <li
                                                data-attribute="offline"
                                                className={`${
                                                   activeTab === "offline"
                                                      ? "active"
                                                      : ""
                                                }`}
                                                onClick={handleTab}
                                             >
                                                <span>
                                                   Manual Configuration
                                                </span>
                                             </li>
                                          </ul>
                                       </div>
                                       <div className="flash-section">
                                          {activeTab ===
                                          "AutomaticConfiguration" ? (
                                             <Automaticconguration
                                                flashingDetails={
                                                   flashingDetails
                                                }
                                                activeBus={activeBus}
                                                command={command}
                                             />
                                          ) : (
                                             <Manualconguration
                                                flashingDetails={
                                                   flashingDetails
                                                }
                                                setFlashingDetails={
                                                   setFlashingDetails
                                                }
                                                activeBus={activeBus}
                                                // activeBus={activeBus}
                                                command={command}
                                             />
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EcuConfiguration;
