function FlashingContainer({ title, ecuData }) {
   const expandView = (event) => {
      const getCurrent = event.currentTarget;
      getCurrent.nextSibling.classList.toggle("toggle-show");
      if (getCurrent.firstChild.classList.contains("expand-view")) {
         getCurrent.firstChild.classList.remove("expand-view");
         getCurrent.firstChild.classList.add("collapse-view");
      } else {
         getCurrent.firstChild.classList.add("expand-view");
         getCurrent.firstChild.classList.remove("collapse-view");
      }
   };

   return (
      <div className="flashing-container">
         <h2>{title}</h2>
         {Object.keys(ecuData).map((busName, i) => (
            <ul key={i}>
               <li>
                  <div className="sign-off" onClick={expandView}>
                     <span className="expand-view"></span>
                     <span>{busName}</span>
                  </div>
                  <ul>
                     {Object.keys(ecuData[busName]).map((ecuName, index) => (
                        <li key={index}>
                           <div className="sign-off" onClick={expandView}>
                              <span className="expand-view"></span>
                              <span>{ecuName}</span>
                           </div>
                           <ul>
                              <li>
                                 <span>
                                    Current ECU Hardware:{" "}
                                    {ecuData[busName][ecuName].hardware}
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    Current ECU Software:{" "}
                                    {ecuData[busName][ecuName].softaware}
                                 </span>
                              </li>
                              <li>
                                 <span>
                                    Previous ECU Flash:{" "}
                                    {ecuData[busName][ecuName].flashDate}
                                 </span>
                              </li>
                           </ul>
                        </li>
                     ))}
                  </ul>
               </li>
            </ul>
         ))}
      </div>
   );
}

export default FlashingContainer;
