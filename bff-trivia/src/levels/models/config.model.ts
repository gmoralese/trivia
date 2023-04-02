export interface IConfiguration {
  _id: {
    $oid: string;
  };
  config: IConfig;
}

export interface IConfig {
  config: {
    easy: {
      difficulty: string;
      amount: number;
    }[];
    medium: {
      difficulty: string;
      amount: number;
    }[];
    hard: {
      difficulty: string;
      amount: number;
    }[];
    inferno: {
      difficulty: string;
      amount: number;
    }[];
  };
}
