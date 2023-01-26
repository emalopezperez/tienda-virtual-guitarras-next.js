import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const ConfirmacionCompra = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [number, setNumber] = useState("");
  const [menssage, setMensagge] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div id="contact" className="mt-40  bg-gray-50 m-1">
        <div className="max-w-[1200px]  px-2 py-16 w-full m-auto p-2  pt-16 pb-20">
          <div className="flex justify-center pb-8">
            <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">
              Confirmacion de compra
            </p>
          </div>

          <div className=" grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="sm:flex hidden col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div></div>
                <div>
                  <h2 className="py-2  titulo-logo">The Guitarists</h2>
                  <p className="py-4">
                  Para concretar con la compra le pedimos que Ingrese sus datos
                  </p>
                  <p className="py-4">
                    Desde ya, ¡muchas gracias! El equipo de{" "}
                    <span className="titulo-logo cursor-pointer">Guitar</span>.
                  </p>
                </div>
                <div>
                  <p className="uppercase font-bold pt-8">
                    OTROS MEDIOS de comunicacion:
                  </p>
                  <div className=" mt-6 flex items-center justify-between py-4">
                    <a href="" target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>

                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <Link href="/">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form onSubmit={handleSubmit} action="" method="" encType="">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
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
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
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
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                  <button
                    type="submit"
                    className="w-full p-4 bg-black text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionCompra;