export interface MonsterStructure {
  id: number;
  name: string;
  age: number;
  isFriend: boolean;
  monsterType: string;
  picture: string;
}

export interface MonstersStateStructure {
  monsters: MonsterStructure[];
}
