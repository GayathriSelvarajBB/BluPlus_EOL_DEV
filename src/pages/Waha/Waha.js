/* eslint-disable no-unused-vars */
import wheel from "../../assets/images/wheell.png";
import head from "../../assets/images/head.png";
import tick from "../../assets/images/tick.png";
import wrong from "../../assets/images/NotEqual1.png";
import camera from "../../assets/images/camera.png";
import closed from "../../assets/images/close.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
import ReactModal from "react-modal";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStationStatus } from "redux/stationStatus.slice";
import { SaveStationActivity, WheelAlignment } from "services/dashboardService";

const Waha = () => {
   const Wahaheading = [
      "Parameter",
      "Vehicle Values",
      "Reference Value",
      "Status",
   ];
   const [vechicleValues, setVechicleValues] = useState([]);
   const [readData, setReadData] = useState(false);
   const [completeCheck, setCompletedCheck] = useState(false);
   const [pendingCheck, setPendingCheck] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [buttondisable, setButtonDisable] = useState(true);
   const [selectFile, setSelectFile] = useState([]);
   const [name, setName] = useState([]);
   const [image, setImage] = useState(false);
   const [commad, setComand] = useState("Please complete required actions ");
   const webcamRef = useRef();
   const Inputfile = useRef(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();
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
      activity: ["VIN verification", "Wheel Alignment", "Head lamp Alignment"],
      activityDescription: [
         "Vehicle VIN  verification with Cloud VIN completed",
         "Wheel Alignment values verification completed",
         `Head lamp Alignment ${completeCheck ? "complete" : "pending"}`,
      ],

      activityStatus: [
         "complete",
         `${completeCheck ? "complete" : "pending"}`,
         `${completeCheck ? "complete" : "pending"}`,
      ],
   };

   const postData = {
      orderId: OrderNumber,
      project: "BS6",
      plant: "EOL - 01",
      vinNumber: "MAKDF554AJ4123456",
      stationEcuParametersList: StationActivity?.activity?.map(
         (activity, i) => ({
            stationName: "WAHA",
            stationId: "st06",
            ecuName: "Wheel Alignment",
            activity,
            activityDescription: StationActivity?.activityDescription?.[i],
            activityStatus: StationActivity?.activityStatus?.[i],
         })
      ),
   };
   const InputData = (e) => {
      console.log("object", e);
      if (e.target.files[0]) {
         setReadData(true);
         setIsOpen(false);
      }
      setSelectFile((prev) => [...prev, e.target.files[0]]);
      setName((prev) => [...prev, e.target.files[0].name]);
      // if (selectFile.length === 1) {
      //    setButtonDisable(false);
      //    setComand(
      //       "All operations in the current station completed successfully"
      //    );
      // }
   };
   console.log("postData", postData);
   const Input = () => {
      setIsOpen(true);
   };
   const Close = () => {
      setIsOpen(false);
   };
   const ImageClick = () => {
      setImage(true);
   };
   const SubmitWaha = () => {
      SaveStationActivity(postData);
      dispatch(UpdateStationStatus("Dynamic"));
      navigate(routePaths.VciConnective);
   };
   const CompletedCheck = (e) => {
      if (e.target.checked) {
         setCompletedCheck(true);
         setComand("Station Operations are completed");
         setButtonDisable(false);
         setPendingCheck(false);
      } else {
         setButtonDisable(true);
         setCompletedCheck(false);
      }
   };
   const PendingCheck = (e) => {
      if (e.target.checked) {
         setPendingCheck(true);
         setButtonDisable(false);
         setComand("Head Lamp Alignment is pending");
         setCompletedCheck(false);
      } else {
         setButtonDisable(true);
         setPendingCheck(false);
      }
   };
   useEffect(() => {
      WheelAlignment()
         .then((res) => setVechicleValues(res?.data?.data))
         .catch((err) => console.log("err", err));
   }, []);
   console.log("object", vechicleValues);
   return (
      <div className="brake-eol-container">
         <div className="brake-eol-contianer-sec">
            <div className="waha-heading">
               <div className="table-waha">
                  <table>
                     <thead>
                        {Wahaheading?.map((ele, i) => (
                           <th key={i}>{ele}</th>
                        ))}
                     </thead>

                     <tbody>
                        <tr>
                           <td>
                              <div className="parameter-waha">
                                 <div className="Waha-wheel">
                                    <span>Wheel Alignment</span>
                                 </div>
                                 <div>
                                    <div>
                                       <div className="input-field">
                                          <span>{name[0]}</span>
                                          <input
                                             type="file"
                                             ref={Inputfile}
                                             style={{ display: "none" }}
                                          />
                                          <img
                                             src={camera}
                                             alt="camera"
                                             onClick={Input}
                                          />
                                       </div>
                                    </div>

                                    <div className="wheel-image">
                                       <img src={wheel} alt="software-system" />
                                    </div>
                                 </div>
                              </div>
                           </td>
                           {readData ? (
                              <td>
                                 <div className="table-waha">
                                    <table>
                                       <thead>
                                          <th></th>
                                          <th>Left Side</th>
                                          <th>Right Side</th>
                                       </thead>
                                       <tbody>
                                          {vechicleValues?.map((ele, i) => (
                                             <tr key={i}>
                                                <td>
                                                   {ele?.alignmentParameter}
                                                </td>
                                                <td>{ele?.leftSide}</td>
                                                <td>{ele?.rightSide}</td>
                                             </tr>
                                          ))}
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           ) : (
                              <td></td>
                           )}
                           <td>
                              <div className="table-waha">
                                 <table>
                                    <thead>
                                       <th></th>
                                       <th>Left Side</th>
                                       <th>Right Side</th>
                                    </thead>
                                    <tbody>
                                       {vechicleValues?.map((ele, i) => (
                                          <tr key={i}>
                                             <td>{ele?.alignmentParameter}</td>
                                             <td>{ele?.leftSide}</td>
                                             <td>{ele?.rightSide}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           </td>
                           {readData ? (
                              <td>
                                 <div className="waha-status">
                                    <img src={tick} alt="tick" />
                                 </div>
                              </td>
                           ) : (
                              <td></td>
                           )}
                        </tr>
                     </tbody>
                     <tbody>
                        <tr>
                           <td>
                              <div className="parameter-waha">
                                 <div className="Waha-wheel">
                                    <span>Head Lamp Alignment</span>
                                 </div>
                                 <div>
                                    <div>
                                       <div className="input-field">
                                          <span>{name[1]}</span>

                                          <input
                                             type="file"
                                             ref={Inputfile}
                                             style={{ display: "none" }}
                                          />
                                          <img
                                             src={camera}
                                             alt="camera"
                                             onClick={Input}
                                          />
                                       </div>
                                    </div>

                                    <div className="wheel-image">
                                       <img src={head} alt="software-system" />
                                    </div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="headlamp-check">
                                 <div className="Completed-check">
                                    <input
                                       type="checkbox"
                                       onChange={CompletedCheck}
                                       checked={completeCheck}
                                    />
                                    <span>Completed</span>
                                 </div>
                                 <div className="Completed-check">
                                    <input
                                       type="checkbox"
                                       onChange={PendingCheck}
                                       checked={pendingCheck}
                                    />
                                    <span>Pending</span>
                                 </div>
                              </div>
                           </td>
                           <td></td>
                           <td>
                              {/* {readData && completeCheck ? (
                              <div className="waha-status">
                                 {completeCheck || !pendingCheck ? (
                                    <img src={tick} alt="tick" />
                                 ) : (
                                    <img src={wrong} alt="wrong" />
                                 )}
                              </div>
                           ) : null} */}
                              <div className="waha-status">
                                 {completeCheck && (
                                    <img src={tick} alt="tick" />
                                 )}
                                 {pendingCheck && (
                                    <img src={wrong} alt="wrong" />
                                 )}
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <ReactModal isOpen={isOpen} style={modalStyle}>
               {image ? (
                  <div className="camera-popup">
                     <img src={closed} alt="close" onClick={Close} />
                     <Webcam height={300} width={300} ref={webcamRef} />
                     <button onClick={Close}>Capture</button>
                  </div>
               ) : (
                  <div className="file-upload">
                     <input type="file" onChange={InputData} />
                     <img src={closed} onClick={Close} alt="close" />
                  </div>
               )}
            </ReactModal>
         </div>
         <div className="Break-submit">
            <div className="comments">
               <span>{commad}</span>
            </div>
            <div>
               <button disabled={buttondisable} onClick={SubmitWaha}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

export default Waha;
