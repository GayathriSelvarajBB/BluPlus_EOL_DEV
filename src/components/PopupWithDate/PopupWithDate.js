import { useState } from "react";
import Modal from "react-modal";
import Close from "../../assets/images/close.svg";

// import dateIcon from "../../assets/images/actuatortesting.png";
const PopupWithDate = ({
   IsPopupInsertion,
   setIsPopupInsertion,
   serviceHistoryAllData,
   setServiceHistoryData,
}) => {
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
      },
   };
   const [fromDate, setFromDate] = useState("");
   const [endDate, setEndDate] = useState("");

   const handleSelectFromDate = (e) => {
      setFromDate(e.target.value);
      // setFromDate(e.target.value.split("-").reverse().join("/"));

      // setFromDate(e.target.value.split("-").join("/"));
      // setFromDate(format(date, "yyyy/MM/dd"));
   };
   const handleSelectEndDate = (e) => {
      setEndDate(e.target.value);
   };

   const handleFilterDate = () => {
      setIsPopupInsertion(false);

      let filtered = serviceHistoryAllData.filter((product) => {
         // let formateDate = fromDate.split("-").reverse().join("/");
         // setFromDate(e.target.value.split("-").reverse().join("/"));

         // let productDate = new Date(product["createdAt"]).toLocaleDateString();
         let productDate = new Date(product["serviceCentreVisited"]);

         return (
            // productDate >= new Date(formateDate) &&
            productDate >= new Date(fromDate) &&
            productDate <= new Date(endDate)
            // productDate >= new Date(filterDate.startDate) &&
            // productDate <= new Date(filterDate.endDate)
         );
      });
      if (filtered) {
         setServiceHistoryData(filtered);
      }
   };

   let today = new Date().toLocaleDateString("fr-ca");
   // var today = new Date().toLocaleDateString;
   // var dd = today.getDate();
   // var mm = today.getMonth() + 1; //January is 0!
   // var yyyy = today.getFullYear();

   return (
      <Modal
         //  isOpen={isPopupOpen}
         isOpen={IsPopupInsertion}
         style={modalStyle}
         ariaHideApp={false}
         onRequestClose={() => setIsPopupInsertion(false)}
         // appElement={IsPopupInsertion}
      >
         <div className="confirmation-modal-container">
            <div className="close_div">
               <img
                  src={Close}
                  alt="close"
                  onClick={() => setIsPopupInsertion(false)}
               />
            </div>
            <p className="data_para">
               For specified service old history details, please select the date
               below
            </p>
            <div className="date_div">
               <label htmlFor="from date">
                  From Date{" "}
                  <input
                     type="date"
                     name="from date"
                     min="2015-01-01"
                     max={today}
                     value={fromDate}
                     onChange={handleSelectFromDate}
                     className="inputBox"
                  />
                  {/* <img
                     style={{ width: "20px" }}
                     src={dateIcon}
                     alt="date-icon"
                  /> */}
               </label>
               <label htmlFor="end date">
                  End Date{" "}
                  <input
                     type="Date"
                     name="end date"
                     min="2015-01-01"
                     max={today}
                     value={endDate}
                     className="inputBox"
                     onChange={handleSelectEndDate}
                  />
               </label>

               <button
                  onClick={handleFilterDate}
                  disabled={fromDate === "" || endDate === ""}
                  className="filterBtn"
               >
                  Filter
               </button>
            </div>
         </div>
      </Modal>
   );
};

export default PopupWithDate;
