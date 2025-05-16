import image from "../../assets/image.png";
const Card =() => {
  return (
    <div className="border rounded-lg p-4 w-full max-w-xs mx-auto flex flex-col items-center text-center shadow-sm">
      {/* Bandera */}
      <div className="w-full flex justify-start mb-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
          alt="Bandera Perú"
          className="w-5 h-5"
        />
      </div>

      {/* Imagen del producto */}
      <img
        src={image}
        alt="Gran Tinto Fina Reserva"
        className="h-40 object-contain mb-3"
      />

      {/* Detalles */}
      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Tabernero</p>
      <h3 className="text-sm font-medium mb-2 leading-tight">
        Gran Tinto Fina Reserva<br />750 ML
      </h3>

      {/* Precio */}
      <p className="text-lg font-bold mb-3 text-black">S/ 24.40</p>

      {/* Botón */}
      <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm font-semibold rounded w-full">
        AÑADIR AL CARRITO
      </button>
    </div>
  );
}

export default Card