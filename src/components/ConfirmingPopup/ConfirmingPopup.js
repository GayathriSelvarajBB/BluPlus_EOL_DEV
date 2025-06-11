import Modal from "react-modal";
const ConfirmingPopup = ({
   modalStyles,
   logoutConfirmOpen,
   toggleLogoutConfirmModal,
   handleClickHomeIcon,
   icon,
   title,
   handleLogoutConfirm,
   back,
}) => {
   return (
      <Modal
         isOpen={logoutConfirmOpen}
         style={modalStyles}
         onRequestClose={toggleLogoutConfirmModal || handleClickHomeIcon}
      >
         <div className="logout-confirmation-modal-container">
            <div className="logout-mark">
               <img src={icon} alt="logout" />
            </div>
            <div className="confirmation-text">{title}</div>
            <div className="action-buttons">
               <button
                  className="btn-cancel"
                  id="btn-cancel"
                  onClick={toggleLogoutConfirmModal || handleClickHomeIcon}
               >
                  Cancel
               </button>
               <button
                  className="btn-okay"
                  id="btn-okay"
                  onClick={handleLogoutConfirm}
               >
                  Okay
               </button>
            </div>
         </div>
      </Modal>
   );
};

export default ConfirmingPopup;
