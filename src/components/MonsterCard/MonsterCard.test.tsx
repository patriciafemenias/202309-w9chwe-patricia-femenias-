import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import MonsterCard from "./MonsterCard";
import mainTheme from "../../styles/mainTheme";
import monsterMock from "../../mocks/monsterMock";

describe("Given a MonsterCard component", () => {
  describe("When it receives a Draculaura Monster High", () => {
    test("Then it should a Draculaura picture", () => {
      const expectedAltText = monsterMock.name;

      render(
        <ThemeProvider theme={mainTheme}>
          <MonsterCard monster={monsterMock} />
        </ThemeProvider>,
      );
      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });

  describe("When it receives Draculaura's data", () => {
    test("Then it should show Draculaura into a heading", () => {
      const draculaura = monsterMock;

      render(
        <ThemeProvider theme={mainTheme}>
          <MonsterCard monster={draculaura} />
        </ThemeProvider>,
      );
      const characterName = screen.getByRole("heading", {
        name: draculaura.name,
      });

      expect(characterName).toBeInTheDocument();
    });
  });
});
