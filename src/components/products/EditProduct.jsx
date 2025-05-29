import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { productId } = useParams(); // viene desde la ruta /admin/edit/:productId

  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });
  const [message, setMessage] = useState(null);

  const categories = [
    "Cereales", "Lácteos", "Carnes", "Verduras", "Frutas",
    "Embutidos", "Bebidas", "Agentes Limpiadores", "Promociones", "Cyber 365"
  ];

  // Obtener producto actual
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://tu-api.com/api/products/${productId}`);
      const data = await res.json();
      setForm(data);
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://tu-api.com/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setMessage(res.ok ? 'Producto actualizado' : 'Error al actualizar');
    } catch {
      setMessage('Error del servidor');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-6 mb-6">
      <h2 className="text-2xl font-semibold text-teal-600 mb-4">Editar producto</h2>
      {message && <p className="text-sm mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required className="w-full border p-2 rounded" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Precio" type="number" step="0.01" required className="w-full border p-2 rounded" />
        <select name="category" value={form.category} onChange={handleChange} required className="w-full border p-2 rounded">
          {categories.map((cat) => <option key={cat}>{cat}</option>)}
        </select>
        <input name="image" value={form.image} onChange={handleChange} placeholder="URL Imagen" className="w-full border p-2 rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" className="w-full border p-2 rounded" rows={4}></textarea>
        <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">Actualizar</button>
      </form>
    </div>
  );
};

export default EditProduct;
