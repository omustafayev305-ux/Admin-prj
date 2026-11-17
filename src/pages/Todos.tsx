import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchTodos } from '../redux/Todoslice';
import type { AppDispatch, RootState } from '../redux/store';

function Todos() {
  const dispatch = useDispatch<AppDispatch>();

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos,
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const tableData = todos.map((todo) => ({
    key: todo.id,
    todo: todo.todo,
    completed: todo.completed,
    userId: todo.userId,
  }));

  const columns = [
    {
      title: 'Todo',
      dataIndex: 'todo',
      key: 'todo',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
  ];

  return <Table columns={columns} dataSource={tableData} loading={loading} />;
}

export default Todos;
