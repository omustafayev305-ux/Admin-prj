import {Table} from "antd"


function RecentOrders () {
  const columns =[
    {
      title:"Item",
      dataIndex:"item",
      key:"item"
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
      key:"status"
    }
  ];
  const data = [
    {
      key:"1",
      item:"Mens Black T-Shirts",
      date:"20 Mar 2023",
      total:"$75.00",
      status:"Processing",
    },
    {
      key:"2",
      item:"Essential Neutrals",
      date:"19 Mar 2023",
      total:"$22.00",
      status:"Processing"
    },
    {
    key:"3",
    item:"Sleek and Cozy Black",
    date:"7 Feb 2023",
    total:"$57.00",
    status:"Completed"
    },
     {
    key:"4",
    item:"MOCKUP BLACK",
    date:"29 Jan 2023",
    total:"$30.00",
    status:"Complated"
    },
        {
    key:"5",
    item:"Monochromatic Wardrobe",
    date:"27 Jan 2023",
    total:"$27.00",
    status:"Complated"
    },
  ];
  return(
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="flex items-center gap-4 p-6 border-b">
       <h2 className="font-bold">
        Recent Orders
       </h2>
       <button className="text-xs bg-gray-100 px-3 py-1 rounded-full">
        View All
       </button>
      </div>
      <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      />
    </div>
  )
}
export default RecentOrders