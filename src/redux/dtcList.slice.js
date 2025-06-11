import { createSlice } from "@reduxjs/toolkit";
const dtcListSlice = createSlice({
   name: "dtcList",
   initialState: [],
   reducers: {
      // removeMemorizedDTC: (state) => {
      //    return state.filter((data) => {
      //       return data["dtcState"] !== "Inactive fault";
      //    });
      // },
      removeMemorizedDTC: (state, { payload }) => {
         state = state.map((item) => {
            return item.filter((elm) => elm.dtcState !== "Inactive fault");
         });
         return state;
      },
      addDTCRedux: (state, { payload }) => {
         //Ascending order data
         // payload = payload.sort((a, b) => {
         //    let fa = a.dtcState.toLowerCase(),
         //       fb = b.dtcState.toLowerCase();

         //    if (fa < fb) {
         //       return 1;
         //    }
         //    if (fa > fb) {
         //       return -1;
         //    }
         //    return 0;
         // });

         // return payload;

         return [...state, payload];
      },
      addALLDTCRedux: (state, { payload }) => {
         return (state = payload);

         // return state;
      },
      addDTCReduxfrmVsummry: (state, { payload }) => {
         let ecuIndex = state.findIndex((item) =>
            item?.find((elem) => elem.expandName === payload[0].expandName)
         );
         if (ecuIndex >= 0) {
            state.splice(ecuIndex, 1);
         } else {
            state = [payload];
         }

         return state;
      },
      removeDTCRedux: (state, { payload }) => {
         // console.log("payload",payload)
         let indexx = state.findIndex((item) =>
            // (item) => item.filter((elem) => elem.length === payload)
            item?.find((elem) => elem.expandName === payload.ecuName)
         );
         if (indexx >= 0) {
            state.splice(indexx, 1);
         }

         return state;
      },
      reScanecus: (state, { payload }) => {
         state = payload;

         return state;
      },
      removeAllDTCRedux: (state, { payload }) => {
         // return payload;
         return state = [];
      },
      // removeDTCRedux: (state, { payload }) => {
      //    let remainParams = state.filter((item) =>
      //       item.filter((elem) => elem.expandName !== payload.ecuName)
      //    );
      //    // return payload;
      //    return [...state, remainParams];
      // },
   },
});

export const {
   removeMemorizedDTC,
   addDTCRedux,
   removeDTCRedux,
   addDTCReduxfrmVsummry,
   reScanecus,
   addALLDTCRedux,
   removeAllDTCRedux,
} = dtcListSlice.actions;

export default dtcListSlice;
