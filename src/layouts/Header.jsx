import { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const navItems = [
    { label: "Cereales", to: "/products/cereales" },
    { label: "Lácteos", to: "/products/lacteos" },
    { label: "Carnes", to: "/products/carnes" },
    { label: "Verduras", to: "/products/verduras" },
    { label: "Frutas", to: "/products/frutas" },
    { label: "Embutidos", to: "/products/embutidos" },
    { label: "Bebidas", to: "/products/bebidas" },
    { label: "Agentes Limpiadores", to: "/products/limpieza" },
    { label: "Promociones", to: "/products/promociones" },
    { label: "Cyber 365", to: "/products/cyber-365" },
  ];

  return (
    <header className="bg-teal-500 text-white w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 px-30 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">AYA</span>
          <Link to="/">
            <div className="text-sm">
              <p className="uppercase tracking-wide font-semibold leading-4">Bodega / Ayacucho</p>
              <p className="text-xs">Alimentos & Bebidas</p>
            </div>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex flex-1 max-w-lg mx-4 w-10/12">
          <input
            type="text"
            placeholder="Buscar aquí"
            className="flex-grow w-4/12 px-4 py-2 rounded-l-full text-black bg-white"
          />
          <button className="bg-white px-4 py-2 rounded-r-full text-gray-500">
            <FiSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-sm relative">
          {/* User Dropdown */}
          <div className="relative">
            <div
              className="flex items-center text-2xl gap-1 cursor-pointer"
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
            >
              <FiUser />
              <span className="hidden text-lg sm:inline">Mi cuenta</span>
            </div>
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 shadow-md rounded-md z-50">
                <ul className="flex flex-col text-sm">
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/login">Iniciar sesión</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/register">Registrarse</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="flex items-center text-xl gap-2 cursor-pointer">
            <FiShoppingCart />
            <span>0</span>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden">
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-teal-400 text-sm font-semibold">
        <ul className="hidden sm:flex justify-center gap-6 py-2 uppercase">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className={`hover:text-white ${item.label === 'Promociones' || item.label === 'Cyber 365'
                  ? 'bg-black px-3 py-1 rounded'
                  : ''
                }`}
            >
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="sm:hidden flex flex-col gap-2 px-4 pb-4">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`hover:text-white ${item.label === 'Promociones' || item.label === 'Cyber 365'
                    ? 'bg-black px-3 py-1 rounded'
                    : ''
                  }`}
              >
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
