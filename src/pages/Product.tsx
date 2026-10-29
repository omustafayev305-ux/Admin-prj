import { Breadcrumb,Button,Input,Table} from "antd"
import Sidebar from "../components/Sidebar";
import { SearchOutlined } from "@ant-design/icons";
import Product1 from "../assets/Product1.png"
import Product2 from "../assets/Product2.png"
import Product3 from "../assets/Product3.png"
import Product4 from "../assets/Product4.png"
import Product5 from "../assets/Product5.png"
import Product6 from "../assets/Product6.png"
import Product7 from "../assets/Product7.png"
import Product8 from "../assets/Product8.png"

function Products () {
  const columns = [
    {
      title:"Name",
      dataIndex:"name",
      key:"name",
      
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
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product1}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$75.00",
      stock:"In Stock",
      categories:"T-shirt,Men",
      action:"..."
    },
    {
      key:"2",
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product2}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$35.00",
      stock:"In Stock",
      categories:"T-shirt,Men",
      action:"..."
    },
    {
      key:"3",
       name: (
    <div className="flex items-center gap-3">
      <img
        src={Product3}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$27.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"..."
    },
       {
      key:"4",
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product4}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$22.00",
      stock:"In Stock",
      categories:"T-shirt,Raw",
      action:"..."
    },
  
     {
      key:"4",
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product5}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$43.00",
      stock:"In Stock",
      categories:"T-shirt,Trend",
      action:"..."
    },
     {
      key:"4",
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product6}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$35.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"..."
    },
     {
      key:"4",
        name: (
    <div className="flex items-center gap-3">
      <img
        src={Product7}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
      sku:"47514501",
      price:"$57.00",
      stock:"In Stock",
      categories:"T-shirt",
      action:"...",
      
    },
     {
       name: (
    <div className="flex items-center gap-3">
      <img
        src={Product1}
        alt="Raw Black T-Shirt Lineup"
        className="w-12 h-12 object-contain"
      />

      <span>
        Raw Black T-Shirt Lineup
      </span>
      </div>
      ),
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