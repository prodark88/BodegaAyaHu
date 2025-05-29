import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch('https://tu-api.com/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchAll();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    await fetch(`https://tu-api.com/api/products/${id}`, { method: 'DELETE' });
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Productos</h2>
      <table className="w-full table-auto text-left border">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Categoría</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{p.name}</td>
              <td className="p-2">S/ {p.price}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">{p.stock ?? 'N/A'}</td>
              <td className="p-2 flex gap-2">
                <Link to={`/admin/edit/${p._id}`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => handleDelete(p._id)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
