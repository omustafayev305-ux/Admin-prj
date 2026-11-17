export type Quote = {
  id:number;
  quote:string;
  author:string;
};
export type QuotesResponse = {
quotes:Quote[];
total:number;
skip:number;
limit:number;
};
export  type QuotesState = {
 quotes: Quote[];
 loading:boolean;
 error:string|null
};