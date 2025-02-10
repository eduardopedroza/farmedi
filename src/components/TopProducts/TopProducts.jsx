import React from "react";
import Ibuprofeno from "../../assets/topProducts/ibuprofeno.png";
import VitaminaD3 from "../../assets/topProducts/vitaminaD.png";
import Loratadina from "../../assets/topProducts/loratadina.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Ibuprofeno,
    title: "Ibuprofeno",
    description: "Alivia el dolor, la inflamación y reduce la fiebre.",
  },
  {
    id: 2,
    img: VitaminaD3,
    title: "Vitamina D3",
    description: "Esencial para la salud ósea y el sistema inmunológico.",
  },
  {
    id: 3,
    img: Loratadina,
    title: "Loratadina",
    description: "Antihistamínico eficaz para tratar alergias.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Productos Más Valorados Para Ti
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Mejores Productos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Descubre los medicamentos más recomendados para cuidar de tu salud y
            bienestar. Calidad y efectividad garantizada.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Ordenar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
