import { Breadcrumb, Button, Input, Table } from "antd";
import Sidebar from "../components/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import {useNavigate} from "react-router-dom"
import { fetchProducts, updateProduct,deleteProduct,searchProduct } from '../redux/productsSlice';

function Products() {
    const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const tableData = products.map((product) => ({
    key: product.id,

    name: (
      <div className="flex items-center gap-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-12 h-12 object-contain"
        />

        <span
          onClick={() => navigate(`/products/${product.id}`)}
          className="cursor-pointer"
        >
          {product.title}
        </span>
      </div>
    ),

    sku: product.id,
    price: `$${product.price}`,
    stock: product.stock,
    categories: product.category,
    action: (
      <div className="flex gap-2">
        <Button
          onClick={() =>
            dispatch(
              updateProduct({
                id: product.id,
                price: product.price + 10,
              }),
            )
          }
        >
          Edit
        </Button>
        <Button
        danger
          onClick={() =>
            dispatch(deleteProduct(product.id))
          }
        >
        Delete
        </Button>
      </div>
    ),
  }));

 const columns = [
   {
     title: 'Name',
     dataIndex: 'name',
     key: 'name',
   },
   {
     title: 'SKU',
     dataIndex: 'sku',
     key: 'sku',
   },
   {
     title: 'Price',
     dataIndex: 'price',
     key: 'price',
   },
   {
     title: 'Stock',
     dataIndex: 'stock',
     key: 'stock',
   },
   {
     title: 'Categories',
     dataIndex: 'categories',
     key: 'categories',
   },
   {
     title: 'Action',
     dataIndex: 'action',
     key: 'action',
   },
 ];

  return (
    <div className="flex min-h-screen bg-[#f6f6f6]">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="mb-8">
          <Breadcrumb
            items={[
              {
                title: 'Admin',
              },
              {
                title: 'Products',
              },
            ]}
          />
        </div>

        <div className="bg-white overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-xl font-bold">Products</h1>

            <div className="flex gap-3">
              <Button
                type="primary"
                className="!bg-[#111827]"
                onClick={() => navigate('/products/add')}
              >
                Add product
              </Button>

              <Input
                prefix={<SearchOutlined />}
                placeholder="Search products"
                className="w-52"
                onChange={(e) => {
                  const value = e.target.value;

                  if (value.trim()) {
                    dispatch(searchProduct(value));
                  } else {
                    dispatch(fetchProducts());
                  }
                }}
              />
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={tableData}
            pagination={{
              pageSize: 8,
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default Products;