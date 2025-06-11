export const busEcuObject = {
   EVBUS: ["PDU", "BMS", "ECC"],
   INVCAN: ["MCU_R", "MCU_F", "VCU"],
   ADASBUS: ["PKC", "ADAS", "FCM"],
   CBUS: ["ESP", "SCM", "iBooster"],
   ADAS_Private: ["MRR", "CMRR_FL", "CMRR_FR", "CMRR_RL", "CMRR_RR"],
   IBUS2: ["ICC"],
   BodyBUS: ["PLGM", "OHC", "CIM", "VSP", "PSM", "TRM", "BCM"],
   PKC_CAN_Private: ["NFC_Start"],
   DiagBUS: ["GW"],
};

/**
 * Object have the ecu name as key and the Bus Name as value to identify the bus for the ecu 
 * @example 
 * {
      PDU: "EVBUS",
      BMS: "EVBUS",
      ECC: "EVBUS",
      MCU_R: "INVCAN",
      MCU_F: "INVCAN",
      VCU: "INVCAN",
      PKC: "ADASBUS",
      ADAS: "ADASBUS",
      FCM: "ADASBUS",
 * }
 */
export const ecuBusMapping = Object.keys(busEcuObject).reduce((obj, bus) => {
   busEcuObject[bus].forEach((ecu) => {
      obj[ecu] = bus;
   });
   return obj;
}, {});
