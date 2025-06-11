import Table12 from "./table12";
function Finaltable(props) {
   const forwardData = (para1) => {
      props.SendData1(para1);
   };
   return (
      <table className="table-live">
         <thead>
            <tr>
               <td>BUS</td>
               <td>ECU</td>
               <td>Parameter</td>
               <td className="data-center">Min Value</td>
               <td className="data-center">Current Value</td>
               <td className="data-center">Max Value</td>
               <td>Unit</td>
               <td className="data-center">Graph</td>
            </tr>
         </thead>
         <tbody>
            {props.data1?.map((data12, index) => (
               <Table12
                  key={index}
                  color={data12.color}
                  Parameter={data12.Parameter}
                  minValue={data12.Min_Value}
                  currentValue={data12.Current_Value}
                  maxValue={data12.Max_Value}
                  unit={data12.unit}
                  def={data12.def}
                  color1={data12.color}
                  BUS={props.path[index][0]["BUS"]}
                  ECU={props.path[index][0]["ECU"]}
                  GetData={forwardData}
                  Box={props.Box}
                  limit={props.limit}
                  loaderFix={props.loaderFix}
               />
            ))}
         </tbody>
      </table>
   );
}
export default Finaltable;
