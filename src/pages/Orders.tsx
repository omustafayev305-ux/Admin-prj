import { Breadcrumb,Input,Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar";
import Product1 from "../assets/Product1.png"
import Product2 from "../assets/Product2.png"
import Product3 from "../assets/Product3.png"
import Product4 from "../assets/Product4.png"
import Product5 from "../assets/Product5.png"
import Product6 from "../assets/Product6.png"
import Product7 from "../assets/Product7.png"
import Product8 from "../assets/Product8.png"


function Orders () {
  const columns=[
    {
      title:"Order",
      dataIndex:"order",
      name:"order"
    },
    {
     title:"Date",
     dataIndex:"date",
     key:"date"
    },
    {
      title:"Total",
      dataIndex:"total",
      key:"total"
    },
    {
      title:"Status",
      dataIndex:"status",
      key:"status",
    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action"
    },
  ]
  const data = [
  {
    key: "1",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product1}
          alt="Raw Black T-Shirt Lineup"
          className="w-12 h-12 object-contain"
        />
        <span>Raw Black T-Shirt Lineup</span>
      </div>
    ),
    date: "20 Mar 2023",
    total: "$75.00",
    status: "Processing",
    action: "...",
  },

  {
    key: "2",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product2}
          alt="Classic Monochrome Tees"
          className="w-12 h-12 object-contain"
        />
        <span>Classic Monochrome Tees</span>
      </div>
    ),
    date: "19 Mar 2023",
    total: "$35.00",
    status: "Processing",
    action: "...",
  },

  {
    key: "3",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product3}
          alt="Monochromatic Wardrobe"
          className="w-12 h-12 object-contain"
        />
        <span>Monochromatic Wardrobe</span>
      </div>
    ),
    date: "7 Feb 2023",
    total: "$27.00",
    status: "Completed",
    action: "...",
  },

  {
    key: "4",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product4}
          alt="Essential Neutrals"
          className="w-12 h-12 object-contain"
        />
        <span>Essential Neutrals</span>
      </div>
    ),
    date: "29 Jan 2023",
    total: "$22.00",
    status: "Completed",
    action: "...",
  },

  {
    key: "5",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product5}
          alt="UTRAANET Black"
          className="w-12 h-12 object-contain"
        />
        <span>UTRAANET Black</span>
      </div>
    ),
    date: "27 Jan 2023",
    total: "$43.00",
    status: "Completed",
    action: "...",
  },

  {
    key: "6",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product6}
          alt="Elegant Ebony Sweatshirts"
          className="w-12 h-12 object-contain"
        />
        <span>Elegant Ebony Sweatshirts</span>
      </div>
    ),
    date: "25 Jan 2023",
    total: "$35.00",
    status: "Completed",
    action: "...",
  },

  {
    key: "7",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product7}
          alt="Sleek and Cozy Black"
          className="w-12 h-12 object-contain"
        />
        <span>Sleek and Cozy Black</span>
      </div>
    ),
    date: "22 Jan 2023",
    total: "$57.00",
    status: "Completed",
    action: "...",
  },

  {
    key: "8",
    order: (
      <div className="flex items-center gap-3">
        <img
          src={Product8}
          alt="MOCKUP Black"
          className="w-12 h-12 object-contain"
        />
        <span>MOCKUP Black</span>
      </div>
    ),
    date: "20 Jan 2023",
    total: "$30.00",
    status: "Completed",
    action: "...",
  },
];
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
export default Orders

