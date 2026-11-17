import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';

import { fetchQuotes } from '../redux/quoteSlice';
import type { AppDispatch, RootState } from '../redux/store';

function Quotes() {
  const dispatch = useDispatch<AppDispatch>();

  const { quotes, loading, error } = useSelector(
    (state: RootState) => state.quote,
  );

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  const tableData = quotes.map((quote) => ({
    key: quote.id,
    quote: quote.quote,
    author: quote.author,
  }));

  const columns = [
    {
      title: 'Quote',
      dataIndex: 'quote',
      key: 'quote',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
  ];

  return <Table columns={columns} dataSource={tableData} loading={loading} />;
}

export default Quotes;
