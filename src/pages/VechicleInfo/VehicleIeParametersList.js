import Khoms from "assets/images/paramimages/Khoms.png";
import Km from "assets/images/paramimages/Km.png";
import Percentage from "assets/images/paramimages/percentage.png";
import True from "assets/images/paramimages/state.png";
import Volts from "assets/images/paramimages/volts.png";
import Ah from "assets/images/paramimages/Ah.png";
import Celsius from "assets/images/paramimages/celsius.png";
import False from "assets/images/paramimages/False.png";

const paramImages = {
   State: True,
   "Amp-hours": Ah,
   Celsius: Celsius,
   Percentage: Percentage,
   KOhms: Khoms,
   km: Km,
   Volts: Volts,
   Degrees: False,
};

const parametersList = {
   EVBUS: {
      BMS: {
         "BMS State": {
            unit: "State",
            value: "55",
         },
         "Calculated Amp-hour Capacity": {
            unit: "Amp-hours",
            value: "03",
         },
         "Average Cell Temperature": {
            unit: "Celsius",
            value: "03",
         },
         "Contactor State": {
            unit: "State",
            value: "10",
         },
         "HV Battery State of Charge": {
            unit: "Percentage",
            value: "03",
         },
         "HV Battery State of Health": {
            unit: "Percentage",
            value: "0",
         },
         "HVIL Fault State": {
            unit: "State",
            value: "10",
         },
         "Negative Isolation Resistance": {
            unit: "KOhms",
            value: "14",
         },
         "Positive Isolation Resistance": {
            unit: "KOhms",
            value: "23",
         },
         "Max Cell Voltage": {
            unit: "Volts",
            value: "17",
         },
         "Min Cell Voltage": {
            unit: "Volts",
            value: "55",
         },
         "Average Cell Voltage": {
            unit: "Volts",
            value: "12",
         },
         "Max Cell Temp": {
            unit: "Celsius",
            value: "66",
         },
         "Min Cell Temp": {
            unit: "Celsius",
            value: "100",
         },
         "Coolant Inlet Temperature": {
            unit: "Celsius",
            value: "35",
         },
         "Coolant Outlet Temperature": {
            unit: "KOhms",
            value: "0",
         },
         "HVIL Return Voltage": {
            unit: "Volts",
            value: "0",
         },
         "HVIL Low Voltage": {
            unit: "Volts",
            value: "0",
         },
         "HVIL High Voltage": {
            unit: "Volts",
            value: "0",
         },
         "KL30 Voltage": {
            unit: "Volts",
            value: "0",
         },
      },
      ICC: {
         Odometer: {
            unit: "km",
            value: "235",
         },
      },
      VCU: {
         "12v Battery Voltage": {
            unit: "km",
            value: "15",
         },
      },
      ECC: {
         "Compressor output": {
            unit: "Percentage",
            value: "0",
         },
         "Condenser Fan Output": {
            unit: "Percentage",
            value: "0",
         },
         "Outside Ambient Temperature": {
            unit: "Celsius",
            value: "0",
         },
      },
   },
   ADASBUS: {
      ADAS: {
         "Front SVC Calibration Status": {
            unit: "State",
            value: "0",
         },
         "Left SVC Calibration Status": {
            unit: "State",
            value: "0",
         },
         "Rear SVC Calibration Status ": {
            unit: "State",
            value: "0",
         },
         "Right SVC Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      CMRR_FL: {
         "Front Left Radar Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      CMRR_FR: {
         "Front Right Radar Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      CMRR_RL: {
         "Rear Left Radar Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      CMRR_RR: {
         "Rear Right Radar Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      FCM: {
         "FCM Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
      MRR: {
         "Front Center Radar Calibration Status": {
            unit: "State",
            value: "0",
         },
      },
   },
   CBUS: {
      EPS: {
         "Steering Angle": {
            unit: "Degrees",
            value: "0",
         },
         "Vehicle Speed": {
            unit: "kph",
            value: "0",
         },
         "Wheel Speed LF": {
            unit: "kph",
            value: "0",
         },
         "Wheel Speed LR": {
            unit: "kph",
            value: "0",
         },
         "Wheel Speed RF": {
            unit: "kph",
            value: "0",
         },
         "Wheel Speed RR": {
            unit: "kph",
            value: "0",
         },
      },
   },
};

const defaultParams = {
   EVBUS: {
      BMS: [
         "BMS State",
         "Calculated Amp-hour Capacity",
         "Average Cell Temperature",
         "Contactor State",
         "HV Battery State of Charge",
         "HV Battery State of Health",
         "HVIL Fault State",
         "Negative Isolation Resistance",
         "Positive Isolation Resistance",
         "Max Cell Voltage",
      ],
      ICC: ["Odometer"],
      VCU: ["12v Battery Voltage"],
   },
};

function VehicleIeParametersList() {
   // const vehicleData = {
   //    dashboardInfo: [
   //       {
   //          id: 1,
   //          unitName: "Battery voltage",
   //          unitValue: "400 V",
   //          unitStatus: true,
   //          minValue: "100 V",
   //          maxValue: "1600 V",
   //       },
   //       {
   //          id: 2,
   //          unitName: "State of charge",
   //          unitValue: "25%",
   //          unitStatus: false,
   //          minValue: "30 %",
   //          maxValue: "100 %",
   //       },
   //       {
   //          id: 3,
   //          unitName: "Front Motor current",
   //          unitValue: "30 A",
   //          unitStatus: true,
   //          minValue: "25 A",
   //          maxValue: "80 A",
   //       },
   //       {
   //          id: 4,
   //          unitName: "Front Motor voltage",
   //          unitValue: "100 V",
   //          unitStatus: true,
   //          minValue: "50 V",
   //          maxValue: "200 V",
   //       },
   //       {
   //          id: 5,
   //          unitName: "Front motor speed",
   //          unitValue: "3600 rpm",
   //          unitStatus: true,
   //          minValue: "100 rpm",
   //          maxValue: "10000 rpm",
   //       },
   //       {
   //          id: 6,
   //          unitName: "Front motor temperature",
   //          unitValue: "82 C",
   //          unitStatus: false,
   //          minValue: "85 C",
   //          maxValue: "300 C",
   //       },
   //       {
   //          id: 7,
   //          unitName: "Rear Motor current",
   //          unitValue: "20 A",
   //          unitStatus: false,
   //          minValue: "25 A",
   //          maxValue: "100 A",
   //       },
   //       {
   //          id: 8,
   //          unitName: "Rear Motor voltage",
   //          unitValue: "208 volts",
   //          unitStatus: true,
   //          minValue: "100 volts",
   //          maxValue: "500 volts",
   //       },
   //       {
   //          id: 9,
   //          unitName: "Rear motor speed",
   //          unitValue: "3600 rpm",
   //          unitStatus: true,
   //          minValue: "100 rpm",
   //          maxValue: "10000 rpm",
   //       },
   //       {
   //          id: 10,
   //          unitName: "Rear motor temperature",
   //          unitValue: "82 C",
   //          unitStatus: false,
   //          minValue: "85 C",
   //          maxValue: "300 C",
   //       },
   //       {
   //          id: 11,
   //          unitName: "Average Cell voltage",
   //          unitValue: "3.7V",
   //          unitStatus: false,
   //          minValue: "4.5 V",
   //          maxValue: "10 V",
   //       },
   //       {
   //          id: 12,
   //          unitName: "Average cell temperature",
   //          unitValue: "800 W/m",
   //          unitStatus: true,
   //          minValue: "500 W/m",
   //          maxValue: "1600 W/m",
   //       },
   //    ],
   // };

   return (
      <div className="vehicle-param-container">
         <ul>
            {Object.keys(defaultParams)?.map((data, i) =>
               Object.keys(defaultParams[data])?.map((ecuName) =>
                  defaultParams[data][ecuName]?.map((parameterName) => (
                     <li key={`${i}-${parameterName}`}>
                        <div className="ecu-param-value">
                           <h5>ECU: {ecuName}</h5>
                           <h2>
                              {
                                 parametersList[data][ecuName][parameterName]
                                    .value
                              }
                           </h2>
                           <img
                              src={
                                 paramImages[
                                    parametersList[data][ecuName][parameterName]
                                       .unit
                                 ]
                              }
                              alt="check"
                           />
                        </div>
                        <div className="parameter-name">
                           <h4>{parameterName}</h4>
                        </div>
                     </li>
                  ))
               )
            )}
         </ul>
      </div>
   );
}

export default VehicleIeParametersList;
