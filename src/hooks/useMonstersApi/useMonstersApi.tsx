import axios from "axios";
import { MonsterStructure } from "../../store/features/monsters/types";
import { useCallback } from "react";

const useMonstersApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getMonstersApi = useCallback(async () => {
    const { data: monsters } = await axios.get<MonsterStructure[]>(
      "/monsterHighCharacters?",
    );
    return monsters;
  }, []);

  return { getMonstersApi };
};

export default useMonstersApi;
