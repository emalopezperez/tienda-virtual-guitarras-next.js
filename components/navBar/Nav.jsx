import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (window.scrollY >= 10) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-black/90");
        document.getElementById("text-color").classList.add("text-white");
        document.getElementById("title-color").classList.add("text-white");
        document
          .getElementById("title-color-mobil")
          .classList.add("text-white");
        document
          .getElementById("title-color-boton")
          .classList.add("text-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-black/90");
        document.getElementById("text-color").classList.remove("text-white");
        document.getElementById("title-color").classList.remove("text-white");
        document
          .getElementById("title-color-mobil")
          .classList.remove("text-white");
        document
          .getElementById("title-color-boton")
          .classList.remove("text-white");
      }
    }
  }

  return (
    <nav
      id="navbar"
      data-scroll
      data-scroll-id="hey"
      className="fixed top-0 z-40 w-full px-20 py-4 transition duration-300 ease-in-out shadow-navbar ">

      <div className="px-4 sm:px-6">
        <div className="flex-wrap items-center justify-between hidden px-2 -mt-2 -ml-4 lg:flex sm:flex-nowrap md:px-14">
          <div>
            <Link
              id="title-color"
              href="/"
              className="inline-flex mx-4 mt-2 text-2xl leading-6 transition duration-300 ease-in-out font-semi-bold hover:border-gray-900 ">
              The Guitar
            </Link>
          </div>
          <Link href="/" className="mt-2 ml-4"></Link>
          <div id="text-color" className="flex-shrink-0 mt-2 ml-4">
            <Link
              href="/"
              className="inline-flex mx-4 font-semibold transition duration-300 ease-in-out border-b-2 border-white text-smg leading- hover:border-gray-900">
              Inicio
            </Link>

            <Link
              href="/tienda"
              className="inline-flex mx-4 text-sm font-semibold leading-6 transition duration-300 ease-in-out border-b-2 border-white hover:border-gray-900">
              Tienda
            </Link>

            <Link
              href="/blog"
              className="inline-flex mx-4 text-sm font-semibold leading-6 transition duration-300 ease-in-out border-b-2 border-white hover:border-gray-900">
              Blog
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex mx-4 text-sm font-semibold leading-6 transition duration-300 ease-in-out border-b-2 border-white hover:border-gray-900">
              Nosotros
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex mx-4 text-sm font-semibold leading-6 transition duration-300 ease-in-out border-b-2 border-white hover:border-gray-900">
              Contacto
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center px-4 py-1 ml-12 text-base font-semibold text-white transition duration-300 ease-in-out border border-transparent rounded-sm shadow-sm bg-black/90 -button hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <AiOutlineShoppingCart size={ 18 } />
            </Link>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90"
              : ""
          }>
          {/* Side Drawer Menu */ }
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div className="flex items-center w-full gap-20 ">
              <Link href="/">
                <h1 className="text-xl text-white">The Guitar</h1>
              </Link>
              <div
                onClick={ handleNav }
                className="p-3 bg-white rounded-full shadow-lg cursor-pointer shadow-gray-400">
                <AiOutlineClose />
              </div>
            </div>
            <div className="pt-6 my-4 border-b border-gray-300">
              <p className="text-sm tracking-widest text-white uppercase">
                Somos tu mejor opcion
              </p>
            </div>
            <div className="flex flex-col py-4 text-white">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={ () => setNav(false) } className="py-2 text-sm">
                    Inicio
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={ () => setNav(false) } className="py-2 text-sm">
                    Sobre nosotros
                  </li>
                </Link>

                <Link href="/tienda">
                  <li onClick={ () => setNav(false) } className="py-4 text-sm">
                    Tienda
                  </li>
                </Link>
                <Link href="/blog">
                  <li onClick={ () => setNav(false) } className="py-2 text-sm">
                    blog
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={ () => setNav(false) } className="py-2 text-sm">
                    Contacto
                  </li>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-3 py-1 mt-4 text-base font-semibold text-white border border-transparent rounded-sm ">
                  <AiOutlineShoppingCart size={ 25 } />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-black aling-center lg:hidden sm:flex-nowrap">
        <div id="title-color-mobil" className="">
          <Link href="/" className="">
            <h1 className="text-[12px] sm:text-2xl ">The Guitar</h1>
          </Link>
        </div>
        <button
          id="title-color-boton"
          onClick={ handleNav }
          className="cursor-pointer md:hidden ">
          <AiOutlineMenu size={ 20 } />
        </button>
      </div>



    </nav>
  );
};

export default Nav;
