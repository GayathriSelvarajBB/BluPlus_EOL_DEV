import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import LoginHeader from "pages/Login/LoginHeader";
describe("Login Header File test", () => {
   it("should render the Component-click button", async () => {
      render(
         <Router>
            <LoginHeader />
         </Router>
      );

      //Function need be call when click on toggle theme button
      const ToggleBtn = screen.getByTestId("toggle-theme");
      expect(ToggleBtn).toBeInTheDocument();
      expect(ToggleBtn).toBeEnabled();
      await fireEvent.click(ToggleBtn);

      await fireEvent.click(ToggleBtn);
   });
});