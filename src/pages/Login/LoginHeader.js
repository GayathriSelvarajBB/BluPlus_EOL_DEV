/* eslint-disable indent */
import { useState } from "react";
import bblogo from "assets/images/bblogo.png";
import { ReactComponent as DarkThemeIcon } from "assets/images/dark-theme-icon.svg";
import { ReactComponent as LightThemeIcon } from "assets/images/light-theme-icon.svg";

const LoginHeader = () => {
   const [themeChange, setThemeChange] = useState(false);
   const toggleTheme = () => {
      const body = document.getElementsByTagName("body")[0];
      if (themeChange) {
         body.classList.remove("dark-theme");
         body.classList.add("light-theme");
         localStorage.setItem("theme-mode", "light-theme");
         setThemeChange(false);
      } else {
         body.classList.add("dark-theme");
         body.classList.remove("light-theme");
         localStorage.setItem("theme-mode", "dark-theme");
         setThemeChange(true);
      }
   };
   return (
      <div className="header">
         <div className="logo-sec">
            <img src={bblogo} alt="Bluebinaries" title="Bluebinaries" />
         </div>

         <div className="connectivity">
            <div
               className="toggle-theme"
               id="toggle-theme"
               data-testid="toggle-theme"
               onClick={toggleTheme}
               title={
                  themeChange ? "Switch to light theme" : "Switch to dark theme"
               }
            >
               <div className="toggle-icon-sec">
                  <div className="moon-icon">
                     <DarkThemeIcon />
                  </div>
                  <div className="sun-icon">
                     <LightThemeIcon />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginHeader;
