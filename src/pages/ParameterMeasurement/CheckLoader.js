import LoaderImg from "assets/images/loader-im-blue.png";

function CheckLoader() {
   return (
      <div className="loader-popup-check">
         <div className="loader-check-content">
            <img src={LoaderImg} alt="loader img" />
         </div>
      </div>
   );
}

export default CheckLoader;
