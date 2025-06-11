import closeIcon from "assets/images/close.png";

export default function WorkOrderVinPopup(props) {
   const handleWorkOrder = (event) => {
      const currentId = event.currentTarget.id;

      props.handleWorkOderId(currentId);
   };
   const workorderData = props.workOrderData;
   console.log(workorderData, "workorderDataworkorderData");

   // const OnRedirect = (event) => {
   //    localStorage.setItem("work-order-id", event.currentTarget.id);
   //    navigate(routePaths.vehicleInfo);
   // };
   return (
      <div className="hardware-vin-popup">
         <div className="hardware-vin-popup-content">
            <div className="popup-title">
               <h2>Select Work Order Id</h2>
               <div className="close-icon" onClick={props.closeWorkOrderPopup}>
                  <img src={closeIcon} alt="close" />
               </div>
            </div>
            <ul className="work-order-popup">
               {workorderData ? (
                  <div>
                     {workorderData.map((data, i) => (
                        <li key={i}>
                           {console.log(data, "datadata")}
                           <div onClick={handleWorkOrder} id={data.workOrderID}>
                              <h3 data-attribute={data.workOrderID}>
                                 <span>Work Order Id:</span>
                                 {data.workOrderID}
                              </h3>
                              <h3>
                                 <span>Work Order Number:</span>
                                 {data.workOrderNumber}
                              </h3>
                              <h3>
                                 <span>Work Order Date:</span>
                                 {data.workOrderDate}
                              </h3>
                           </div>
                        </li>
                     ))}
                  </div>
               ) : (
                  <div>
                     <li>
                        <div>
                           <h3>
                              <span>No work order Id for this Vin Number</span>
                           </h3>
                        </div>
                     </li>
                  </div>
               )}
            </ul>
         </div>
      </div>
   );
}
