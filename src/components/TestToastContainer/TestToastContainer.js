import { ToastContainer } from "react-toastify";

const TestToastContainer = () => (
   <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      theme="colored"
   />
);

export default TestToastContainer;
