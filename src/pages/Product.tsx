import { Breadcrumb,Button,Input,Table} from "antd"
import Sidebar from "../components/Sidebar";
import { SearchOutlined } from "@ant-design/icons";


function Products () {
  const columns = [
    {
      title:"Name",
      dataIndex:"name",
      key:"name"
    },
    {
      title:"SKU",
      dataIndex:"sku",
      key:"sku",
    },
    {
      title:"Price",
      dataIndex:"price",
      key:"price",
    },
    {
     title:"Stock",
     dataIndex:"stock",
     key:"stock"
    },
    {
      title:"Categories",
      dataIndex:"categories",
      key:"categories",
    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action"
    },
  ];
  const data = [
    {
      key:"1",
      name:"Raw Black T-Shirt Lineup",
      sku:"47514501",
      price:"$75.00",
      stock:"In Stock",
      categories:"T-shirt,Men",
      action:"..."
    },
    {
      key:"2",
      name:"Classic Monochrome Tees",
      sku:"47514501",
      price:"$35.00",
      stock:"In Stock",
      categories:"T-shirt,Men",
      action:"..."
    },
    {
      key:"3",
      name:"Monochromatic Wardrobe",
      sku:"47514501",
      price:"$27.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"..."
    },
       {
      key:"4",
      name:"Essential Naturals",
      sku:"47514501",
      price:"$22.00",
      stock:"In Stock",
      categories:"T-shirt,Raw",
      action:"..."
    },
  
     {
      key:"4",
      name:"UTRANEET Black",
      sku:"47514501",
      price:"$43.00",
      stock:"In Stock",
      categories:"T-shirt,Trend",
      action:"..."
    },
     {
      key:"4",
      name:"Elegant Ebony sweetshirts",
      sku:"47514501",
      price:"$35.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"..."
    },
     {
      key:"4",
      name:"Sweet and Cozy Black",
      sku:"47514501",
      price:"$57.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"..."
    },
     {
      key:"4",
      name:"MOCKUP Black",
      sku:"47514501",
      price:"$30.00",
      stock:"In Stock",
      categories:"T-shirt,Raw",
      action:"..."
    },
  ]
  return(
     <div className="flex min-h-screen bg-[#f6f6f6]">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="mb-8">
          <Breadcrumb
            items={[
              {
                title: "Admin",
              },
              {
                title: "Products",
              },
            ]}
          />
        </div>

        <div className="bg-white  overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-xl font-bold">
              Products
            </h1>

            <div className="flex gap-3">
              <Button
                type="primary"
                className="!bg-[#111827]"
              >
                Add product
              </Button>

              <Input
                prefix={<SearchOutlined/>}
                placeholder="Search products"
                className="w-52"
              />
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 8,
            }}
          />
        </div>
      </main>
    </div>
  )
} 
export default Products