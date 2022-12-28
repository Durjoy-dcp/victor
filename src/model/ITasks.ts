export interface ITasks {
  _id: Id;
  title: string;
  details: string;
  date: string;
  isComplete: boolean;
  user: string;
}
export interface Id {
  $oid: string;
}
