import { useEffect } from "react";
import { useState } from "react";

const CurrentTyping = () => {
   const [text,setText] = useState("")
   useEffect(()=>{
      setText("Loading...")
      setTimeout(()=>{
         setText("As per the prediction, Current of the battery is behaving irregular and exceeds maximum threshold of 70amps. Temperature is behaving abnormal, because of current overflow. Current follows the same trend like temperature by exceeding the maximum limit for 5 days. This can damage the battery in upcoming days. It is recommended to examine the battery by a technician to address the issue.")
      },5000)
   },[])
   return (
      <div className="Preduction">
         <p>{text}</p>
      </div>
   );
};
export default CurrentTyping;
