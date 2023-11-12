import { renderHook } from "@testing-library/react";
import useMonstersApi from "./useMonstersApi/useMonstersApi";
import monstersApiMock from "../mocks/monstersApiMock";

describe("Given a useActorsApi hook", () => {
  describe("When it gets the information of twelve monsters", () => {
    test("Then it should show the information of twelve monsters", async () => {
      const expectedMonsters = monstersApiMock;

      const {
        result: {
          current: { getMonstersApi },
        },
      } = renderHook(() => useMonstersApi());

      const currentMonsters = await getMonstersApi();

      expect(currentMonsters).toStrictEqual(expectedMonsters);
    });
  });
});
