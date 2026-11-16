export type Post = {
  id:number;
  title:string;
  body:string;
  userId:number;
};
export type PostsResponse ={
  posts:Post[];
  total:number;
  skip:number;
  limit:number;
};

export type PostsState ={
  posts: Post[];
  loading:boolean;
  error:string|null
}