import { FiUser, FiLogOut, FiEdit, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Datos de ejemplo (puedes usar useContext o props reales)
  const user = {
    name: "Juan Pérez",
    email: "juan.perez@gmail.com",
    phone: "+51 987 654 321",
    membership: "Cliente Frecuente",
    avatarUrl: "https://i.pravatar.cc/150?img=3", // imagen temporal
  };

  const orders = [
    { id: "001", date: "2025-05-20", total: "S/ 89.00", status: "Entregado" },
    { id: "002", date: "2025-05-15", total: "S/ 45.50", status: "En camino" },
    { id: "003", date: "2025-05-10", total: "S/ 120.00", status: "Cancelado" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 text-gray-800">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header con avatar y datos */}
        <div className="bg-teal-500 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-white">
          <img
            src={user.avatarUrl}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded mt-2 inline-block">
              {user.membership}
            </span>
          </div>
        </div>

        {/* Acciones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x text-center text-sm">
          <Link to="/profile/edit" className="p-4 hover:bg-gray-50 flex flex-col items-center">
            <FiEdit className="text-xl mb-1" />
            Editar perfil
          </Link>
          <Link to="/orders" className="p-4 hover:bg-gray-50 flex flex-col items-center">
            <FiShoppingBag className="text-xl mb-1" />
            Mis pedidos
          </Link>
          <button className="p-4 hover:bg-gray-50 w-full flex flex-col items-center text-red-600">
            <FiLogOut className="text-xl mb-1" />
            Cerrar sesión
          </button>
        </div>

        {/* Historial de compras */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Historial reciente</h3>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded hover:bg-gray-100"
              >
                <div>
                  <p className="font-medium">Pedido #{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-teal-600">{order.total}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                    order.status === 'En camino' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
