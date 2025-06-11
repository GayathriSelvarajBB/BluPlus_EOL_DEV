/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import warningImg from "assets/images/warninground.png";
// import { useEffect } from "react";
// import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import routePaths from "routes/routePaths";
// const selector = useSelector((state) => state.vciStatusSlice);

const modalStyles = {
   overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 999,
   },
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
   },
};

const PopupModal = ({ usbStatus, open }) => {
   // const [isOpen, setOpen] = useState(false);   
   const navigate=useNavigate()

   const onClickSetOpen = () => {
      if (!usbStatus) {
         localStorage.setItem("vciStatus", JSON.stringify("open"));
      } else {
         localStorage.removeItem("vciStatus");
      }
      navigate(routePaths.solutionOffering)
      window.location.reload()
      // setOpen(false)
   };
   // useEffect(()=>{   
   //    if(open===false){
   //       setOpen(false)
   //    }
   // },[])

   return (
      <Modal
         isOpen={usbStatus}
         style={modalStyles}
         // onRequestClose={() => setOpen(false)}
         onRequestClose={onClickSetOpen}
      >
         <div className="confirmation-modal-container">
            <div className="icon-mark">
               <img src={warningImg} alt="warning" />
            </div>
            <div>
               <span className="vci-msg"> VCI disconnected</span>
               <br />
               <p>Check the following conditions</p>
               <ul className="disconnect-points">
                  <li> Ignition ON</li>
                  <li>
                     Check the USB connection is properly connected to the
                     vehicle
                  </li>

                  <li>
                     Check the physical condition of the VCI & Connection (No
                     damage)
                  </li>
               </ul>
            </div>
            <div className="action-buttons">
               <button
                  className="btn-okay"
                  onClick={onClickSetOpen}
               >
                  Go to Homepage
               </button>
            </div>
         </div>
      </Modal>
   );
};

export default PopupModal;
