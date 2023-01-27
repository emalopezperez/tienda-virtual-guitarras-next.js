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
      <div className="mt-40">
        <MensajeCompraFinalizada info={info}/>
      </div>
    )
  } 
    return (
    <div>
      <div id="contact" className="mt-40  bg-gray-50 m-1">
        <div className="max-w-[1200px]  px-2 py-16 w-full m-auto p-2  pt-16 pb-20">
          <div className="flex justify-center pb-8">
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
              Confirmacion de compra
            </p>
          </div>

          <div className="flex justify-center">
            <div className=" w-full lg:w-7/12 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              {<Toaster position="top-right" reverseOrder={false} />}
              <div className="p-4">
                <form onSubmit={handleSubmit} action="" method="" encType="">
                  <div className="grid  gap-2 w-full py-2">
                    <div className=" flex flex-col py-2">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">numero</label>
                      <input
                        onChange={(e) => setNumber(e.target.value)}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Direccion</label>
                    <input
                      onChange={(e) => setDireccion(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="direccion"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Tarjetas</label>
                    <input
                      onChange={(e) => setTarget(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="target"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 bg-black text-gray-100 mt-4">
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
