import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import AppRoutes from "routes";
import { triggerOfflineSyncData } from "helpers/offlineDataSync";
import { updateExpiredServiceSessions } from "helpers";
export default function App() {
   useEffect(() => {
      const themeChangeValue = localStorage.getItem("theme-mode");
      if (themeChangeValue === "dark-theme") {
         document.getElementsByTagName("body")[0].classList.add("dark-theme");
         document
            .getElementsByTagName("body")[0]
            .classList.remove("light-theme");
      } else {
         document
            .getElementsByTagName("body")[0]
            .classList.remove("dark-theme");
         document.getElementsByTagName("body")[0].classList.add("light-theme");
      }
      window.addEventListener("online", triggerOfflineSyncData);
      // Checking and updating the expired service sessions and setting timeout for incomplete service sessions
      updateExpiredServiceSessions();
      // cleanup the event listeners
      return () => {
         window.removeEventListener("online", triggerOfflineSyncData);
      };
   }, []);
   useEffect(()=>{
      const handleKeyDown = (event) => {
         // Check if the event key is "r" and Ctrl key is pressed (event.ctrlKey)
         if ((event.key === "r" && event.ctrlKey)) {
            // Prevent the default behavior of Ctrl+R (refresh)
            event.preventDefault();
            const result=window.confirm("Are you sure you want to leave this page? Your data will be lost")
            if(result){
               window.location.reload()
            }
            // window.location.reload()
            // Display the custom alert
           
         }
      };

      // Add the event listener when the component mounts
      document.addEventListener("keydown", handleKeyDown);

      // Remove the event listener when the component unmounts
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   })

   return (
      <Provider store={store}>
         <AppRoutes />
      </Provider>
   );
}
