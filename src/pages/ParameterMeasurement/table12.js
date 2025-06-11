import { useState } from "react";
function Table12(props) {
   const [Graph, SetGraph] = useState(false);
   if (props.Box === "true") {
      let data = { Para: props["Parameter"], Graph: Graph };
      props.GetData(data);
   }
   const SubmitHandler = () => {
      if (props.limit <= 7) {
         let temp = !Graph;
         SetGraph(temp);
         props.GetData(props["Parameter"], Graph);
      }
      if (props.limit > 7 && Graph === true) {
         let temp = false;
         SetGraph(temp);
         props.GetData(props["Parameter"], Graph);
      }
   };
   return (
      <tr className="">
         <td className="data-center">{props.BUS}</td>
         <td className="data-center">{props.ECU}</td>
         <td className="data-center">{props.Parameter}</td>
         <td className="data-center">{props.minValue}</td>
         <td className="data-center table-bold">
            <strong>{props.currentValue}</strong>
         </td>
         <td className="data-center"> {props.maxValue}</td>
         <td className=""> {props.unit}</td>
         <td className="data-center">
            {props.Box === "true" ? (
               Graph === true || props.limit <= 7 ? (
                  <input
                     type="Checkbox"
                     onChange={SubmitHandler}
                     value={Graph}
                     defaultChecked={Graph}
                  ></input>
               ) : (
                  <input
                     type="Checkbox"
                     onChange={SubmitHandler}
                     value={Graph}
                     defaultChecked={Graph}
                     disabled
                  ></input>
               )
            ) : (
               <div>Graph</div>
            )}
         </td>
      </tr>
   );
}

export default Table12;
