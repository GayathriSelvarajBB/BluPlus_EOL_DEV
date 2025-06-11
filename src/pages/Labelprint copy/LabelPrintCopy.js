import SideBar from "components/SideBar/SideBar";
import qrcode from "../../assets/images/qrcode.png";
const LabelPrintCopy = () => {
   const ECUNAME = ["BCM", "GW", "ADAS", "PVIU", "PKC", "CIM", "INS", "ABS"];
   return (
      <div className="dtc-scan-page">
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <div className="dtc-scan-container">
                  <div className="parameter-contianer">
                     <div className="label-body">
                        <div className="label-list">
                           {ECUNAME?.map((ele, i) => (
                              <div className="label-box" key={i}>
                                 <h6>{ele}</h6>
                                 <div className="label-data">
                                    <div>
                                       <ul>
                                          <li>
                                             <p>VIN</p>:<p>BBIN24326K3415223</p>
                                          </li>
                                          <li>
                                             <p>HW Part No </p> :{" "}
                                             <p>B234884559.005</p>{" "}
                                          </li>
                                          <li>
                                             <p>SW Part No</p> :
                                             <p> S265432339.003</p>
                                          </li>
                                          <li>
                                             <p>Boot Version</p> :
                                             <p> M32958643.010</p>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="label-image">
                                       <img src={qrcode} alt="qrcode" />
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="print">
                        <button>Print</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LabelPrintCopy;
