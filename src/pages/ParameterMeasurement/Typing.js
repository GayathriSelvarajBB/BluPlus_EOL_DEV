import { useEffect } from "react";
import { useState } from "react";

const Typing = () => {
   const [text,setText] = useState("")
   useEffect(()=>{
      setText("Loading...")
      setTimeout(()=>{
         setText("Based on the prediction, Temperature of the battery is behaving abnormal and exceeds maximum threshold of 60°C. Current discharge is too high, which causes temperature to increase. Temperature follows a trend of continuous increase for 5 days exceeding the maximum limit. Thorough examination of the Battery is recommended by a technician to address any potential issues.")
      },5000)
   },[])
   return (
      <div className="Preduction">
         <p>{text}</p>
      </div>
   );
};
export default Typing;
