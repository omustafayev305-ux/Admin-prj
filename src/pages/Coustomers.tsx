import { Breadcrumb, Input, Table } from 'antd';
import Sidebar from '../components/Sidebar';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../redux/usersSlice';
import type { AppDispatch, RootState } from '../redux/store';
function Coustomers() {
  const{users,loading,error} = useSelector(
    (state:RootState)=>state.users
  )
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])
  const tableData = users.map((user) => ({
    key: user.id,
    name: (
      <div className="flex items-center gap-3">
        <img src={user.image} alt={`${user.firstName}${user.lastName}`}
        className='w-12 h-12 rounded-full object-cover'
        />
        <span>
          {user.firstName}{user.lastName}
        </span>
      </div>
    ),
    email:user.email,
    phone:user.phone,
  }));


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Shipping Adress',
      dataIndex: 'shippingadress',
      key: 'shippingadress',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const data = [
    {
      key: '1',
      name: (
        <div className="flex items-center gap-3">
          <img
            
            alt="Esther Howard"
            className="w-12 h-12 object-contain"
          />
          <span>Esther Howard</span>
        </div>
      ),
      email: 'estherhoward@gmail.com',
      shippingadress: '8642 Yule Street, Arvada CO 80007',
      action: '...',
    },

    {
      key: '2',
      name: (
        <div className="flex items-center gap-3">
          <img
           
            alt="Wade Warren"
            className="w-12 h-12 object-contain"
          />
          <span>Wade Warren</span>
        </div>
      ),
      email: 'wade.warren@gmail.com',
      shippingadress: '5331 Rexford Court, Montgomery AL 36116',
      action: '...',
    },

    {
      key: '3',
      name: (
        <div className="flex items-center gap-3">
          <img
         
            alt="Brooklyn Simmons"
            className="w-12 h-12 object-contain"
          />
          <span>Brooklyn Simmons</span>
        </div>
      ),
      email: 'brooklyn.simmons@gmail.com',
      shippingadress: '2325 Eastridge Circle, Moore OK 73160',
      action: '...',
    },

    {
      key: '4',
      name: (
        <div className="flex items-center gap-3">
          <img
               alt="Robert Fox"
            className="w-12 h-12 object-contain"
          />
          <span>Robert Fox</span>
        </div>
      ),
      email: 'robert.fox@gmail.com',
      shippingadress: '2436 Naples Avenue, Panama City FL 32405',
      action: '...',
    },

    {
      key: '4',
      name: (
        <div className="flex items-center gap-3">
          <img
           
            alt="Dianne Russell"
            className="w-12 h-12 object-contain"
          />
          <span>Dianne Russell</span>
        </div>
      ),
      email: 'dianne.russell@gmail.com',
      shippingadress: '6095 Terry Lane, Golden CO 80403',
      action: '...',
    },

    {
      key: '4',
      name: (
        <div className="flex items-center gap-3">
          <img
          
            alt="Ralph Edwards"
            className="w-12 h-12 object-contain"
          />
          <span>Ralph Edwards</span>
        </div>
      ),
      email: 'ralph.edwards@gmail.com',
      shippingadress: '4001 Anderson Road, Nashville TN 37217',
      action: '...',
    },

    {
      key: '4',
      name: (
        <div className="flex items-center gap-3">
          <img
         
            alt="Theresa Webb"
            className="w-12 h-12 object-contain"
          />
          <span>Theresa Webb</span>
        </div>
      ),
      email: 'theresa.webb@gmail.com',
      shippingadress: '19141 Pine Ridge Circle, Anchorage AK 99516',
      action: '...',
    },

    {
      key: '4',
      name: (
        <div className="flex items-center gap-3">
          <img
           
            alt="Arlene McCoy"
            className="w-12 h-12 object-contain"
          />
          <span>Arlene McCoy</span>
        </div>
      ),
      email: 'arlene.mccoy@gmail.com',
      shippingadress: '2613 Cottonwood Street, Anchorage AK 99508',
      action: '...',
    },
  ];
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
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

        <div className="bg-white  overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h1 className="text-xl font-bold">Products</h1>

            <div className="flex gap-3">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search products"
                className="w-52"
              />
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={tableData}
            loading={loading}
            pagination={{
              pageSize: 8,
            }}
          />
        </div>
      </main>
    </div>
  );
}
export default Coustomers;
