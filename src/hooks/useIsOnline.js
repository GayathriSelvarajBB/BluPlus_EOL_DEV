import { useEffect, useState } from "react";

const useIsOnline = () => {
   const [isOnline, setIsOnline] = useState(navigator.onLine);

   useEffect(() => {
      window.addEventListener("online", handleOnlineChange);
      window.addEventListener("offline", handleOnlineChange);
      return () => {
         window.removeEventListener("online", handleOnlineChange);
         window.removeEventListener("offline", handleOnlineChange);
      };
   }, []);

   const handleOnlineChange = () => {
      setIsOnline(navigator.onLine);
   };
   return isOnline;
};

export default useIsOnline;
