/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable indent */
import SideBar from "components/SideBar/SideBar";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   getMesurementEcuList,
   getRoutine,
   getRoutineTyre,
   setRoutine,
   setRoutineTyre,
} from "services/dashboardService";
import EngImg from "../../assets/images/engImg.png";
import AbsImg from "../../assets/images/absImg.png";
import InfoBtn from "../../assets/images/info.png";

function Routine() {
   const [code, setCode] = useState({
      injector_1: "A6GHLH",
      injector_2: "A2LXCV",
      injector_3: "AZlZ0T",
      injector_4: "RX02DT",
      updatedAt: "2022-12-20T05:47:33.009Z",
      createdAt: "2022-12-20T05:47:33.009Z",
   });

   const [tyreCode, setTyreCode] = useState({
      frontLeftWheel: "22545R15",
      frontRightWheel: "22545R16",
      rearLeftWheel: "22545R17",
      rearRightWheel: "22545R19",
      createdAt: "2022-12-21T11:32:57.305105",
      updatedAt: "2022-12-21T11:33:09.998141",
   });

   const [dropDown] = useState(["--Select--", "Injector Code Learning"]);
   const [dropDown1] = useState(["--Select--", "Wheels & Tyre"]);
   const [selected, setSelected] = useState("--Select--");
   const [isInfoIconOpen, setIsInfoIconOpen] = useState(false);

   const injectorList = [
      "Injector 1",
      "Injector 2",
      "Injector 3",
      "Injector 4",
   ];

   const tyreList = ["Front FL", "Front FR", "Rear RL", "Rear RR"];

   const dtcList = useSelector((state) => state.dtcListSlice);
   // const dtcList2 = ["ENGINE", "BCM", "CLUSTER", "ABS", "ACU"];
   const [dtcList2, setDtcList2] = useState(["ENGINE"]);
   const dtcList1 = ["BCM", "CLUSTER", "ACU"];

   // eslint-disable-next-line no-unused-vars
   const dispatch = useDispatch();
   const [command, setCommand] = useState("");
   const [values, setValues] = useState([]);
   const [keys, setKeys] = useState([]);
   const [activeBus, setActiveBus] = useState(
      localStorage.getItem("busName")
         ? localStorage.getItem("busName")
         : dtcList2[0]
   );
   useEffect(() => {
      return () => {
         localStorage.removeItem("busName");
      };
   }, []);

   useEffect(() => {
      setSelected("--Select--");
      setCommand("");
   }, [activeBus]);

   useEffect(() => {
      getRoutine()
         .then((res) => {
            if (res.status === 200) {
               console.log("res123", res.data.data.routineDataList);

               setCode(res.data.data.routineDataList);
            }
         })
         .catch((err) => {
            console.log("err", err);
         });
   }, []);
   useEffect(() => {
      getRoutineTyre()
         .then((res) => {
            if (res?.status === 200) {
               setTyreCode(res.data.data.routineTyreDataList);
               console.log("tyr", res.data.data.routineTyreDataList);
            }
         })
         .catch((err) => {
            console.log("err", err);
         });
   }, []);
   useEffect(() => {
      setCommand("");
   }, [selected]);

   useEffect(() => {
      setKeys(Object.keys(code).slice(0, 4));
      setValues(Object.values(code).slice(0, 4));
   }, [code]);
   const tyrekey = Object.keys(tyreCode).slice(0, 4);
   // console.log("tyrekey", tyrekey);
   const tyreval = Object.values(tyreCode).slice(0, 4);
   // console.log("tyreval", tyreval);

   const setCodeClick = (ecu) => {
      if (ecu === "ENGINE") {
         setActive(null);
         setRoutine(code)
            .then((res) => {
               if (res.status === 200) {
                  setCommand(
                     `${injectorcodename.replace(
                        "_",
                        " "
                     )} updated successfully`
                  );
                  setTimeout(() => {
                     setCommand("");
                  }, 5000);
               }
               console.log("setRoutine", res);
            })
            .catch((err) => {
               console.log("setRoutineErr", err);
            });
      } else {
         setActive(null);
         setRoutineTyre(tyreCode)
            .then((res) => {
               if (res.status === 200) {
                  setCommand(
                     `${Tyrecodename.replaceAll("_", " ")} updated successfully`
                  );
                  setTimeout(() => {
                     setCommand("");
                  }, 2000);
               }
            })
            .catch((err) => {
               console.log("er", err);
            });
      }
   };
   console.log("object", tyreval);
   console.log("object", values);
   const [injectorcodename, setInjectorCodeName] = useState("");
   const [Tyrecodename, setTyreCodeName] = useState("");
   const Injectorcode = (e) => {
      setInjectorCodeName(e.target.name);
      setCode({ ...code, [e.target.name]: e.target.value });
   };
   const TyreCode = (e) => {
      setTyreCodeName(e.target.name);
      setTyreCode({
         ...tyreCode,
         [e.target.name]: e.target.value,
      });
   };
   console.log("name", code);
   const Injector = injectorList?.map((ele, i) => {
      return (
         <tr key={i}>
            <td>{ele}</td>
         </tr>
      );
   });

   useEffect(() => {
      getMesurementEcuList()
         .then((res) => {
            if (res?.status === 200) {
               setDtcList2(res?.data?.data);
            }
         })
         .catch((err) => console.log("err", err));
   }, []);
   const [active, setActive] = useState(null);
   function handleFocus(index) {
      setActive(index);
   }
   const Injectorvalues = values?.map((elm, i) => {
      return (
         <tr key={i}>
            <td>
               <input
                  maxLength="8"
                  type="text"
                  name={keys[i]}
                  value={elm}
                  onFocus={() => handleFocus(i)}
                  disabled={active !== null && active !== i}
                  onChange={Injectorcode}
               />
            </td>
         </tr>
      );
   });
   const handleClickOnInfoIcon = () => {
      setIsInfoIconOpen(!isInfoIconOpen);
   };
   const descriptionData = [
      {
         ecuName: "BCM",
         description: [
            "Injector code learning is used to calibrate the fuel injectors with the ECM.",
            "Each injector has slight manufacturing differences and during the life has different wear and tear.",
            "This learning process allows the ECM to adjust the fuel delivery to the combustion chamber as per the injector.",
         ],
      },
      {
         ecuName: "ABS",
         description: [
            "Injector code learning is used to calibrate the fuel injectors with the ECM.",
            "Each injector has slight manufacturing differences and during the life has different wear and tear.",
            "This learning process allows the ECM to adjust the fuel delivery to the combustion chamber as per the injector.",
         ],
      },
   ];
   return (
      <div className="routine-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="dtc-contianer-sec-actuator">
                     <div className="dtc-container-actuator">
                        <div className="fault-manage">
                           <div className="sidebar-bus">
                              <ul className="sidebar-bus-list">
                                 {dtcList2.map((busList, i) => {
                                    return (
                                       <li
                                          key={i}
                                          onClick={() => setActiveBus(busList)}
                                          className={`${
                                             busList === activeBus
                                                ? "routine-values active-dtc"
                                                : "routine-values"
                                          }`}
                                       >
                                          <span>{busList}</span>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                           <div className="bus-code-status">
                              {dtcList1.indexOf(activeBus) !== -1 ? (
                                 <>
                                    <p className="no_data_found">No Data Found</p>
                                 </>
                              ) : (
                                 <>
                                    <select
                                       value={selected}
                                       onChange={(e) =>
                                          setSelected(e.target.value)
                                       }
                                    >
                                       {activeBus === "ENGINE"
                                          ? dropDown.map((data, i) => {
                                               console.log("data", dropDown);
                                               return (
                                                  <option key={i} value={data}>
                                                     {data}
                                                  </option>
                                               );
                                            })
                                          : dropDown1.map((data, i) => {
                                               return (
                                                  <option key={i} value={data}>
                                                     {data}
                                                  </option>
                                               );
                                            })}
                                    </select>

                                    {selected === "--Select--" ? null : (
                                       <>
                                          {activeBus === "ENGINE" ? (
                                             <div className="injector-lists">
                                                <div className="description_main_div">
                                                   <div className="des_div">
                                                      <div className="des_info_div">
                                                         <h4>Description</h4>
                                                         <img
                                                            onClick={
                                                               handleClickOnInfoIcon
                                                            }
                                                            src={InfoBtn}
                                                            alt="info"
                                                         />
                                                      </div>
                                                      <div className="des_content_div">
                                                         <ul>
                                                            <li>
                                                               Injector code
                                                               learning is used
                                                               to calibrate the
                                                               fuel injectors
                                                               with the ECM.
                                                            </li>
                                                            <li>
                                                               Each injector has
                                                               slight
                                                               manufacturing
                                                               differences and
                                                               during the life
                                                               has different
                                                               wear and tear.
                                                            </li>
                                                            <li>
                                                               This learning
                                                               process allows
                                                               the ECM to adjust
                                                               the fuel delivery
                                                               to the combustion
                                                               chamber as per
                                                               the injector.
                                                            </li>
                                                         </ul>
                                                         {isInfoIconOpen && (
                                                            <div className="img_div">
                                                               <img
                                                                  src={EngImg}
                                                                  alt="img"
                                                               />
                                                            </div>
                                                         )}
                                                      </div>
                                                   </div>
                                                </div>
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Injectors</th>
                                                         <th>Injector Code</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td>{Injector}</td>
                                                         <td>
                                                            {Injectorvalues}
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          ) : (
                                             <div className="injector-lists">
                                                <div className="description_main_div">
                                                   <div className="des_div">
                                                      <div className="des_info_div">
                                                         <h4>Description</h4>
                                                         <img
                                                            onClick={
                                                               handleClickOnInfoIcon
                                                            }
                                                            src={InfoBtn}
                                                            alt="info"
                                                         />
                                                      </div>
                                                      <div className="des_content_div">
                                                         <ul>
                                                            <li>
                                                               This learning
                                                               process is used
                                                               to calibrate the
                                                               ABS ECU with the
                                                               relevant tyre
                                                               size for each
                                                               wheel.
                                                            </li>
                                                            <li>
                                                               The ABS then uses
                                                               this information
                                                               to control the
                                                               braking as per
                                                               the tyre size.
                                                            </li>
                                                         </ul>
                                                         {isInfoIconOpen && (
                                                            <div className="img_div">
                                                               <img
                                                                  src={AbsImg}
                                                                  alt="img"
                                                               />
                                                            </div>
                                                         )}
                                                      </div>
                                                   </div>
                                                </div>
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Wheels</th>
                                                         <th>Tyre</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td>
                                                            {tyreList.map(
                                                               (ele, i) => {
                                                                  return (
                                                                     <tr
                                                                        key={i}
                                                                     >
                                                                        <td>
                                                                           {ele}
                                                                        </td>
                                                                     </tr>
                                                                  );
                                                               }
                                                            )}
                                                         </td>
                                                         <td>
                                                            {tyreval.map(
                                                               (ele, i) => {
                                                                  return (
                                                                     <tr
                                                                        key={i}
                                                                     >
                                                                        <td>
                                                                           <input
                                                                              maxLength="8"
                                                                              type="text"
                                                                              name={
                                                                                 tyrekey[
                                                                                    i
                                                                                 ]
                                                                              }
                                                                              value={
                                                                                 ele
                                                                              }
                                                                              onFocus={() =>
                                                                                 handleFocus(
                                                                                    i
                                                                                 )
                                                                              }
                                                                              disabled={
                                                                                 active !==
                                                                                    null &&
                                                                                 active !==
                                                                                    i
                                                                              }
                                                                              onChange={
                                                                                 TyreCode
                                                                              }
                                                                           />
                                                                        </td>
                                                                     </tr>
                                                                  );
                                                               }
                                                            )}
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          )}
                                          <div className="code">
                                             <button
                                             
                                                onClick={() =>
                                                   activeBus !== "ENGINE"
                                                      ? setCodeClick("ABS")
                                                      : setCodeClick("ENGINE")
                                                }
                                             >
                                                {activeBus === "ENGINE"
                                                   ? "Register Code"
                                                   : " Update Tyre Size"}
                                             </button>
                                          </div>
                                          {command === "" ? null : (
                                             <div className="data-comments">
                                                <p>{command}</p>
                                             </div>
                                          )}
                                       </>
                                    )}
                                 </>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Routine;
