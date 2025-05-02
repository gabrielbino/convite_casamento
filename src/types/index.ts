export interface Guest {
  name: string;
  confirmed: boolean;
  children?: number;
}

export interface Gift {
  id: number;
  name: string;
  taken: boolean;
  chosenBy?: string;
  allowMultiple?: boolean;
}
