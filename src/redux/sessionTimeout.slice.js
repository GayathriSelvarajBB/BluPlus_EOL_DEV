import { createSlice } from "@reduxjs/toolkit";
import {
   serviceSessionExtendingMilliSeconds,
   serviceSessionHours,
   userLoginSessionExtendingMilliseconds,
   userLoginSessionHours,
} from "appConfig";
import { addHours } from "date-fns";

export const LOGOUT_SESSION_TIMEOUT = "LOGOUT_SESSION_TIMEOUT";

const sessionTimeout = createSlice({
   name: "sessionTimeout",
   initialState: {},
   reducers: {
      addSessionTimeout(state, { payload }) {
         const { sessionId, startTime, callback } = payload;
         // calculating timeout milli seconds
         const estimatedExpiryTime = addHours(
            new Date(startTime),
            serviceSessionHours
         );
         const now = Date.now();
         if (estimatedExpiryTime > now) {
            const timeoutMS = estimatedExpiryTime - now; // EX: 5654217
            state[sessionId] = setTimeout(callback, timeoutMS);
         }
         return state;
      },
      deleteSessionTimeout(state, { payload }) {
         const { sessionId } = payload;
         if (state[sessionId]) {
            clearTimeout(state[sessionId]);
            delete state[sessionId];
         }
         return state;
      },
      extendSessionTimeout(state, { payload }) {
         const { sessionId, callback } = payload;
         if (state[sessionId]) {
            clearTimeout(state[sessionId]);
         }
         state[sessionId] = setTimeout(
            callback,
            serviceSessionExtendingMilliSeconds
         );
         return state;
      },
      setLogoutTimeout(state, { payload }) {
         const { loggedinTime, callback } = payload;
         if (loggedinTime) {
            const now = new Date();
            const estimatedExpiryTime = addHours(
               new Date(loggedinTime),
               userLoginSessionHours
            );
            const remainingMs = estimatedExpiryTime - now;
            if (remainingMs > 0) {
               state[LOGOUT_SESSION_TIMEOUT] = setTimeout(
                  callback,
                  remainingMs
               );
            }
         }
         return state;
      },
      extendLogoutTimeout(state, { payload }) {
         const { callback } = payload;
         if (state[LOGOUT_SESSION_TIMEOUT]) {
            clearTimeout(state[LOGOUT_SESSION_TIMEOUT]);
         }
         state[LOGOUT_SESSION_TIMEOUT] = setTimeout(
            callback,
            userLoginSessionExtendingMilliseconds
         );
         return state;
      },
      clearLogoutTimeout(state) {
         if (state[LOGOUT_SESSION_TIMEOUT]) {
            clearTimeout(state[LOGOUT_SESSION_TIMEOUT]);
            delete state[LOGOUT_SESSION_TIMEOUT];
         }
         return state;
      },
   },
});

export const {
   addSessionTimeout,
   deleteSessionTimeout,
   extendSessionTimeout,
   setLogoutTimeout,
   extendLogoutTimeout,
   clearLogoutTimeout,
} = sessionTimeout.actions;

export default sessionTimeout;
