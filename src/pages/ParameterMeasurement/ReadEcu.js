import close from "../../assets/images/close.svg";

const ReadEcu = (props) => {
   return (
      <div className="bus-code-parameter">
         <div className="Edit-Head">
            <div className="Edit-Header">
               <span>Write VIN</span>
               <span>
                  <img onClick={props.click} src={close} alt="close" />
               </span>
            </div>
            <div className="Write-Ecu">
               <input type="text"  placeholder="Write VIN..."/>
               <button>Write ECU</button>
            </div>
         </div>
      </div>
   );
};

export default ReadEcu;
