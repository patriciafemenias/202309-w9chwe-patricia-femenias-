import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import MonstersPage from "./MonstersPage/MonstersPage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

describe("Given a 'Monsters' page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Monsters friends and enemies'", () => {
      const headingText = "Monsters friends and enemies";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <MonstersPage />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
