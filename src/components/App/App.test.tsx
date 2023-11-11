import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given the App component", () => {
  describe("When it renders a header", () => {
    test("Then it should show a Monster Squad logo", () => {
      const expectedAltText = "Monster Squad logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Monsters friends and enemies'", () => {
      const expectedHeadingText = "Monsters friends and enemies";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const homePageElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(homePageElement).toBeInTheDocument();
    });
  });
});
