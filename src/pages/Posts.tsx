import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import type { AppDispatch, RootState } from '../redux/store';
import { Table } from 'antd';

function Posts() {
  const dispatch = useDispatch<AppDispatch>();

  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts,
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const tableData = posts.map((post) => ({
    key: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
  }));

 
    const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
  {
    title: "User ID",
    dataIndex: "userId",
    key: "userId",
  },
];
 return (
  <Table
    columns={columns}
    dataSource={tableData}
    loading={loading}
  />
);
}

export default Posts;