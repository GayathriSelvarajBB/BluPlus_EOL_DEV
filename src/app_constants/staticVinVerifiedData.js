export const vinVerifiedData = {
   VIN5153: {
      Vehicle_Information: {
         vinNumber: "VIN5153",
         Vehicle_Model: "BB Ocean",
         Vehicle_Owned_By: "Arun",
         Year: 2022,
         Connectivity_Status: "Yes",
      },
      Service_History: {
         Last_Service_Date: "2022-01-02",
         Next_Service_Date: "2022-10-03",
      },
      ECU_Information: {
         ECU_Status: {
            Total_ECU_Count: 100,
            Healthy_Count: 40,
            Faulty_Count: 60,
            DTC_Count: 55,
         },
         ECU_List: {
            ACU: {
               DTC_List: [
                  {
                     Expand_Name: "Airbag Control Unit",
                     SHORT_NAME: "DTCU200216",
                     TROUBLE_CODE: 14680598,
                     TROUBLE_CODE_HEX: "e00216",
                     DISPLAY_TROUBLE_CODE: "U200216",
                     TEXT: {
                        TI: "TI_919617792",
                        Text: "Battery Voltage Failure  -  voltage is below threshold",
                     },
                     ID: "DTCU200216",
                  },
                  {
                     Expand_Name: "Airbag Control Unit",
                     SHORT_NAME: "DTCU200317",
                     TROUBLE_CODE: 14680855,
                     TROUBLE_CODE_HEX: "e00317",
                     DISPLAY_TROUBLE_CODE: "U200317",
                     TEXT: {
                        TI: "TI_1282619341",
                        Text: "Battery Voltage Failure  -  voltage is above threshold",
                     },
                     ID: "DTCU200317",
                  },
               ],
            },
            ADAS: {
               DTC_List: [
                  {
                     Expand_Name: "Advanced Driver Assistant System ECU ",
                     SHORT_NAME: "DTCU200216",
                     TROUBLE_CODE: 14680598,
                     TROUBLE_CODE_HEX: "e00216",
                     DISPLAY_TROUBLE_CODE: "U200216",
                     TEXT: {
                        TI: "TI_919617792",
                        Text: "Battery Voltage Failure  -  voltage is below threshold",
                     },
                     ID: "DTCU200216",
                  },
                  {
                     Expand_Name: "Advanced Driver Assistant System ECU ",
                     SHORT_NAME: "DTCU200317",
                     TROUBLE_CODE: 14680855,
                     TROUBLE_CODE_HEX: "e00317",
                     DISPLAY_TROUBLE_CODE: "U200317",
                     TEXT: {
                        TI: "TI_1282619341",
                        Text: "Battery Voltage Failure  -  voltage is above threshold",
                     },
                     ID: "DTCU200317",
                  },
               ],
            },
         },
      },
   },
};
