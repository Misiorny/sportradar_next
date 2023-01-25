export type Game = {
  date: string;
  stadium: string;
  homeTeam: string;
  awayTeam: string;
  halfScore: string;
  fullScore: string;
  status: 'closed' | 'postponed'
  winner: { id: string, name: string | null }
};
