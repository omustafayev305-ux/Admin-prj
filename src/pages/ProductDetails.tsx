import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSingleProduct } from '../redux/productsSlice';
import type { AppDispatch, RootState } from '../redux/store';

function ProductDetails() {
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();

  const { selectedProduct, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProduct(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!selectedProduct) {
    return <p>Product tapilmadi</p>;
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6] p-10">
      <div className="max-w-[900px] mx-auto bg-white border p-8">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full max-w-[350px] object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{selectedProduct.title}</h1>

            <p className="text-2xl font-semibold mb-4">
              ${selectedProduct.price}
            </p>

            <p className="mb-2">Category: {selectedProduct.category}</p>

            <p className="mb-2">Stock: {selectedProduct.stock}</p>

            <p className="text-gray-600">Product ID: {selectedProduct.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

