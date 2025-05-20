import { productos } from "../data/mockProducts";
import { useParams } from "react-router-dom";
import Card from "../components/utils/Card";
const CategoryProducts = () => {
  const { category } = useParams();
  const productosFiltrados = productos[category] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-teal-600 capitalize">
        Productos en: {category}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {productosFiltrados.map((prod) => (
          <Card key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};


export default CategoryProducts;