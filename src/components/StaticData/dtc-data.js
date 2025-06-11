export const dtclist = {
   ACU: {
      DtcList: [
         {
            ExpandName: "Airbag Control Unit",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "91a379f5-d29f-402f-93dd-f769999ad6e6",
            Text: null,
         },
         {
            ExpandName: "Airbag Control Unit",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "1f437d91-9144-4e69-a0e2-359fe25e2935",
            Text: null,
         },
         {
            ExpandName: "Airbag Control Unit",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "98cd0b08-e144-4300-97ed-0a7901d7f42e",
            Text: null,
         },
      ],
   },
   ADAS: {
      DtcList: [
         {
            ExpandName: "Advanced Driver Assistant System ECU ",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "ee840432-8504-44b6-9ac8-08bf43f00a87",
            Text: null,
         },
         {
            ExpandName: "Advanced Driver Assistant System ECU ",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "c27bb418-2f0f-4f90-8628-535984dc87ef",
            Text: null,
         },
         {
            ExpandName: "Advanced Driver Assistant System ECU ",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "8389ad70-a7cf-4e44-ad81-55947b8c782e",
            Text: null,
         },
      ],
   },
   AMP: {
      DtcList: [
         {
            ExpandName: "Amplifier",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "97d475ef-d9ac-450c-84b6-8faa81974494",
            Text: null,
         },
         {
            ExpandName: "Amplifier",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "74c29151-0031-46ac-a3ce-444bef5e00a6",
            Text: null,
         },
         {
            ExpandName: "Amplifier",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "fab77c42-b8ab-4d60-96d2-810e14698e39",
            Text: null,
         },
      ],
   },
   BCM: {
      DtcList: [
         {
            ExpandName: "Body Control Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "43e9b64f-c809-4aff-b60a-e899551d8d53",
            Text: null,
         },
         {
            ExpandName: "Body Control Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "0ba915d5-189b-4d2a-9eb7-b2f42e61575f",
            Text: null,
         },
         {
            ExpandName: "Body Control Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "3bdd9856-fec9-4431-a922-9f9bc17339b0",
            Text: null,
         },
      ],
   },
   BMS: {
      DtcList: [
         {
            ExpandName: "Battery Management System",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "d8c8b0c2-2b5d-4ef0-b9ec-7f8e9a1ac611",
            Text: null,
         },
         {
            ExpandName: "Battery Management System",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "222d0fb2-49f1-4fb8-906a-a1352e11c575",
            Text: null,
         },
         {
            ExpandName: "Battery Management System",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "cae83f7c-372c-41d7-9e80-a656106a0338",
            Text: null,
         },
      ],
   },
   CIM: {
      DtcList: [
         {
            ExpandName: "Column Integrated Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "e6c8d6d4-caa6-422f-92f2-81e0bf441174",
            Text: null,
         },
         {
            ExpandName: "Column Integrated Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "fad7c9bc-2a7d-4b4c-ac26-84fb26feed26",
            Text: null,
         },
         {
            ExpandName: "Column Integrated Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "723917fc-f04a-47f0-b8a8-b0261564720e",
            Text: null,
         },
      ],
   },
   CMRR_FL: {
      DtcList: [
         {
            ExpandName: "Corner Mid Range Radar_Front Left",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "f2581993-4ca3-4f28-b407-51cac6e99b2a",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Front Left",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "f97fc890-cbf7-43e6-b41f-791ee8e1d5d9",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Front Left",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "ce9a743e-1279-47db-9794-49a23485388d",
            Text: null,
         },
      ],
   },
   CMRR_FR: {
      DtcList: [
         {
            ExpandName: "Corner Mid Range Radar_Front Right",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "b197ec73-9002-480e-93a6-3a3b595b4b1e",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Front Right",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "bf5096ba-f5a1-4771-9351-173ca2936bb0",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Front Right",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "94baee18-e8d5-4a5a-9f20-864dbcb87c12",
            Text: null,
         },
      ],
   },
   CMRR_RL: {
      DtcList: [
         {
            ExpandName: "Corner Mid Range Radar_Rear Left",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "bfd46974-abcd-473a-b0ae-204f31349edd",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Rear Left",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "998155d4-85d7-478f-8838-f9d2cc41ef91",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Rear Left",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "f9bf267d-4fa4-4304-a36c-5ab69cba8acc",
            Text: null,
         },
      ],
   },
   CMRR_RR: {
      DtcList: [
         {
            ExpandName: "Corner Mid Range Radar_Rear Right",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "ef0c7829-27b5-42bd-bd7a-41a6a2290b76",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Rear Right",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "bb5f47de-1b58-47c9-84b6-e939e1301c73",
            Text: null,
         },
         {
            ExpandName: "Corner Mid Range Radar_Rear Right",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "b04a4b1d-89cb-49ee-865d-cba86e8e5c27",
            Text: null,
         },
      ],
   },
   DSMC: {
      DtcList: [
         {
            ExpandName: "",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "e36feb04-298d-4f3d-9c82-8d133bd16524",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "ca495057-eb15-4f07-a4c5-1192010a897b",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "c5944ffd-a3df-4c1b-8fe9-214b3756f0ed",
            Text: null,
         },
      ],
   },
   EAS: {
      DtcList: [
         {
            ExpandName: "HV Electrical Air Compressor System",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "b61d0fa2-f407-430f-97df-4bce57f09a6d",
            Text: null,
         },
         {
            ExpandName: "HV Electrical Air Compressor System",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "0f9cdecc-0c4b-496c-b3a5-6836c0d06a57",
            Text: null,
         },
         {
            ExpandName: "HV Electrical Air Compressor System",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "44bc6a76-9f7e-4d7d-af50-90d0d76427db",
            Text: null,
         },
      ],
   },
   ECC: {
      DtcList: [
         {
            ExpandName: "Electrical Climate Controller",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "23a7b11d-e62e-4184-80c7-505d5ccfbd67",
            Text: null,
         },
         {
            ExpandName: "Electrical Climate Controller",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "01ad03cb-2309-4c6f-9c60-f684317e6f83",
            Text: null,
         },
         {
            ExpandName: "Electrical Climate Controller",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "4b8564fd-357f-4339-bd2f-056988c7040a",
            Text: null,
         },
      ],
   },
   EPS: {
      DtcList: [
         {
            ExpandName: "Electrical Power Steering",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "e979567f-9305-4368-b2ff-9f9366da0873",
            Text: null,
         },
         {
            ExpandName: "Electrical Power Steering",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "79093f3f-c4e0-431b-b1c2-d02613d5df55",
            Text: null,
         },
         {
            ExpandName: "Electrical Power Steering",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "ffd06d8d-3c7e-4731-bb0b-612e62fdc9e0",
            Text: null,
         },
      ],
   },
   ESP: {
      DtcList: [
         {
            ExpandName: "Electronic Stability Program",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "e8e8c0a4-c209-4918-a8d2-01a8f5efc956",
            Text: null,
         },
         {
            ExpandName: "Electronic Stability Program",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "a1b2ee1b-f294-46c8-8dfd-c7b10026d190",
            Text: null,
         },
         {
            ExpandName: "Electronic Stability Program",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "fa493940-bc4d-468b-8968-c0f62497e595",
            Text: null,
         },
      ],
   },
   FCM: {
      DtcList: [
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "f069ef75-8dbe-4695-a9f1-a6b0dd998015",
            Text: null,
         },
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "21357a6a-e526-4337-a146-1022e8b9dfb3",
            Text: null,
         },
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "35a33fdb-69e4-4b98-adc9-3f46d68f2a0d",
            Text: null,
         },
      ],
   },
   GW: {
      DtcList: [
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "c718191f-5afc-480b-9f56-89e5dfe41576",
            Text: null,
         },
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "53c4220a-90b7-493a-a5b0-ccbf827949aa",
            Text: null,
         },
         {
            ExpandName: "Front Camera Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "3469ff47-82ce-4302-9bbf-6c879253ca7a",
            Text: null,
         },
      ],
   },
   iBooster: {
      DtcList: [
         {
            ExpandName: "Intelligent Booster",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "ce62f79e-5bf6-42fc-bb51-1c1ced73edda",
            Text: null,
         },
         {
            ExpandName: "Intelligent Booster",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "fa7bd37d-c2c4-499d-8d0a-b6e82d72995e",
            Text: null,
         },
         {
            ExpandName: "Intelligent Booster",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "959d02d7-4237-4e6d-821e-d76490d4b2a7",
            Text: null,
         },
      ],
   },
   ICC: {
      DtcList: [
         {
            ExpandName: "Integrated Cockpit Controller",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "77176a08-0ab6-4dbb-b0db-c6aca70b40ba",
            Text: null,
         },
         {
            ExpandName: "Integrated Cockpit Controller",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "c89457eb-fd7c-4372-a15c-cfa4c8eb91c6",
            Text: null,
         },
         {
            ExpandName: "Integrated Cockpit Controller",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "34c5ef77-d5b1-4600-9449-1a31102d67c8",
            Text: null,
         },
      ],
   },
   MCU_F: {
      DtcList: [
         {
            ExpandName: "Motor Control Unit_Front",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "c1814b5f-d6e6-492b-a01d-2a8542d66c6d",
            Text: null,
         },
         {
            ExpandName: "Motor Control Unit_Front",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "bd9d1c03-d7ad-4824-9831-848594d3afbb",
            Text: null,
         },
         {
            ExpandName: "Motor Control Unit_Front",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "d088bbab-a9c8-41d7-baf0-ee93f49a91ec",
            Text: null,
         },
      ],
   },
   MCU_R: {
      DtcList: [
         {
            ExpandName: "Motor Control Unit_Rear",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "17b9a6dc-a9b4-42fa-a8a6-14cbbd29f675",
            Text: null,
         },
         {
            ExpandName: "Motor Control Unit_Rear",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "26495e90-8adc-41a2-9804-ecc1950adffc",
            Text: null,
         },
         {
            ExpandName: "Motor Control Unit_Rear",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "7880487e-2ba9-4c87-8153-0e4433bf4cdf",
            Text: null,
         },
      ],
   },
   MFSS: {
      DtcList: [
         {
            ExpandName: "Multi-function steering wheel switch",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "4e87f530-5ccd-4a05-9335-8ff95aeee5e5",
            Text: null,
         },
         {
            ExpandName: "Multi-function steering wheel switch",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "ad34154c-b1a9-4997-b0a5-4920ba1bfbd5",
            Text: null,
         },
         {
            ExpandName: "Multi-function steering wheel switch",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "363311f3-0661-45c8-8418-1039c409b34e",
            Text: null,
         },
      ],
   },
   MRR: {
      DtcList: [
         {
            ExpandName: "Mid Range Radar",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "ff3e8b59-e3de-449e-bd26-d5048ce82d4d",
            Text: null,
         },
         {
            ExpandName: "Mid Range Radar",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "cc0db2bd-cbff-4ccb-b9bf-cb8e55c06cd0",
            Text: null,
         },
         {
            ExpandName: "Mid Range Radar",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "67dc5e8e-c43d-4fdd-8c93-58709d517bd9",
            Text: null,
         },
      ],
   },
   OHC: {
      DtcList: [
         {
            ExpandName: "Over Head Console",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "2c922c25-672c-495e-9efb-e1c7b7bb2fd6",
            Text: null,
         },
         {
            ExpandName: "Over Head Console",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "172b0a4e-bab6-40f8-bba3-95f6ca790866",
            Text: null,
         },
         {
            ExpandName: "Over Head Console",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "b4973d29-ed12-41d1-b0d3-32aee3ae23b0",
            Text: null,
         },
      ],
   },
   PDU: {
      DtcList: [
         {
            ExpandName: "Power Distribution Unit",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "6b37fb26-d0f6-459f-99ac-f81f2a7de847",
            Text: null,
         },
         {
            ExpandName: "Power Distribution Unit",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "88ab0507-1056-4a9f-966e-1a50066b6f11",
            Text: null,
         },
         {
            ExpandName: "Power Distribution Unit",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "2c67fcad-14f8-4a40-a7a8-eaab7fb6afea",
            Text: null,
         },
      ],
   },
   PKC: {
      DtcList: [
         {
            ExpandName: "Phone Key Controller ",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "e4dd1a96-1cf6-43ac-8ca2-a239b6501bfa",
            Text: null,
         },
         {
            ExpandName: "Phone Key Controller ",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "b046512f-b156-4541-9a2a-082438efeef1",
            Text: null,
         },
         {
            ExpandName: "Phone Key Controller ",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "9cd3e945-b343-498d-95a6-95e0df6b2a45",
            Text: null,
         },
      ],
   },
   PLGM: {
      DtcList: [
         {
            ExpandName: "Power Lift Gate Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "a6b0d333-b445-4f54-bc1e-17aca35f3bfc",
            Text: null,
         },
         {
            ExpandName: "Power Lift Gate Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "0d8869b6-ea4b-458f-9f38-5cd91bc10d4c",
            Text: null,
         },
         {
            ExpandName: "Power Lift Gate Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "77552d51-8e25-41d1-af40-e6dd2a27f50e",
            Text: null,
         },
      ],
   },
   PSM: {
      DtcList: [
         {
            ExpandName: "Passenger Seat Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "69c0a8c6-97f8-4d78-ad21-26c949ea6737",
            Text: null,
         },
         {
            ExpandName: "Passenger Seat Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "3adafd48-aeca-499a-9f77-07f1c481fe74",
            Text: null,
         },
         {
            ExpandName: "Passenger Seat Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "088a7e97-db11-48ca-97a5-e5869ed95c8c",
            Text: null,
         },
      ],
   },
   PVIU: {
      DtcList: [
         {
            ExpandName: "Photovoltaic integration unit",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "bfbf2740-89c6-4be5-8d09-8a8cfbe9cd06",
            Text: null,
         },
         {
            ExpandName: "Photovoltaic integration unit",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "d565486b-7537-45fc-a524-b9adbc9832bf",
            Text: null,
         },
         {
            ExpandName: "Photovoltaic integration unit",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "a6977c51-b19c-44ed-994f-89ee4158ace9",
            Text: null,
         },
      ],
   },
   PWC_L: {
      DtcList: [
         {
            ExpandName: "Phone Wireless Charging Left",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "7bb99333-d93e-4605-a0a5-7cb179df6613",
            Text: null,
         },
         {
            ExpandName: "Phone Wireless Charging Left",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "4f421454-c014-4be5-b300-7da823e50ad4",
            Text: null,
         },
         {
            ExpandName: "Phone Wireless Charging Left",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "3cf55147-8ccd-470d-b27e-3cf93fb55fc8",
            Text: null,
         },
      ],
   },
   PWC_R: {
      DtcList: [
         {
            ExpandName: "Phone Wireless Charging Right",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "9e14fd7e-e064-485d-b927-3f51d6aa4396",
            Text: null,
         },
         {
            ExpandName: "Phone Wireless Charging Right",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "e7e64b8a-ce07-49c9-b387-3b14c994ce43",
            Text: null,
         },
         {
            ExpandName: "Phone Wireless Charging Right",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "8f36707c-d5d7-4570-9759-552c9baac101",
            Text: null,
         },
      ],
   },
   RAC: {
      DtcList: [
         {
            ExpandName: "Rear Control Display",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "4a261261-df43-47b9-b460-f04a8e5351b0",
            Text: null,
         },
         {
            ExpandName: "Rear Control Display",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "84969acf-73f9-4f2d-aa84-9ba6227e7da1",
            Text: null,
         },
         {
            ExpandName: "Rear Control Display",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "22fc5c82-9d7f-4887-ac7c-bac86a26735c",
            Text: null,
         },
      ],
   },
   SCM: {
      DtcList: [
         {
            ExpandName: "Suspension Control Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "5f2402f5-a058-450a-8185-36697089f810",
            Text: null,
         },
         {
            ExpandName: "Suspension Control Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "a55bc8ab-bdd2-44c9-abaa-8a8fdaefbd66",
            Text: null,
         },
         {
            ExpandName: "Suspension Control Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "d4d9b245-1836-4c4e-9be3-b4161eb5df62",
            Text: null,
         },
      ],
   },
   TBOX: {
      DtcList: [
         {
            ExpandName: "",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "312b6753-7e86-4b5d-ab6d-e222bb6a86ca",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "f2c4e09a-500c-467d-9014-759775d65e84",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "1abe9080-a7f3-4345-9c16-628f2090ab79",
            Text: null,
         },
      ],
   },
   TDS: {
      DtcList: [
         {
            ExpandName: "Touch Bar Display & Button Island",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "d15dfe88-baa9-4075-a445-6352be130934",
            Text: null,
         },
         {
            ExpandName: "Touch Bar Display & Button Island",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "b492812f-3914-46cf-9045-66ad830982ba",
            Text: null,
         },
         {
            ExpandName: "Touch Bar Display & Button Island",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "be5f5b6e-f5fe-4834-bb34-b3102f2fcffe",
            Text: null,
         },
      ],
   },
   TRM: {
      DtcList: [
         {
            ExpandName: "Trailer Module",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "d92cc3ff-0d67-4459-a22a-d185eba8911e",
            Text: null,
         },
         {
            ExpandName: "Trailer Module",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "59b73e97-c415-43d1-9a79-2ea2da5cc8d7",
            Text: null,
         },
         {
            ExpandName: "Trailer Module",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "367c69a1-ba82-446c-a6d0-4373f961a043",
            Text: null,
         },
      ],
   },
   VCU: {
      DtcList: [
         {
            ExpandName: "Vehicle Control Unit",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "35e9de8a-e5b9-470f-8c74-4887a2ce01d7",
            Text: null,
         },
         {
            ExpandName: "Vehicle Control Unit",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "4ad0b31c-b4c6-419d-aecf-c0d583c57ab3",
            Text: null,
         },
         {
            ExpandName: "Vehicle Control Unit",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "3e034ed6-53f9-4222-93f0-37af1f615e64",
            Text: null,
         },
      ],
   },
   VSP: {
      DtcList: [
         {
            ExpandName: "Vehicle Sound For Pedestrian",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "3d126865-db58-416f-b6bb-32494733abbb",
            Text: null,
         },
         {
            ExpandName: "Vehicle Sound For Pedestrian",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "ca80059a-59b1-45b2-b1cb-947914652eaf",
            Text: null,
         },
         {
            ExpandName: "Vehicle Sound For Pedestrian",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "b882d3c5-a642-46e3-bbd0-0cb1ee32dd71",
            Text: null,
         },
      ],
   },
   WTC_B: {
      DtcList: [
         {
            ExpandName: "",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "6e1bee2c-3f19-4afe-bda0-1be25c6a098a",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "cec351f0-160d-4b27-ab39-22259a459fa0",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "ffa90658-826d-4aae-862d-fbb16921964c",
            Text: null,
         },
      ],
   },
   WTC_H: {
      DtcList: [
         {
            ExpandName: "",
            SHORTNAME: "DTCU200216",
            TROUBLECODE: 14680598,
            TROUBLECODEHEX: "e00216",
            DISPLAYTROUBLECODE: "U200216",
            TEXT: {
               TI: "TI_919617792",
               Text: "Battery Voltage Failure  -  voltage is below threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1683188623",
                        Text: "1 sec",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1705595945",
                        Text: "Battery Voltage \u003C 8.5 V and last for 10 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_1805089476",
                        Text: "Battery Voltage \u003E = 8.5 V for 10 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1644099997",
                        Text: "- Voltage is too low, which is lower than 8.5 V for 10 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200216",
            OID: "8c0ad761-f082-4ebf-b8cc-663899403dd5",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200317",
            TROUBLECODE: 14680855,
            TROUBLECODEHEX: "e00317",
            DISPLAYTROUBLECODE: "U200317",
            TEXT: {
               TI: "TI_1282619341",
               Text: "Battery Voltage Failure  -  voltage is above threshold",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_2107290460",
                        Text: "- Ensure stable power supply to ADAS DC module. \n- Voltage returns to 8.5 -16.5 V. (Considering \u002B/- 0.5V tolerance from the normal voltage range 9-16 V) \n-  Reconnect the battery/power supply",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_795136704",
                        Text: "1. Ignition Status : BCM_PwrMod == IGN ON(0x2)||RUN(0x4)\n2. De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_70323502",
                        Text: "100 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_792177735",
                        Text: "Battery Voltage \u003E 16.5 V and last for 1 sec",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_2026443988",
                        Text: "Battery Voltage \u003C = 8.5 V for 1 sec",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_71101182",
                        Text: "- No output video/signal from SVS/DMS\n- ADAS feature that use FCM/MRR/USS  will not be available",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_1723709527",
                        Text: "- Voltage is too high, which is more than 16.5 V for 1 sec \n- Failure in the power supply chain/connection error",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200317",
            OID: "0aea2719-a177-4713-ba85-3f812a037ef2",
            Text: null,
         },
         {
            ExpandName: "",
            SHORTNAME: "DTCU200588",
            TROUBLECODE: 14681480,
            TROUBLECODEHEX: "e00588",
            DISPLAYTROUBLECODE: "U200588",
            TEXT: {
               TI: "TI_138987913",
               Text: "Vehicle CAN Bus OFF",
            },
            SDGS: {
               SDG: {
                  SD: [
                     {
                        SI: "Service_Relevant",
                        TI: "TI_1606685099",
                        Text: "Check at next stop",
                     },
                     {
                        SI: "Repair_Action",
                        TI: "TI_969945453",
                        Text: "(1) Check whether the battery voltage is 9 V~16 V\n(2) Reconnect the battery/power supply\n(3) Check whether the CAN bus connection is normal\n(4) Check the connector or transceiver\n(5) Check the network state\n(6) Check whether there is an open circuit and a short circuit in the wire harness\n(7) Replace module and wire harness",
                     },
                     {
                        SI: "Monitor_Enable_Conditions",
                        TI: "TI_1906381006",
                        Text: "1. Local voltage is within normal range (9-16V)\n2.  De-bounce timer = 5 sec",
                     },
                     {
                        SI: "Monitor_Type",
                        TI: "TI_179750464",
                        Text: "Continuous",
                     },
                     {
                        SI: "Monitor_Rate",
                        TI: "TI_1933864577",
                        Text: "10 ms",
                     },
                     {
                        SI: "Failure_Criteria_Test_Result_NOK",
                        TI: "TI_1286367852",
                        Text: "Bus off for more than or equal to 30 ms",
                     },
                     {
                        SI: "Pass_Criteria_Test_Result_OK",
                        TI: "TI_488883662",
                        Text: "The communication bus off returns to normal and valid for 10 ms",
                     },
                     {
                        SI: "Limp_home_Action",
                        TI: "TI_1154418640",
                        Text: "- Record DTC; Function degradation\n- Rear View Only\n- No Dynamic Overlays\n- FCM, Radar and USS dependent ADAS feature will not run",
                     },
                     {
                        SI: "DTC_Aged_Crieria",
                        TI: "TI_1411399392",
                        Text: "40 dec",
                     },
                     {
                        SI: "Cause_of_Failure",
                        TI: "TI_648719412",
                        Text: "- Signal incompatibility caused by transmission or harness problems\n-  Short circuit between CAN_H/CAN_L\n-  CAN_H low, CAN_H high, CAN_L low, CAN_L high, open circuit CAN_H and/or CAN_L",
                     },
                     {
                        SI: "Possible_Impact",
                        TI: "TI_1719632450",
                        Text: "ADAS Feature will not be available",
                     },
                  ],
                  SI: "EXTRAINFO",
                  Text: null,
               },
            },
            ID: "DTCU200588",
            OID: "07ababf4-1bf5-4816-a9e4-7df1b3bf9396",
            Text: null,
         },
      ],
   },
};
