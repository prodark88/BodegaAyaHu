import image from "../../assets/image.png";
const Card = ({ title, brand, volume, price, image }) => {
  return (
    <div className="border rounded-lg p-4 w-full max-w-xs mx-auto flex flex-col items-center text-center shadow-sm">
      <div className="w-full flex justify-start mb-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
          alt="Bandera Perú"
          className="w-5 h-5"
        />
      </div>

      <img src={image} alt={title} className="h-40 object-contain mb-3" />

      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
        {brand}
      </p>
      <h3 className="text-sm font-medium mb-2 leading-tight">
        {title}
        <br />
        {volume}
      </h3>

      <p className="text-lg font-bold mb-3 text-black">{price}</p>

      <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 text-sm font-semibold rounded w-full">
        AÑADIR AL CARRITO
      </button>
    </div>
  );
};

export default Card