import {Breadcrumb,Input,Table} from "antd"
import Sidebar from "../components/Sidebar"
import { SearchOutlined } from "@ant-design/icons" 
import Avatar1 from "../assets/Avatar1.png"
import Avatar2 from "../assets/Avatar2.png"
import Avatar3 from "../assets/Avatar3.png"
import Avatar4 from "../assets/Avatar4.png"
import Avatar5 from "../assets/Avatar5.png"
import Avatar6 from "../assets/Avatar6.png"
import Avatar7 from "../assets/Avatar7.png"
import Avatar8 from "../assets/Avatar8.png"

function Reviews() {
const columns =[
   {
      title:"Name",
      dataIndex:"name",
      key:"name",
    },
    {
      title:"Review",
      dataIndex:"review",
      key:"review",

    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action"
    },
  ];
  const data = [
  {
    key: "1",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar1}
          alt="Esther Howard"
          className="w-12 h-12 object-contain"
        />
        <span>Esther Howard</span>
      </div>
    ),
     review:"Completed the task and added the required documentation, can someone please ....",
    action: "...",
  },

  {
    key: "2",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar2}
          alt="Wade Warren"
          className="w-12 h-12 object-contain"
        />
        <span>Wade Warren</span>
      </div>
    ),
    review:"Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.",
    action: "...",
  },

  {
    key: "3",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar3}
          alt="Brooklyn Simmons"
          className="w-12 h-12 object-contain"
        />
        <span>Brooklyn Simmons</span>
      </div>
    ),
    review:"Twenty 30-second applications within half an hour is well in excess.",
    action: "...",
  },

  {
    key: "4",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar4}
          alt="Robert Fox"
          className="w-12 h-12 object-contain"
        />
        <span>Robert Fox</span>
      </div>
    ),
    review:"An interesting implication of the 2007 study concerns the use of hand sanitizers.",
    action: "...",
  },

  {
    key: "4",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar5}
          alt="Dianne Russell"
          className="w-12 h-12 object-contain"
        />
        <span>Dianne Russell</span>
      </div>
    ),
   review:"I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ",
    action: "...",
  },

  {
    key: "4",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar6}
          alt="Ralph Edwards"
          className="w-12 h-12 object-contain"
        />
        <span>Ralph Edwards</span>
      </div>
    ),
     review:"The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ",
    action: "...",
  },

  {
    key: "4",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar7}
          alt="Theresa Webb"
          className="w-12 h-12 object-contain"
        />
        <span>Theresa Webb</span>
      </div>
    ),
    review:"Alcohol based exposures through inadvertently consuming hand sanitize",
    action: "...",
  },

  {
    key: "4",
    name: (
      <div className="flex items-center gap-3">
        <img
          src={Avatar8}
          alt="Arlene McCoy"
          className="w-12 h-12 object-contain"
        />
        <span>Arlene McCoy</span>
      </div>
    ),
    review:"I'm grateful for the supportive work environment during personal challenges.", 
    action: "...",
  },
];
return(
   <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar/>
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
export default Reviews
