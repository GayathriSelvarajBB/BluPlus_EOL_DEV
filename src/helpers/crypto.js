import CryptoJS from "crypto-js";
import { ENCRYPTION_SECRET } from "envConfig";

export const encryptData = (data) => {
   // It uses AES-256 algorithm for encryption when we pass "ENCRYPTION_SECRET"
   // pls refer https://cryptojs.gitbook.io/docs/#the-cipher-algorithms
   return CryptoJS.AES.encrypt(String(data), ENCRYPTION_SECRET).toString();
};

export const decryptData = (text) => {
   return CryptoJS.AES.decrypt(text, ENCRYPTION_SECRET).toString(
      CryptoJS.enc.Utf8
   );
};

export const encryptJson = (json) => {
   return encryptData(JSON.stringify(json));
};

export const decryptJson = (text) => {
   let finalData = decryptData(text || "");
   try {
      finalData = JSON.parse(finalData);
   } catch (err) {
      console.log("Error occurred while parsing json", err);
   }
   return finalData;
};
