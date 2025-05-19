import { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';

const Header =()=> {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Arroz",
    "Azúcar",
    "Aceite",
    "Lacteos",
    "Arinas",
    "Embutidos",
    "Bebidas",
    "Limpieza",
    "Promociones",
    "Cyber 365",
  ];

  return (
    <header className="bg-teal-500 text-white w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between p-4 px-30 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">T</span>
          <div className="text-sm">
            <p className="uppercase tracking-wide font-semibold leading-4">Bodega / T</p>
            <p className="text-xs">Drinks & Deli</p>
          </div>
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
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center text-2xl  gap-1 cursor-pointer">
            <FiUser />
            <span className="hidden text-lg sm:inline">Mi cuenta</span>
          </div>
          <div className="flex items-center text-xl  gap-2 cursor-pointer">
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
              className={`hover:text-white ${
                item === 'Promociones' || item === 'Cyber 365'
                  ? 'bg-black px-3 py-1 rounded'
                  : ''
              }`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="sm:hidden flex flex-col gap-2 px-4 pb-4">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`hover:text-white ${
                  item === 'Promociones' || item === 'Cyber 365'
                    ? 'bg-black px-3 py-1 rounded'
                    : ''
                }`}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header
