import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Create";
  const actionOnClick = vi.fn();

  describe("When it receives the text 'Create'", () => {
    test("Then it should show a 'Create' text", () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button actionOnClick={actionOnClick} text={text} />
        </ThemeProvider>,
      );
      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      render(
        <ThemeProvider theme={mainTheme}>
          <Button actionOnClick={actionOnClick} text={text} />
        </ThemeProvider>,
      );

      const button = screen.getByRole("button", { name: text });

      await userEvent.click(button);
      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
