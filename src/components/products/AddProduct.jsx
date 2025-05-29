import { useState } from 'react';

const AddProduct = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Aquí conectarías con tu backend real
      const response = await fetch('https://tu-api.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage('Producto agregado con éxito.');
        setForm({ name: '', price: '', category: '', image: '', description: '' });
      } else {
        setMessage('Error al agregar el producto.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Ocurrió un error inesperado.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-white rounded-md shadow-md text-gray-800 mt-6 mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-teal-600">Agregar nuevo producto</h2>

      {message && <div className="mb-4 text-sm text-blue-600">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Nombre del producto</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Precio (S/)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Categoría</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Imagen (URL)</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
