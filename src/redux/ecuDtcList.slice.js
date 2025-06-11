import { createSlice } from "@reduxjs/toolkit";

const ecuDtcListSlice = createSlice({
   name: "ecuDtcList",
   initialState: [],
   reducers: {
      // this is for socket
      addEcuDtcListRedux: (state, { payload }) => {
         if (payload.status === 200) {
            state = [
               ...state,
               {
                  dllCallMethod: payload?.data?.dllCallMethod,
                  ecuName: payload?.data?.ecuName,
                  isDtcFound: payload?.data?.ecuDtcMapList[0]?.isDtcFound,
                  ecuDtcMapList: payload?.data?.ecuDtcMapList,
                  totalDtcs:
                     payload?.data?.ecuDtcMapList[0]?.isDtcFound === "found"
                        ? payload?.data?.ecuDtcMapList?.length
                        : 0,
               },
            ];
            return state;
         }
      },
      clearDTCListRedux: (state, { payload }) => {
         let updateData;
         payload.map((itemm) => {
            updateData = state.map((item) => {
               console.log("dd payload", item);
               if (item.ecuName === itemm) {
                  return {
                     ...item,
                     ecuDtcMapList: item.ecuDtcMapList.filter((ele) => {
                        if (ele.readDtc.dtcState !== "Memorised") {
                           return {
                              ele,
                              // readDtc: { ...ele.readDtc, dtcState: "Pending" },
                           };
                        }
                     }),
                  };
               } else {
                  return {
                     ...item,
                  };
               }
            });
            state = updateData;
         });
         return state;
      },
      scanDTCListRedux: (state, { payload }) => {
         let updateData;
         payload?.map((itemm) => {
            updateData = state.map((item) => {
               if (item.ecuName === itemm) {
                  return {
                     ...item,
                     ecuDtcMapList: item.ecuDtcMapList.map((ele) => {
                        if (ele.readDtc.dtcState === "Active") {
                           // ele.readDtc.dtcState = "Memorised"
                           return {
                              ...ele,
                              readDtc: {
                                 ...ele.readDtc,
                                 dtcState: "Memorised",
                              },
                           };
                        } else {
                           return {
                              ...ele,
                           };
                        }
                     }),
                  };
               } else {
                  return {
                     ...item,
                  };
               }
            });
            console.log("dd updateData", updateData);
            state = updateData;
         });
         return state;
      },

      //for vehicle summary page, when click on scan btn making empty and then storing data again
      removeAllDTCListRedux: (state, { payload }) => {
         state = [];
         return state;
      },
      clearAllDTCListRedux: (state, { payload }) => {
         let updateData
         payload.map((itemm) => {
            updateData = state.map((item) => {
               console.log("dd payload", item);
               if (item.ecuName === itemm) {
                  return {
                     ...item,
                     ecuDtcMapList: []
                  };
               } else {
                  return {
                     ...item,
                  };
               }
            });
            state = updateData;
         });
         return state;
       
      },
   },
});

export const {
   addEcuDtcListRedux,
   removeAllDTCListRedux,
   removeDTCListRedux,
   clearDTCListRedux,
   scanDTCListRedux,
   clearAllDTCListRedux
} = ecuDtcListSlice.actions;

export default ecuDtcListSlice;
