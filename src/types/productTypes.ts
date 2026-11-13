
export type Product ={
  id:number,
  title:string,
  price: number,
  category:string,
  thumbnail:string
  stock:number
}
export type ProductsResponse = {
  products: Product[]
  total: number,
  skip: number,
  limit:Number,
};

export type ProductsState = {
  products: Product[];
  loading: boolean;
  selectedProduct: Product | null;
  error: string | null;
};
export type AddProductRequest ={
  title:string;
  price:number;
  category:string;
  stock:number;
  description:string;
};
export type UpdateProductRequest = {
  id: number;
  title?: string;
  price?: number;
  category?: string;
  stock?: number;
};
export type User = {
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  phone:string,
  imgae:string,
}
export type UserResponse ={
  users:User[],
  total:number,
  skip:number,
  limits:number
}
export type UsersState ={
 users:User[],
 loading:boolean,
 error:string|null
}