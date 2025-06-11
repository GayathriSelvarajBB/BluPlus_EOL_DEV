// import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import ServiceSessionModel from "./ServiceSessionModel";

const ServiceSession = () => {
   return (
      <div className="service-session-page">
         {/* <Header headerActive={true} connectivityStatus={true} /> */}
         <div className="page-wrapper">
            <SideBar />
            <div className="body-wrapper">
               <ServiceSessionModel />
            </div>
         </div>
      </div>
   );
};

export default ServiceSession;
