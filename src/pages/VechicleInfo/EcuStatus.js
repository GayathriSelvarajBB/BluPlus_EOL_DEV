function EcuStatus(props) {
   return (    
      <div className="ecu-status">
         <h3>{props.Title}</h3>
         <div className="ecu-details-section">
            <div className="ecu-number">
               <h4>{props.ecuValue}</h4>
               <span>{props.ecuTitle}</span>
            </div>
            <div className="ecu-progress">
               <div className="ecu-progress-value" style={{"width": props.ecuPercentage+"%"}}></div>
            </div>
            <h4>{props.totalText}: {props.ecuTotal}</h4>
         </div>
      </div>
   )
}

export default EcuStatus