import { useEffect, useRef } from "react";

const usePreviousState = (value) => {
   const previousValueRef = useRef(null);

   useEffect(() => {
      previousValueRef.current = value;
   }, [value]);

   return previousValueRef.current;
};

export default usePreviousState;
