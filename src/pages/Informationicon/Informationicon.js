import infodata from "../Symtomsproducure/DTC_056016_Diagnostics_procedure.pdf";
// import { Document, pdfjs,Page} from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Informationicon = (props) => {
   return (
      <div className="body-wrapper">
         <div className="dtc-scan-container">
            <div className="dtc-contianer-sec">
               <div className="dtc-container-list">
                  <div className="infodata-button">
                     <button onClick={props.click}>Back</button>
                  </div>
                  {/* <Document
                           file={infodata}
                           onContextMenu={(e) => e.preventDefault()}
                           onLoadError={(error) =>
                              console.log("Inside Error", error)
                           }><Page pageNumber={1}></Page></Document  > */}

                  <embed
                     src={infodata + "#toolbar=0"}
                     width="100%"
                     height="100%"
                     title="infodata"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Informationicon;
