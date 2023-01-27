import { MyContext } from "@/context/MyContext";
import { useContext } from "react";

const MensajeCompraFinalizada = ({ info }) => {
  const { carrito} = useContext(MyContext);

  return (
    <div className="h-full flex justify-center my-40">
      <div>
        <p>Su compra fue concretada con exito señ@r <span className="font-bold">{ info.nombre}</span> l@ esperamos pronto!</p>
      </div>
    </div>
  );
};

export default MensajeCompraFinalizada;
