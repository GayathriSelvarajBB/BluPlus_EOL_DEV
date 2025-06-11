/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// import softwaresystem from "../../assets/images/CarStatus.png";
import tick from "../../assets/images/tick.png";
import wrong from "../../assets/images/NotEqual1.png";
import Torque from "../../assets/images/Torquecheck.png";
import Break from "../../assets/images/Breaktest.png";
import ECM from "../../assets/images/ECMtest.png";
import camera from "../../assets/images/camera.png";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import { useState } from "react";
import { useRef } from "react";
import closed from "../../assets/images/close.png";
import Webcam from "react-webcam";
import ReactModal from "react-modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import { SaveStationActivity } from "services/dashboardService";

const Dynamic = () => {
   const Dynamicheading = ["Parameter", "Actions", "Status"];

   const [readData, setReadData] = useState();
   const [check, setCheck] = useState(false);
   const [pendingCheck, setPendingCheck] = useState(false);
   const [commad, setCommand] = useState("Please complete required actions");
   const [commads, setCommands] = useState("Please complete required actions");
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [selectFile, setSelectFile] = useState([]);
   const [torque, setTorque] = useState(null);
   const [image, setImage] = useState();
   const [count, setCount] = useState(0);
   const [isOpen, setIsOpen] = useState(false);
   const [isDisable, setIsDisable] = useState(true);
   const Inputfile = useRef(null);
   const webcamRef = useRef(null);
   const [dynamicdata, setDynamicData] = useState([
      { name: "Torque Check", file: null, completed: null, pending: null },
      { name: "Brake Test", file: null, completed: null, pending: null },
      { name: "ECM Test", file: null, completed: null, pending: null },
   ]);
   const OrderNumber = useSelector(
      (state) => state?.OrderInputValue?.inputValue
   );
   const modalStyle = {
      overlay: {
         backgroundColor: "rgba(0,0,0,0.6)",
         zIndex: 999,
      },
      content: {
         top: "50%",
         left: "50%",
         transform: "translate(-50%, -50%)",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         borderRadius: "10px",
         display: "flex",
         justifyContent: "center",
         textAlign: "center",
         //  width: "100%",
      },
   };

   const StationActivity = {
      ecuName: ["VIN", "Torque Check", "Brake Test", "ECM Test"],
      activity: ["VIN verification", "Torque Check", "Brake Test", "ECM Test"],
      activityDescription: [
         "VIN verification complete",
         `Torque Check ${dynamicdata[0]?.completed ? "complete" : "pending"}`,
         `Brake Test ${dynamicdata[1]?.completed ? "complete" : "pending"}`,
         `ECM Test ${dynamicdata[2]?.completed ? "complete" : "pending"}`,
      ],
      activityStatus: [
         "complete",
         `${dynamicdata[0]?.completed ? "complete" : "pending"}`,
         `${dynamicdata[1]?.completed ? "complete" : "pending"}`,
         `${dynamicdata[2]?.completed ? "complete" : "pending"}`,
      ],
   };

   const postData = {
      orderId: OrderNumber,
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: StationActivity?.activity?.map(
         (activity, i) => ({
            stationName: "Dynamic",
            stationId: "st07",
            ecuName: StationActivity?.ecuName?.[i],
            activity,
            activityDescription: StationActivity?.activityDescription?.[i],
            activityStatus: StationActivity?.activityStatus?.[i],
         })
      ),
   };
   console.log("postData", postData, dynamicdata);
   const DynamicSubmit = () => {
      SaveStationActivity(postData);
      dispatch(UpdateStationStatus("ADAS"));
      navigate(routePaths.VciConnective);
   };
   const InputData = (e, name) => {
      let file = e.target.files[0].name;
      console.log("file", name);
      if (torque) {
         setDynamicData((prev) =>
            prev.map((elm) => (elm.name === torque ? { ...elm, file } : elm))
         );
      }
      setSelectFile((prev) => [...prev, e.target.files[0]]);
      if (selectFile.length === 2) {
         setReadData(true);
         setCommands("Completed successfully");
      }
      if (e.target.files[0]) {
         setIsOpen(false);
      }
   };
   const Completed = (name, check, e) => {
      console.log("check", check);
      // setCount((prev)=>[...prev,i])
      setDynamicData((prev) =>
         prev.map((elm) =>
            elm.name === name
               ? {
                    ...elm,
                    [check]: !elm[check],
                    [check === "complete" ? "pending" : "complete"]: false,
                 }
               : elm
         )
      );
      // if (e.target.checked) {
      //    setCount(count+1)

      // }
      // else{
      //    setCount(count-1)
      // }
   };
   console.log("check", count);
   console.log("object", dynamicdata);
   const Input = (name) => {
      setIsOpen(true);
      setTorque(name);
      // Inputfile.current.click();
   };
   const ImageClick = () => {
      setImage(true);
   };
   const Close = () => {
      setIsOpen(false);
   };
   const pendingItems = dynamicdata
      ?.filter((ele) => ele.pending)
      ?.map((elm) => elm.name);
   const Buttondisable = dynamicdata?.filter(
      (ele) => ele.pending || ele.completed
   );
   useEffect(() => {
      if (pendingItems.length > 0) {
         setCommand(pendingItems);
      }
      if (Buttondisable?.length === 3) {
         setIsDisable(false);
      } else {
         setIsDisable(true);
      }
   }, [dynamicdata]);

   console.log("pendingItems", pendingItems, count);
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div>
               <table className="table-waha">
                  <thead>
                     {Dynamicheading?.map((ele, i) => (
                        <th key={i}>{ele}</th>
                     ))}
                  </thead>
                  {dynamicdata?.map((ele, i) => (
                     <>
                        <tbody>
                           <tr>
                              <td>
                                 <div className="parameter-waha">
                                    <div className="Waha-wheel">
                                       <span>{ele.name}</span>
                                    </div>
                                    <div className="Dynamic-parameter">
                                       <div>
                                          <div className="input-field">
                                             <span>{ele.file}</span>
                                             <img
                                                src={camera}
                                                alt="camera"
                                                onClick={() => Input(ele.name)}
                                             />
                                          </div>
                                       </div>

                                       <div className="wheel-image" key={i}>
                                          {ele.name === "Torque Check" && (
                                             <img
                                                src={Torque}
                                                alt="software-system"
                                             />
                                          )}
                                          {ele.name === "Brake Test" && (
                                             <img
                                                src={Break}
                                                alt="software-system"
                                             />
                                          )}
                                          {ele.name === "ECM Test" && (
                                             <img
                                                src={ECM}
                                                alt="software-system"
                                             />
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <div className="headlamp-check">
                                    <div className="Completed-check">
                                       <input
                                          type="checkbox"
                                          onChange={(e) =>
                                             Completed(ele.name, "completed", e)
                                          }
                                          checked={ele.completed}
                                       />
                                       <span>Completed</span>
                                    </div>
                                    <div className="Completed-check">
                                       <input
                                          type="checkbox"
                                          onChange={(e) =>
                                             Completed(ele.name, "pending", e)
                                          }
                                          checked={ele.pending}
                                       />
                                       <span>Pending</span>
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <div className="waha-status">
                                    {ele.completed && (
                                       <img src={tick} alt="tick" />
                                    )}
                                    {ele.pending && (
                                       <img src={wrong} alt="wrong" />
                                    )}
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                        <ReactModal isOpen={isOpen} style={modalStyle}>
                           {image ? (
                              <div className="camera-popup">
                                 <img
                                    src={closed}
                                    alt="close"
                                    onClick={Close}
                                 />
                                 <Webcam
                                    height={300}
                                    width={300}
                                    ref={webcamRef}
                                 />
                                 <button onClick={Close}>Capture</button>
                              </div>
                           ) : (
                              <div className="file-upload">
                                 <input
                                    type="file"
                                    onChange={(e) => InputData(e, ele.name)}
                                 />
                                 <button onClick={ImageClick}>
                                    Click Image
                                 </button>
                              </div>
                           )}
                        </ReactModal>
                     </>
                  ))}
               </table>
            </div>
         </div>
         <div className="Break-submit">
            <div className="comments">
               {pendingItems.length > 0 ? (
                  <>
                     <span>Station Operation : Pending - </span>
                     <span>{commad}</span>
                  </>
               ) : (
                  <span>{commads}</span>
               )}
            </div>
            <div>
               <button disabled={isDisable} onClick={DynamicSubmit}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default Dynamic;
