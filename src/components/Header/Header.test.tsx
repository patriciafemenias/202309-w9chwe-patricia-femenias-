import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import mainTheme from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Monster Squad logo", () => {
      const expectedAltText = "Monster Squad logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />;
          </ThemeProvider>
        </BrowserRouter>,
      );
      const headerImage = screen.getByAltText(expectedAltText);

      expect(headerImage).toBeInTheDocument();
    });
  });
});
