import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { MyContext } from "@/context/MyContext";
import Image from "next/image";

const Carrito = () => {
  const [total, setTotal] = useState(0);

  const { carrito, eliminarProducto, setCarrito } = useContext(MyContext);

  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
    setTotal(calcularTotal);
  }, [carrito]);

  const vaciarCart = () => {
    setCarrito([]);
  };

  if (carrito.length > 0) {
    return (
      <div className=" max-w-md lg:max-w-xl mx-auto">
        <div className="flex justify-end px-8 mt-10">
          <button
            onClick={vaciarCart}
            className=" py-1 text-white rounded px-4 bg-red-800">
            Vaciar
          </button>
        </div>

        {carrito.map((elemento, index) => {
          return (
            <div
              key={index}
              className="flex justify-center shadow p-4 mt-10 mb-3 px-6 lg:px-2 gap-2 lg:gap-8 items-center ">
              <div className="w-auto md:w-1/6">
                <Image
                  width={100}
                  height={10}
                  alt="imagen del producto"
                  src={elemento.imagen.data.attributes.url}
                />
              </div>

              <div className="w-2/2 lg:w-7/6 mx-6 lg:mx-20">
                <p className=" text-sm lg:text-xl  text-black">
                  {elemento.nombre}
                </p>
                <p className=" text-sm lg:text-xl  text-black mt-4 lg:mt-8">
                  Cantidad: {elemento.cantidad}
                </p>
                <p className=" Price-Card text-sm lg:text-xl  mt-4 lg:mt-8">
                  $ {elemento.precio}
                </p>
              </div>

              <div>
                <button
                  onClick={(id) => {
                    eliminarProducto(elemento.id);
                  }}
                  type="button"
                  className="bg-white text-red-800 p-1 rounded-sm uppercase w-full text-center mt-2 hover:shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:h-6 lg:w-6 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex justify-evenly py-10">
          <div>
            <p className=" text-gray-600 ">
              Total: ${total}
              <span className=""></span>
            </p>
          </div>
          <div>
            <Link href="/confirmacion">
              <button className=" py-1 text-white rounded px-4 bg-black">
                Confirmar
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" mt-28 mb-20">
      <div className="flex justify-center ">
        <p>Su carrito de compras se encuentra vacio!</p>
      </div>

      <div className="flex justify-center mt-20">
        <Link href="/tienda">
          <button className=" py-1 text-white rounded px-4 bg-black">
            Tienda
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Carrito;
