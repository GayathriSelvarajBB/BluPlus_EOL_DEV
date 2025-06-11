function CancelPopup({ cancelPopup, stopDownload }) {
   return (
      <div className="cancel-popup">
         <div className="cancel-popup-content">
            <h3>Do you want to cancel the download?</h3>
            <div className="cancel-popup-btn">
               <button onClick={cancelPopup}>Cancel</button>
               <button onClick={stopDownload}>Yes</button>
            </div>
         </div>
      </div>
   );
}

export default CancelPopup;
