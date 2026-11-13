import { Button, Form, Input } from 'antd';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

function AddProduct() {
  
  const [selectedSize, setSelectedSize] = useState('');
   return (
  <div className="flex min-h-screen bg-[#f6f6f6]">
    <Sidebar />

    <main className="flex-1 p-10">
      <div className="bg-white border max-w-[1100px] mx-auto">
        <div className="px-10 py-6 border-b">
          <h1 className="text-lg font-semibold">
            Add Product
          </h1>
        </div>

        <Form
          layout="vertical"
          className="px-10 py-10"
        >
          <div className="grid grid-cols-2 gap-x-20">

            <div className="max-w-[320px]">
              <Form.Item label="Title" name="title">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="Price" name="price">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="Category" name="category">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="Slug" name="slug">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="SKU" name="sku">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
              >
                <Input.TextArea
                  rows={4}
                  className="resize-none"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                className="!bg-[#111827] !border-none !h-11 !px-6 mt-6"
              >
                Save Product
              </Button>
            </div>

            <div className="max-w-[320px]">
              <Form.Item
                label="Stock status"
                name="stockStatus"
              >
                <Input className="h-11" />
              </Form.Item>

              <Form.Item
                label="Available quantity"
                name="quantity"
              >
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="Images" name="images">
                <Input className="h-11" />
              </Form.Item>

              <Form.Item label="Colors">
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-blue-300"
                  />
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-yellow-300"
                  />
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-green-400"
                  />
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-blue-500"
                  />
                </div>
              </Form.Item>

              <Form.Item label="Sizes">
                <div className="flex gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 border rounded ${
                        selectedSize === size
                          ? "bg-[#111827] text-white"
                          : "bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </main>
  </div>
);
}
export default AddProduct