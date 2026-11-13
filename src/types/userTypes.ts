export type User={
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  image:string,
};
export type UsersResponse={
 users:User[]
 total:number,
 skip:number,
 limit:number,

};
export type UsersState = {
  users:User[],
  loading:boolean,
  error:string|null ;
  
}