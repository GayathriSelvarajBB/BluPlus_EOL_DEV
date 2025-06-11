import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import Homepage from "components/Homepage/Homepage";
// import { Router } from "react-router-dom";
describe("Home page File test", () => {
   it("should redirect to login after click on Aftersale Network", async () => {
      render(
         <Router>
            <Homepage />;
         </Router>
      );
      const LoginLink = screen.getByTestId("Network-Solution");
      fireEvent.click(LoginLink);
      expect(LoginLink).toBeInTheDocument();
   });
});
