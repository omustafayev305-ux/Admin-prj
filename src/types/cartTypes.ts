export type CartProduct ={
  id:number;
  title:string;
  quantity:number;
  total:number;
};
export type Cart ={
  id:number;
  products:CartProduct[];
  total:number;
  discountedTotal:number;
  userId:number;
  totalProducts:number;
  totalquantity:number;
};
export type CartsResponse = {
  carts:Cart[];
  total:number;
  skip:number;
  limit:number;
};
export type CartState ={
  carts:Cart[];
  loading:boolean;
  error:string|null
};