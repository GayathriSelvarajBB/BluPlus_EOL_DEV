import closeIcon from "assets/images/close.png";
import { useDispatch } from "react-redux";
import { setActiveVin } from "redux/activeVin.slice";

function HardwareVinPopup(props) {
   const dispatch = useDispatch();

   const vinCombination = props.nonUniqueData;
   const onclickVin = (event) => {
      const _vinNumber = event.currentTarget.getAttribute("data-attribute");
      const vinData = {
         vinNumber: _vinNumber,
         automatedVin: false,
      };
      dispatch(setActiveVin(vinData));
   };
   return (
      <div className="hardware-vin-popup">
         <div className="hardware-vin-popup-content">
            <div className="popup-title">
               <h2>Non-unique VIN entered. Choose the VIN</h2>
               <div className="close-icon" onClick={props.closeVinPopup}>
                  <img src={closeIcon} alt="close" />
               </div>
            </div>
            <ul>
               {vinCombination.map((data, i) => (
                  <li key={i}>
                     <h3 data-attribute={data} onClick={onclickVin}>
                        {data}
                     </h3>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default HardwareVinPopup;
