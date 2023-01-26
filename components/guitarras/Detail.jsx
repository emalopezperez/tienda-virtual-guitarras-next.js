import { useState, useContext, useEffect } from "react";
import Review from "../feature/Review";
import Image from "next/image";
import Count from "./Count";
import { MyContext } from "@/context/MyContext";

const Detail = ({ element, key }) => {
  const { agregarCarrito } = useContext(MyContext);

  const { nombre, imagen, descripcion, precio, url } = element.attributes;

  const onAdd = (cantidad) => {
    const producto = {
      id: url,
      nombre,
      imagen,
      precio,
      cantidad,
    };

    agregarCarrito(producto);
  };

  return (
    <>
      <section key={url} className="mt-[38px]">
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 border-2">
              <Image
                src={imagen.data.attributes.url}
                alt="imagen de los instrumentos"
                width={200}
                height={100}
              />
            </div>

            <div className=" ">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{nombre}</h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="mt-2 -ml-0.5 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">${precio}</p>
              </div>

              <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{descripcion}</p>
                    </div>
                  </div>
                </summary>

                <div className="pb-6 prose max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label for="color_tt" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="sr-only peer"
                        />

                        <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label for="color_fr" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="sr-only peer"
                        />

                        <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label for="size_xs" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          className="sr-only peer"
                        />

                        <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          XS
                        </span>
                      </label>

                      <label for="size_s" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_s"
                          className="sr-only peer"
                        />

                        <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          S
                        </span>
                      </label>

                      <label for="size_m" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_m"
                          className="sr-only peer"
                        />

                        <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          M
                        </span>
                      </label>

                      <label for="size_l" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_l"
                          className="sr-only peer"
                        />

                        <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          L
                        </span>
                      </label>

                      <label for="size_xl" className="cursor-pointer p-0.5">
                        <input
                          type="radio"
                          name="size"
                          id="size_xl"
                          className="sr-only peer"
                        />

                        <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          XL
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="flex mt-2">
                <Count onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <Review />
      </div>
    </>
  );
};

export default Detail;
