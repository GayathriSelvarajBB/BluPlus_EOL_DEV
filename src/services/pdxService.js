import apiEndpoints from "./apiEndpoints";

export const downloadPDX = (vinNumber) => {
   return window.electronAPI.downloadPDXFile(
      vinNumber,
      apiEndpoints.downloadPDX
   );
};
