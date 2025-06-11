import close from "../../assets/images/close.svg";

const Editoption = (props) => {
   const items = [
      {
         Level: ["Level1"],
         Low: ["2DB"],
         Medium: ["5DB"],
         High: ["7DB"],
      },
   ];
   const Levelitems = items.map((ele, i) => {
      return (
         <tr key={i}>
            <td><input type="checkbox" value={ele.Level} /><label>{ele.Level}</label></td>
            <td><input type="checkbox" value={ele.Low} /><label>{ele.Low}</label></td>
            <td><input type="checkbox" value={ele.Medium} /><label>{ele.Medium}</label></td>
            <td><input type="checkbox" value={ele.Medium} /><label>{ele.Medium}</label></td>
         </tr>
      );
   });
   return (
      <div className="bus-code-parameter">
         <div className="Edit-Head">
            <div className="Edit-Header">
               <span>Horn({props.sideactive})</span>
               <span>
                  <img onClick={props.click} src={close} alt="close" />
               </span>
            </div>
            <table className="Edit-Table">
               <thead>
                  <th>Level</th>
                  <th>Low</th>
                  <th>Medium</th>
                  <th>High</th>
               </thead>
               <tbody>{Levelitems}</tbody>
            </table>
         </div>
         <button>Execute</button>
      </div>
   );
};

export default Editoption;
