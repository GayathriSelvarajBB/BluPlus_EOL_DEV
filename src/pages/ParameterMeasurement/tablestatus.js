import { useSelector } from "react-redux";

const Tablestatus = (props) => {
   const StautsValue = useSelector((state) => state?.getStatusData?.ecuStatus);
   console.log("data123", props.tabledata1);
   const parameterbody = StautsValue?.map((ele, i) => {
      return (
         <>
            <tr>
               <td key={i}>{ele?.["ecuName"]}</td>
               <td key={i}>{ele?.["ecuStatusParam"]}</td>
               <td key={i}>{ele?.["ecuParamState"]}</td>
            </tr>
         </>
      );
      //   });
   });
   return (
      <>
         <div className="Status-Table">
            <table className="table-live-Status">
               <thead>
                  <th>ECUNAME</th>
                  <th>Component/Function</th>
                  <th>Status</th>
               </thead>
               <tbody>{parameterbody}</tbody>
            </table>
            {StautsValue?.length !== props.count && (
               <div className="main-mini-loader">
                  <span className="mini_loader" />
               </div>
            )}
         </div>
      </>
   );
};

export default Tablestatus;
