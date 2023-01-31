import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MensajeCompraFinalizada from "./MensajeCompraFinalizada";

const ConfirmacionCompra = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [number, setNumber] = useState("");
  const [direccion, setDireccion] = useState("");
  const [target, setTarget] = useState("");
  const [info, setInfo] = useState({});
  const [mensaje, setMensaje]= useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, number, nombre, target].includes("")) {
      toast.error("Todos los campos son obligatorios!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#f48fb3",
        },
        iconTheme: {
          primary: "#660033 ",
          secondary: "#FFFAEE",
        },
      });
    } else {
      const order = {
        nombre,
        email,
        number,
        direccion,
        target,
      };
      setInfo(order);
      setMensaje(true)
    }
  };

  if(mensaje){
    return(
      <div className="mt-5">
        <MensajeCompraFinalizada info={info}/>
      </div>
    )
  } 
    return (
    <div>
      <div id="contact" className="m-1 mt-40 bg-gray-50">
        <div className="max-w-[1200px]  px-2 py-16 w-full m-auto p-2  pt-16 pb-20">
          <div className="flex justify-center pb-8">
            <p className="pb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Confirmacion de compra
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full h-auto shadow-xl lg:w-7/12 shadow-gray-400 rounded-xl lg:p-4">
              {<Toaster position="top-right" reverseOrder={false} />}
              <div className="p-4">
                <form onSubmit={handleSubmit} action="" method="" encType="">
                  <div className="grid w-full gap-2 py-2">
                    <div className="flex flex-col py-2 ">
                      <label className="py-2 text-sm uppercase">Name</label>
                      <input
                        className="flex p-3 border-2 border-gray-300 rounded-lg"
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="py-2 text-sm uppercase">numero</label>
                      <input
                        onChange={(e) => setNumber(e.target.value)}
                        className="flex p-3 border-2 border-gray-300 rounded-lg"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Direccion</label>
                    <input
                      onChange={(e) => setDireccion(e.target.value)}
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="direccion"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Tarjetas</label>
                    <input
                      onChange={(e) => setTarget(e.target.value)}
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="target"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 mt-4 text-gray-100 bg-black">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
  
};

export default ConfirmacionCompra;
