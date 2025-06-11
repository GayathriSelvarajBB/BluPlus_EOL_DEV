import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";
import DtcError from "assets/images/dtc-error.png";
import EcuChip from "assets/images/ecu-chip.png";

var settings = {
   infinite: false,
   centerPadding: "60px",
   slidesToShow: 6,
   slidesToScroll: 6,
   speed: 500,
   responsive: [
      {
         breakpoint: 1300,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
         },
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 6,
         },
      },
      {
         breakpoint: 1000,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         },
      },
      {
         breakpoint: 850,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
   ],
};

const DTCSlider = ({ dtcData, isLoading }) => {
   const processedDtcData = useMemo(() => {
      if (!dtcData?.dtcCount) {
         return [];
      }
      return Object.keys(dtcData.dtcData).reduce((arr, ecu) => {
         return arr.concat(dtcData.dtcData[ecu].dtcResponse);
      }, []);
   }, [dtcData]);

   if (isLoading) {
      return (
         <div className="mini-loader-container">
            <span className="mini-loader" />
         </div>
      );
   }

   return dtcData?.dtcCount ? (
      <ul>
         <Slider {...settings} data-testid="dtc-slider">
            {processedDtcData.map((data, i) => (
               <li key={i}>
                  <div className="dtc-value">
                     <div className="dtc-each">
                        <div className="dtc-sec-each">
                           <div className="dtc-icon">
                              <img src={DtcError} alt="Dtc" />
                           </div>
                           <span>{data.dtcCode}</span>
                        </div>
                        <div className="dtc-sec-each">
                           <div className="dtc-icon">
                              <img src={EcuChip} alt="ECU" />
                           </div>
                           <span>{data.ecuName}</span>
                        </div>
                     </div>
                     <div className="dtc-desc">
                        <p>{data.dtcDescription}</p>
                     </div>
                  </div>

                  {/* <div className="dtc-detailsv1">
                     <div className="error_dtcv1">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           className="bi bi-exclamation-triangle"
                           viewBox="0 0 16 16"
                        >
                           <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
                           <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path>
                        </svg>
                     </div>
                     <div className="each-dtc-detailsv1">
                        <div className="each-dtc-valuev1">
                           <div className="dtc-imagev1">
                              <img src={Warning} alt="Warning" />
                           </div>
                           <div className="dtc-contentv1">{data.dtcCode}</div>
                        </div>
                        <div className="each-dtc-valuev1">
                           <div className="dtc-imagev1">
                              <img src={ECUChip} alt="ECUChip" />
                           </div>
                           TODO: show the ECU name in the below element dynamically
                           <div className="dtc-contentv1">{data.ecuName}</div>
                        </div>
                        <div className="dtc-desc-content">
                           <p className="dtc-description">
                              {data.dtcDescription}
                           </p>
                        </div>
                     </div>
                  </div> */}
               </li>
            ))}
         </Slider>
      </ul>
   ) : (
      <div className="no-data-found-txt">No DTC in Vehicle</div>
   );
};

export default DTCSlider;
