// import { useState } from "react";
import Modal from "react-modal";
const CommonPopup = ({ child,isPopup }) => {
   // const [isPopupOpen] = useState(true);

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

   return (
      <Modal
         isOpen={isPopup}
         style={modalStyle}
         ariaHideApp={false}
         // onRequestClose={() => setOpen(false)}
      >
         <div
            className="confirmation-modal-container"
         >
            {child}
         </div>
      </Modal>
 
   );
};

export default CommonPopup;
