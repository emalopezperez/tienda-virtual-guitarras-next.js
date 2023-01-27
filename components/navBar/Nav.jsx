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
      className="w-full px-20 py-4 top-0  shadow-navbar transition duration-300 ease-in-out z-40 fixed ">
      <div className="px-4 sm:px-6">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <div>
            <Link
              id="title-color"
              href="/"
              className="text-2xl inline-flex font-semi-bold leading-6 hover:border-gray-900  transition duration-300 ease-in-out mx-4 mt-2 ">
              The Guitar
            </Link>
          </div>
          <Link href="/" className="ml-4 mt-2"></Link>
          <div id="text-color" className="ml-4 mt-2 flex-shrink-0">
            <Link
              href="/"
              className="text-smg inline-flex font-semibold leading- hover:border-gray-900  transition duration-300 ease-in-out mx-4 border-b-2 border-white">
              Inicio
            </Link>

            <Link
              href="/tienda"
              className="text-sm inline-flex font-semibold leading-6 border-b-2 border-white hover:border-gray-900 transition duration-300 ease-in-out mx-4">
              Tienda
            </Link>

            <Link
              href="/blog"
              className="text-sm inline-flex font-semibold  leading-6  border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Blog
            </Link>
            <Link
              href="/nosotros"
              className="text-sm inline-flex font-semibold   leading-6 border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Nosotros
            </Link>
            <Link
              href="/nosotros"
              className="text-sm inline-flex font-semibold  leading-6  border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Contacto
            </Link>
            <Link
              href="/cart"
              className="inline-flex ml-12 px-4 items-center rounded-sm border border-transparent bg-black/90 -button  py-1 text-base font-semibold text-white shadow-sm hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <AiOutlineShoppingCart size={18} />
            </Link>
          </div>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90"
              : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div className="flex gap-20 w-full items-center ">
              <Link href="/">
                <h1 className="text-xl text-white">The Guitar</h1>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-white">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 pt-6">
              <p className="uppercase text-sm tracking-widest text-white">
                Somos tu mejor opcion
              </p>
            </div>
            <div className="py-4 flex flex-col text-white">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Inicio
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Sobre nosotros
                  </li>
                </Link>

                <Link href="/tienda">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tienda
                  </li>
                </Link>
                <Link href="/blog">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    blog
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Contacto
                  </li>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex mt-4 items-center rounded-sm border border-transparent  px-3 py-1 text-base font-semibold text-white ">
                  <AiOutlineShoppingCart size={25} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-between px-4  lg:hidden sm:flex-nowrap text-black">
        <div id="title-color-mobil" className="">
          <Link href="/" className=" ">
            <h1 className="text-base sm:text-2xl ">The Guitar</h1>
          </Link>
        </div>
        <div
          id="title-color-boton"
          onClick={handleNav}
          className="md:hidden cursor-pointer  ">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
