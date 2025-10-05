"use client";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  type: string;
  name: string;
  price: number;
}

export default function BuyingSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [emi, setEmi] = useState<number>(0);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBuy = async () => {
    if (!selectedProduct) return;

    const product = products.find((p) => p.id === selectedProduct);

    if (!product) return;

    const request = {
      type: product.type,
      name: product.name,
      price: product.price,
      emi: emi,
      status: "Pending",
    };

    // Simulate sending buying request
    const res = await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    const data = await res.json();
    setMessage(`Buying request for ${product.name} submitted successfully!`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Buy a Product</h2>

      <select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(Number(e.target.value))}
        className="border p-2 rounded mb-2 w-full"
      >
        <option value="">-- Select a Product --</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.type} - {product.name} - ₹{product.price}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="EMI per month (₹)"
        value={emi}
        onChange={(e) => setEmi(Number(e.target.value))}
        className="border p-2 rounded mb-2 w-full"
      />

      <button
        onClick={handleBuy}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Submit Buying Request
      </button>

      {message && <p className="mt-2 text-green-500">{message}</p>}
    </div>
  );
}
