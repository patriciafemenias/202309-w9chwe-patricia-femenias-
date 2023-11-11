import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import mainTheme from "../../styles/mainTheme";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'monsters'", () => {
      const expectedMonstersLink = "monsters";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const monsterLink = screen.getByRole("link", {
        name: expectedMonstersLink,
      });

      expect(monsterLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'create'", () => {
      const expectedCreateLink = "create";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const createLink = screen.getByRole("link", {
        name: expectedCreateLink,
      });

      expect(createLink).toBeInTheDocument();
    });
  });
});
