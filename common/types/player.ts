export type PlayerArgs = {
  sessionId: string;
  playerName: string;
  portalId?: string;
};

export type PlayerBasicResult = {
  activePlayerId: string;
  avatarUrl: string;
  minutesPlayed: string;
  mergedPlayers: string;
  name: string;
  personalStatusMessage: string;
  platform: string;
  region: string;
  wins: string;
  level: string;
  losses: string;
  lastLoginDatetime: string;
};
