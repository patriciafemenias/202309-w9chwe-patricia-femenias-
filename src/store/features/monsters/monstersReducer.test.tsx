import monstersApiMock from "../../../mocks/monstersApiMock";
import { loadMonstersActionCreator, monstersReducer } from "./monstersSlice";
import { MonstersStateStructure } from "./types";

describe("Given a monstersReducer", () => {
  describe("When it receives an empty list", () => {
    test("Then it should return a list with ten monsters", () => {
      const monstersList = monstersApiMock;
      const currentListState: MonstersStateStructure = {
        monsters: [],
      };

      const newListState = monstersReducer(
        currentListState,
        loadMonstersActionCreator(monstersList),
      );

      expect(newListState.monsters).toStrictEqual(monstersList);
    });
  });
});
