import { useState } from 'react';

const categories = [
  "Cereales", "Lácteos", "Carnes", "Verduras", "Frutas",
  "Embutidos", "Bebidas", "Agentes Limpiadores"
];

const brands = ["Gloria", "Nestlé", "Inca Kola", "San Fernando"];

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    brand: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilterChange(updated); // Emitir al padre
  };

  return (
    <aside className="w-full sm:w-64 bg-white p-4 border-r">
      <h3 className="text-lg font-semibold mb-2">Filtros</h3>

      {/* Categoría */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Categoría</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Todas</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Marca */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Marca</label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Todas</option>
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Precio */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Rango de precio</label>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Todos</option>
          <option value="0-10">S/ 0 - 10</option>
          <option value="10-50">S/ 10 - 50</option>
          <option value="50-100">S/ 50 - 100</option>
          <option value="100+">Más de S/ 100</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductFilters;
