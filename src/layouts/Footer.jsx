import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Top footer */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        {/* Logo + Contacto */}
        <div>
          <h2 className="text-xl font-bold mb-4">BODEGA / AYACUCHO</h2>
          <p className="text-gray-400 mb-2">ALIMENTOS & BEBIDAS</p>
          <p className="mt-4 text-gray-300">📍 Av. 28 de Julio 753 Of. 302,tangamandapio, MX</p>
          <div className="mt-4 flex gap-3 text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Grupo Tabernero */}
        <div>
          <h3 className="font-semibold mb-3">GRUPO ELP</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="#">Nosotros</Link></li>
            <li><Link to="#">Contáctanos</Link></li>
          </ul>
        </div>

        {/* Marcas */}
        <div>
          <h3 className="font-semibold mb-3">MARCAS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Gloria</li>
            <li>Doña Gusta</li>
            <li>Ajinomoto</li>
            <li>San Fernando</li>
            <li>Laive</li>
            <li>Don Vittorio</li>
            <li>San Jorge</li>
            <li>Inka Kola</li>
            <li>Coca Cola</li>
            <li>Head & Shoulders</li>
          </ul>
        </div>

        {/* Atención al usuario */}
        <div>
          <h3 className="font-semibold mb-3">ATENCIÓN AL USUARIO</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="#">Términos y condiciones</Link></li>
            <li><Link to="#">Cambios y devoluciones</Link></li>
          </ul>
          <h3 className="font-semibold mt-6 mb-2">LIBRO DE RECLAMACIONES</h3>
          <span className="text-2xl">📖</span>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-black py-4 text-center text-xs text-gray-400 flex flex-col items-center gap-2">
        {/* <p>TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO</p> */}
        <div className="flex gap-4 justify-center flex-wrap text-white">
          <span>VISA</span>
          <span>MasterCard</span>
          <span>Diners Club</span>
          <span>American Express</span>
          <span>PagoEfectivo</span>
        </div>
        <p className="mt-2">Diseñado y Desarrollado por <a href="#" className="text-green-400">GRUPO5QUEACADAVEZSONMENOS.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
