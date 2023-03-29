export interface ILevel {
  easy: ILevelMode[];
  medium: ILevelMode[];
  hard: ILevelMode[];
  inferno: ILevelMode[];
}

export interface ILevelMode {
  difficulty: string;
  amount: number;
}
