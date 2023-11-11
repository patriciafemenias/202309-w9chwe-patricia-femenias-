import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MonstersList from "./MonstersList";
import monstersMock from "../../data/monstersMock";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a MonstersList component", () => {
  describe("When it is called with a list of monsters", () => {
    test("Then it should show a monsters list, and the first monster should show her name 'Draculaura' into a heading", () => {
      const expectedName = "Draculaura";

      render(
        <ThemeProvider theme={mainTheme}>
          <MonstersList monsters={monstersMock} />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: expectedName });

      expect(title).toBeInTheDocument();
    });
  });
  test("Then it should show a monsters list, and the second monster, Cupid,  should show her picture", () => {
    const expectedAltText = monstersMock[1].name;

    render(
      <ThemeProvider theme={mainTheme}>
        <MonstersList monsters={monstersMock} />
      </ThemeProvider>,
    );
    const pictureImage = screen.getByAltText(expectedAltText);

    expect(pictureImage).toBeInTheDocument();
  });
});
