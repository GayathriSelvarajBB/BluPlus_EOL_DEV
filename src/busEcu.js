export const busEcuList = {
   EVBUS: [
      {
         short_name: "BMS",
         ecu_name: "Battery Management System",
         type: "ota",
      },
      {
         short_name: "WEVC",
         ecu_name: "Wireless Electric Vehicle charging",
         type: "non-ota",
      },
      {
         short_name: "ECC",
         ecu_name: "Electrical Climate Controller",
         type: "ota",
      },
      {
         short_name: "PDU",
         ecu_name: "Power Distribution Unit",
         type: "ota",
      },
      {
         short_name: "VCU",
         ecu_name: "Vehicle Control Unit",
         type: "non-ota",
      },
   ],
   INVCAN: [
      {
         short_name: "MCU_F",
         ecu_name: "Motor Control Unit_Front",
         type: "ota",
      },
      {
         short_name: "MCU_R",
         ecu_name: "Motor Control Unit_Rear",
         type: "ota",
      },
      {
         short_name: "VCU",
         ecu_name: "Vehicle Control Unit",
         type: "non-ota",
      },
   ],
   CBUS: [
      {
         short_name: "EPS",
         ecu_name: "Electrical Power Steering",
         type: "non-ota",
      },
      {
         short_name: "ESP",
         ecu_name: "Electronic Stability Program",
         type: "ota",
      },
      {
         short_name: "iBooster",
         ecu_name: "Intelligent Booster",
         type: "ota",
      },
      {
         short_name: "SCM",
         ecu_name: "  Suspension Control Module",
         type: "ota",
      },
      {
         short_name: "ACU",
         ecu_name: "Airbag Control Unit",
         type: "non-ota",
      },
      {
         short_name: "VCU",
         ecu_name: " Vehicle Control Unit  ",
         type: "ota",
      },
   ],
   IBUS1: [
      {
         short_name: "AMP",
         ecu_name: " Amplifier ",
         type: "non-ota",
      },
      {
         short_name: "ICC",
         ecu_name: " Integrated Cockpit Controller",
         type: "non-ota",
      },
      {
         short_name: "MFSS",
         ecu_name: "   Multi-function steering wheel switch",
         type: "non-ota",
      },
      {
         short_name: "RAC",
         ecu_name: "  Rear Control Display",
         type: "non-ota",
      },
      {
         short_name: "PWC_L",
         ecu_name: " Phone Wireless Charging Left ",
         type: "ota",
      },
      {
         short_name: "PWC_R",
         ecu_name: " Phone Wireless Charging Right",
         type: "ota",
      },
      {
         short_name: "Rotator",
         ecu_name: "CID Rotator",
         type: "non-ota",
      },
      {
         short_name: "TDS",
         ecu_name: "Touch Bar Display & Button Island ",
         type: "non-ota",
      },
   ],
   IBUS2: [
      {
         short_name: "ICC",
         ecu_name: "Integrated Cockpit Controller",
         type: "ota",
      },
   ],
   BodyBUS: [
      {
         short_name: "OHC",
         ecu_name: "Over Head Console  ",
         type: "ota",
      },
      {
         short_name: "BCM",
         ecu_name: " Body Control Module ",
         type: "ota",
      },
      {
         short_name: "CIM",
         ecu_name: " Column Integrated Module",
         type: "ota",
      },
      {
         short_name: "DSCM",
         ecu_name: "Driver Seat Control Module  ",
         type: "non-ota",
      },
      {
         short_name: "PLGM",
         ecu_name: "  Power Lift Gate Module",
         type: "ota",
      },
      {
         short_name: "PSM",
         ecu_name: " Passenger Seat Module",
         type: "ota",
      },
      {
         short_name: "TPMS",
         ecu_name: "Tire Pressure Monitoring System",
         type: "non-ota",
      },
      {
         short_name: "VSP",
         ecu_name: " Vehicle Sound For Pedestrian",
         type: "ota",
      },
      {
         short_name: "TRM",
         ecu_name: "  Trailer Module",
         type: "ota",
      },
   ],
   ADASBUS: [
      {
         short_name: "FCM",
         ecu_name: "Front Camera Module​",
         type: "ota",
      },
      {
         short_name: "SVS",
         ecu_name: "Surround View System​",
         type: "ota",
      },
      {
         short_name: "MRR",
         ecu_name: "Mid-Range Radar​",
         type: "ota",
      },
   ],
   ADASPrivate: [
      {
         short_name: "CMRR_FL",
         ecu_name: "    Corner Mid Range Radar_Front Left",
         type: "ota",
      },
      {
         short_name: "CMRR_FR",
         ecu_name: "  Corner Mid Range Radar_Front Right",
         type: "ota",
      },
      {
         short_name: "CMRR_RL",
         ecu_name: "  Corner Mid Range Radar_Rear Left ",
         type: "ota",
      },

      {
         short_name: "CMRR_RR",
         ecu_name: " Corner Mid Range Radar_Rear Right  ",
         type: "ota",
      },
      {
         short_name: "FCM",
         ecu_name: " Front Camera Module ",
         type: "non-ota",
      },
      {
         short_name: "MRR",
         ecu_name: " Mid Range Radar ",
         type: "ota",
      },

      {
         short_name: "USS*12",
         ecu_name: "Ultrasonic Sensor",
         type: "non-ota",
      },
      {
         short_name: "DMS",
         ecu_name: "  Driver Monitor System",
         type: "non-ota",
      },
      {
         short_name: "SVC_F",
         ecu_name: "   Sourround View Camera Front",
         type: "non-ota",
      },
      {
         short_name: "SVC_L",
         ecu_name: "Sourround View Camera Left (mirror) ",
         type: "non-ota",
      },
      {
         short_name: "SVC_R",
         ecu_name: "Sourround View Camera Right (mirror)  ",
         type: "non-ota",
      },
      {
         short_name: "SVC_Rear",
         ecu_name: "  Sourround View Camera Rear  ",
         type: "non-ota",
      },
   ],
   PKCCANPrivate: [
      {
         short_name: "NFC_Access",
         ecu_name: " PKC_NFC_B Pillar/Access    ",
         type: "non-ota",
      },
      {
         short_name: "NFC_Start",
         ecu_name: " PKC_NFC_Center Console/Start",
         type: "ota",
      },
   ],
   BBUS: [
      {
         short_name: "BCS",
         ecu_name: " Battery HV Current senso   ",
         type: "non-ota",
      },
      {
         short_name: "PVIU",
         ecu_name: " Photovoltaic integration unit (PVIU)",
         type: "non-ota",
      },
   ],

   FCBUS: [
      {
         short_name: "EAS",
         ecu_name: "HV Electrical Air Compressor System ",
         type: "non-ota",
      },
      {
         short_name: "PTC_B",
         ecu_name: "PTC Battery 3,5 kW",
         type: "non-ota",
      },
      {
         short_name: "PTC_H",
         ecu_name: "PTC Heater 6 k",
         type: "non-ota",
      },
   ],
   StepperLIN: [
      {
         short_name: "FBM_L",
         ecu_name: "    Front Beam   Module_Left_Headlamp_CCC/ECE/SAE ",
         type: "non-ota",
      },
      {
         short_name: "FBM_R",
         ecu_name: "  Front Beam  Module_Right_Headlamp_CCC/ECE/SAE",
         type: "non-ota",
      },
   ],

   Screen: [
      {
         short_name: "CID",
         ecu_name: " Central Infotainment Display inkl. Motor ",
         type: "non-ota",
      },
      {
         short_name: "IDS",
         ecu_name: "Instrument Cluster Display ",
         type: "non-ota",
      },
   ],
   LIN1: [
      {
         short_name: "AP_FL ",
         ecu_name: " Anti-Pinch Front Lef ",
         type: "non-ota",
      },
      {
         short_name: "AP_FR",
         ecu_name: "Anti-Pinch Front Right ",
         type: "non-ota",
      },
      {
         short_name: "AP_RL",
         ecu_name: "Anti-Pinch Rear Lef  ",
         type: "non-ota",
      },
      {
         short_name: "AP_RR",
         ecu_name: "Anti-Pinch Rear Right ",
         type: "non-ota",
      },
      {
         short_name: "AP_ML",
         ecu_name: " Anti-Pinch Middle Left ",
         type: "non-ota",
      },
      {
         short_name: "AP_MR",
         ecu_name: " Anti-Pinch Middle Right",
         type: "non-ota",
      },
      {
         short_name: "AP_TG",
         ecu_name: "Anti-Pinch Tailgate  ",
         type: "non-ota",
      },
      {
         short_name: "DWSG",
         ecu_name: " Driver Window Switch Group",
         type: "non-ota",
      },
   ],
};
