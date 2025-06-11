import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const serviceSessionSlice = createSlice({
   name: "serviceSessionSlice",
   initialState: [
      {
         id: "1",
         sessionId: "BB-16758907",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "In-Progress",
         vinNumber: "7862736",
         startTime: "12:05:00",
         pendingHours: "15:00:00",
         year: "2021",
      },
      {
         id: "2",
         sessionId: "BB-17561234",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "In-Progress",
         vinNumber: "1528393",
         startTime: "17:00:00",
         pendingHours: "05:00:00",
         year: "2021",
      },
      {
         id: "3",
         sessionId: "BB-17564232",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "Completed",
         vinNumber: "7643122",
         startTime: "12:05:00",
         pendingHours: "19:00:00",
         year: "2021",
      },
      {
         id: "4",
         sessionId: "BB-17564222",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "Completed",
         vinNumber: "7152934",
         startTime: "12:05:00",
         pendingHours: "14:00:00",
         year: "2021",
      },
      {
         id: "5",
         sessionId: "BB-17565454",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "In-Progress",
         vinNumber: "9081435",
         startTime: "12:05:00",
         pendingHours: "18:00:00",
         year: "2021",
      },
      {
         id: "6",
         sessionId: "BB-18273821",
         carModel: "Tata Nano",
         arrivedDate: format(new Date(), "MMMM dd, yyyy"),
         serviceStatus: "Completed",
         vinNumber: "6751725",
         startTime: "12:05:00",
         pendingHours: "09:00:00",
         year: "2021",
      },
   ],
   reducers: {
      setServiceSession(state, { payload }) {
         state = [...state, payload];
         return state.sort(function (a, b) {
            return (
               new Date(b?.arrivedDate + " " + b?.pendingHours) -
               new Date(a?.arrivedDate + " " + a?.pendingHours)
            );
         });
      },
      updateServiceSeesion1(state, { payload }) {
         const { session, index } = payload;
         let localSate = [];
         let localSession = {
            id: session,
            sessionId: session.sessionId,
            carModel: session.carModel,
            arrivedDate: format(new Date(), "MMMM dd, yyyy"),
            serviceStatus: "Completed",
            vinNumber: session.vinNumber,
            startTime: session.startTime,
            pendingHours: format(new Date(), "HH:mm:ss"),
            year: session.year,
         };
         for (let i = 0; i < state.length; i++) {
            if (i === index) {
               localSate = [...localSate, localSession];
            } else {
               localSate = [...localSate, state[i]];
            }
         }

         localSate.sort(function (a, b) {
            return (
               new Date(b?.arrivedDate + " " + b?.pendingHours) -
               new Date(a?.arrivedDate + " " + a?.pendingHours)
            );
         });
         console.log("employees2", localSate);
         return (state = localSate);
      },
   },
});

export const { setServiceSession, updateServiceSeesion1 } =
   serviceSessionSlice.actions;

export default serviceSessionSlice;
