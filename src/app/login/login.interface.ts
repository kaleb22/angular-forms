export interface dataWrapper {
  data: {
    message: string;
    userName: string;
  } | null;
  error?: {
    code: number;
    message: string;
  };
}

export interface loginData {
  email: string;
  password: string;
}
