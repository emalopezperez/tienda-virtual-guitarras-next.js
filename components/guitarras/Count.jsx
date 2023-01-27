import React, { useState } from "react";
import Link from "next/link";

function Count({ onAdd }) {
  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => {
    setCantidad(cantidad + 1);
  };
  const disminuir = () => {
    setCantidad(cantidad - 1);

    if (cantidad <= 1) {
      setCantidad(1);
    }
  };

  const confirmar = () => {
    onAdd(cantidad);
  };

  return (
    <>
      <div className="flex  flex-row text-xl mt-9">
        <button className="  w-6 rounded " onClick={disminuir}>
          -
        </button>
        <h3 className="p-2 text-sm">{cantidad}</h3>
        <button className="  w-6 rounded " onClick={aumentar}>
          +
        </button>
      </div>
      <div className="flex px-4 justify-center mt-10 ">
        <Link href={"/cart"}>
          <button
            className="py-1 text-white rounded px-4 bg-black"
            onClick={confirmar}>
            Confirmar
          </button>
        </Link>
      </div>
    </>
  );
}

export default Count;
