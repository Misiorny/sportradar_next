export type Game = {
  id: string;
  day: string;
  stadium: string;
  status: GameStatus;
  winner: Winner;
  team: {
    home: Team;
    away: Team;
  };
};
export type GameStatus = "closed" | "postponed";
export type Winner = null | { id: string; name: string };
export interface Team {
  id: string;
  name: string;
  score: Score;
}
export interface Score {
  half: number;
  full: number;
}
