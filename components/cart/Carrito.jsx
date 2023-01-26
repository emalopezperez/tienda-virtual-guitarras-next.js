import { useContext } from "react";
import Link from "next/link";
import { MyContext } from "@/context/MyContext";
import Image from "next/image";

const Carrito = ({elemento}) => {
  const { carrito } = useContext(MyContext);

  

  if (carrito.length > 0) {
    return (
      <>
        <div className="flex flex-col">
          <div className=" Informacion-Cart italic text-center mt-6">
            <h2 className=" text-black text-2xl lg:text-4xl italic">
              Informacion importante
            </h2>
            <p className="text-sm lg:text-base text-black mt-6 italic">
              los medios de pagos con los que trabajamos son mediante Mercado de
              Pago, Trasferencia Bancaria o Efectivo.
            </p>
          </div>

          <div className=" mt-12 m-3 ">
            <button
              
              className="  px-2 btn-Limpiar bg-teal-500 ">
              Vaciar carrito
            </button>
          </div>
        </div>
        {carrito.map((elemento, index) => {
          return (
            <div
              key={index}
              className="shadow p-5 mt-10 mb-3 flex lg:gap-2 gap-10 items-center">
              <div className="md:w-1/6">
                <Image
                  width={150}
                  height={20}
                  alt="imagen del producto"
                  src={elemento.imagen}
                />
              </div>

              <div className="md:w-4/6 ">
                <p className=" text-sm lg:text-xl  text-black">
                  {elemento.nombre}
                </p>
                <p className=" text-sm lg:text-xl  text-black mt-2">
                  Cantidad: {elemento.cantidad}
                </p>
                <p className=" Price-Card text-sm lg:text-xl  mt-2">
                  ${elemento.precio}
                </p>
              </div>

              <div>
                <button
                  
                  type="button"
                  className="hover:bg-slate-200 flex gap-2  lg:px-5 lg:py-2 text-black rounded-md  uppercase shadow-md w-full text-center mt-3">
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

        <div className="flex justify-evenly  lg:mt-5  mt-0 py-2">
          <p className="mt-10 text-gray-600 ">
            Total: $<span className=""></span>
          </p>
          <Link href="/category/registro">
            <button className="bg-red-900 rounded-full  text-lg text-white m-8 px-8">
              Confirmar
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>hola</h2>
    </>
  );
};

export default Carrito;
