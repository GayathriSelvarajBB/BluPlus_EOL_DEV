import {
   Routes,
   Route,
   unstable_HistoryRouter as HistoryRouter,
   Navigate,
} from "react-router-dom";
// components
import HomeComponent from "pages/Login/Login";
import BBLogo from "assets/images/fisker-logo.png";
import MainImage from "assets/images/main-image.png";
import BBOcean from "assets/images/Fisker-Ocean.webp";
import routePaths from "./routePaths";
// import VehicleInfo from "pages/VechicleInfo/VehicleInfo";
// Toast imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastCloseButton from "components/ToastCloseButton";
import { browserHistory } from "routes/browserHistory";
import DiagnosticMeasurement from "pages/DiagnosticMeasurement/DtcScan";
import HardwareInterfaceComponent from "pages/HardwareInterface/HardwareInterfaceComponent";

import ServiceSession from "pages/ServiceSession/ServiceSession";
import Flashing from "pages/Flashing/Flashing";
import ReProgramming from "pages/Reprogramming/EcuFlashing";
import StackIntegration from "pages/StackIntegration";
import HeaderWithUserValidation from "components/Header/Header";
import VehicleCalibration from "pages/VehicleCalibration/VehicleCalibration";
import Routines from "pages/Routines/Routine";
import Parameter from "pages/ParameterMeasurement/Parameter";
import EcuConfiguration from "pages/VehicleConfiguration/EcuConfiguration";
import VehicleSummary from "pages/VechicleInfo/VehicleSummary";
import Actuator from "pages/ActuatorTesting/Actuator";
import VehicleInfo from "pages/VechicleInfo/VehicleInfo";
import ServiceHistory from "pages/ServiceHistory/ServiceHistory";
import ServiceHistoryViewDetails from "pages/ServiceHistory/ServiceHistoryViewDetails";
import ServiceHistoryCopy from "pages/ServiceHistory/CopyServiceHistory";
import ServiceHistoryViewDetailsCopy from "pages/ServiceHistory/ServiceHistoryViewDetailsCopy";
import Homepage from "components/Homepage/Homepage";
import SolutionOffering from "pages/SolutionOffering/SolutionOffering";
import EolDiagnostics from "components/EcuDiagonistics/EolDiagonstics";
import Flashingsetup from "pages/EolFlashing/Flashingsetup";
import Operator from "pages/EolOperator/Operator";
import EcuTwin from "pages/EcuTwin/EcuTwin";
import VehicleConfiguration from "pages/VehicleConfiguration/VehicleConfiguration";
import Partdetails from "pages/Partdetails/Partdetails";
import LabelPrint from "pages/Labelprint/LabelPrint";
import LabelPrintCopy from "pages/Labelprint copy/LabelPrint";
import ProductionReport from "pages/ProductionReport/ProductionReport";
import VciConnective from "pages/VciConnective/VciConective";
import OrderDetails from "pages/VciConnective/OrderDetails";
import EolFlow from "components/Eolflow/EolFlow";
import BatteryFitment from "pages/BatteryFitment/BatteryFitment";
import BrakeFitment from "pages/BatteryFitment/BrakeFitment";
import KeyCard from "pages/Keycardlearning/KeyCard";
import StaticStation1 from "pages/Static/StaticStation1";
import StaticStation1Details from "pages/Static/StaticStation1Details";
import Waha from "pages/Waha/Waha";
import Dynamic from "pages/Dyanmic/Dynamic";
import ADAS from "pages/ADAS/ADAS";
import Static2 from "pages/Static2/Static2";
import Static2deatils from "pages/Static2/Static2deatils";
import Dtccheck from "pages/Dtccheck/Dtccheck";
import Shorttrack from "pages/Shorttrack/Shorttrack";
import Eolsignoff from "pages/Eolsignoff/Eolsignoff";
import ManufactureStation from "pages/ManufacturingStation/ManufactureStation/ManufactureStation";
import CreateFile from "pages/ManufacturingStation/CreateFile/CreateFile";
import ConfigWizard from "pages/ManufacturingStation/ConfigWizard/ConfigWizard";
import AssemblyLine from "pages/ManufacturingStation/AssemblyLine/AssemblyLine.jsx";
// import CampanginManger from "components/Campaignmanager/CampanginManager";

const AppRoutes = () => {
   // let isAccess = localStorage.getItem("access");
   return (
      <HistoryRouter history={browserHistory}>
         <ToastContainer
            position="top-right"
            autoClose={2000}
            // hideProgressBar
            newestOnTop={false}
            closeOnClick
            closeButton={<ToastCloseButton />}
            theme="colored"
         />
         <Routes>
            <Route
               exact
               path={routePaths.root}
               element={<Navigate to={routePaths.Homepage} />}
            />

            <Route
               exact
               path={routePaths.root}
               element={<HeaderWithUserValidation />}
            >
               <Route exact path={routePaths.EcuTwin} element={<EcuTwin />} />

               <Route path={routePaths.Waha} element={<Waha />} />

               {/* <Route
                  path={routePaths.campanginManager}
                  element={<CampanginManger />}
               /> */}

               {/* placeholder '/' route component to redirect to landing page */}
               <Route
                  path={routePaths.solutionOffering}
                  element={<SolutionOffering />}
               />
               <Route
                  path={routePaths.hardwareInterface}
                  element={
                     <HardwareInterfaceComponent
                        BBLogo={BBLogo}
                        MainImage={MainImage}
                     />
                  }
               />
               <Route
                  path={routePaths.vehicleInfo}
                  element={<VehicleSummary />}
               />
               <Route
                  path={routePaths.vehicleDetails}
                  element={<VehicleInfo />}
               />
               <Route
                  path={routePaths.serviceHistoryCopy}
                  element={<ServiceHistoryCopy />}
               />
               <Route
                  path={`${routePaths.serviceHistoryDetails}/:id`}
                  element={<ServiceHistoryViewDetails />}
               />
               <Route
                  path={`${routePaths.serviceHistoryDetailsCopy}/:id`}
                  element={<ServiceHistoryViewDetailsCopy />}
               />
               <Route
                  path={routePaths.vehicleConfiguration}
                  element={<VehicleConfiguration />}
               />

               <Route
                  path={routePaths.diagnosticMeasurement}
                  element={<DiagnosticMeasurement />}
               />
               <Route
                  path={routePaths.vehicleConfiguration}
                  element={<EcuConfiguration />}
               />
               <Route
                  path={routePaths.serviceHistory}
                  element={<ServiceHistory />}
               />
               <Route
                  path={routePaths.serviceSession}
                  element={<ServiceSession />}
               />
               <Route
                  path={routePaths.actuatorTesting}
                  element={<Actuator />}
               />
               <Route
                  path={routePaths.stackIntegrationDemo}
                  element={<StackIntegration />}
               />
               <Route path={routePaths.routine} element={<Routines />} />
               <Route
                  path={routePaths.actuatorTesting}
                  element={<Actuator />}
               />
               <Route path={routePaths.flashing} element={<ReProgramming />} />
               <Route path={routePaths.ecu_flashing} element={<Flashing />} />
               {/* <Route
                  path={routePaths.re_programming}
                  element={<EcuFlashing />}
               /> */}
               <Route path={routePaths.measurement} element={<Parameter />} />

               <Route
                  path={routePaths.vehicleCalibration}
                  element={<VehicleCalibration />}
               />
               <Route
                  path={routePaths.EolDiagonstics}
                  element={<EolDiagnostics />}
               />
               <Route
                  path={routePaths.Flashingsetup}
                  element={<Flashingsetup />}
               />
               <Route path={routePaths.Operator} element={<Operator />} />
               <Route path={routePaths.PartDetails} element={<Partdetails />} />
               <Route path={routePaths.LabelPrint} element={<LabelPrint />} />
               <Route path={routePaths.Shorttrack} element={<Shorttrack />} />
               <Route
                  path={routePaths.LabelPrintCopy}
                  element={<LabelPrintCopy />}
               />
               <Route
                  path={routePaths.ProductionReport}
                  element={<ProductionReport />}
               />
               <Route
                  path={routePaths.VciConnective}
                  element={<VciConnective />}
               />
               <Route path={routePaths.EolFlow} element={<EolFlow />} />
               <Route
                  path={routePaths.OrderDetails}
                  element={<OrderDetails />}
               />
               <Route
                  path={routePaths.BrakeFitment}
                  element={<BrakeFitment />}
               />

               <Route
                  path={routePaths.StaticStation1}
                  element={<StaticStation1 />}
               />
               <Route
                  path={routePaths.Static1Details}
                  element={<StaticStation1Details />}
               />
               <Route
                  path={routePaths.BatteryFitment}
                  element={<BatteryFitment />}
               />
               <Route path={routePaths.KeycardLearning} element={<KeyCard />} />
               <Route path={routePaths.Dynamic} element={<Dynamic />} />
               <Route path={routePaths.ADAS} element={<ADAS />} />
               <Route path={routePaths.Static2} element={<Static2 />} />
               <Route
                  path={routePaths.Static2deatils}
                  element={<Static2deatils />}
               />
               <Route path={routePaths.DtcCheck} element={<Dtccheck />} />
               <Route path={routePaths.Signoff} element={<Eolsignoff />} />

               {/* For Manufacturing Station */}
               <Route
                  path={routePaths.manufacturing}
                  element={<ManufactureStation />}
               />
               <Route path={routePaths.createFile} element={<CreateFile />} />
               <Route
                  path={routePaths.configWizard}
                  element={<ConfigWizard />}
               />
               <Route
                  path={routePaths.assemblyLine}
                  element={<AssemblyLine />}
               />
            </Route>
            <Route path={routePaths.Homepage} element={<Homepage />} />

            <Route
               path={routePaths.login}
               element={<HomeComponent BBLogo={BBLogo} MainImage={BBOcean} />}
            />
         </Routes>
      </HistoryRouter>
   );
};

export default AppRoutes;
