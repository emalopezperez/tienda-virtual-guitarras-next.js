import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
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
              href="/"
              className="text-2xl inline-flex font-semi-bold leading-6 text-gray-900  hover:border-gray-900  transition duration-300 ease-in-out mx-4 ">
              The Guitarists
            </Link>
          </div>
          <Link href="/" className="ml-4 mt-2"></Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link
              href="/"
              className="text-smg inline-flex font-semibold leading-6 text-gray-900  hover:border-gray-900  transition duration-300 ease-in-out mx-4 border-b-2 border-white">
              Inicio
            </Link>

            <Link
              href="/tienda"
              className="text-sm inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Tienda
            </Link>

            <Link
              href="/blog"
              className="text-sm inline-flex font-semibold  leading-6 text-gray-900 border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Blog
            </Link>
            <Link
              href="/nosotros"
              className="text-sm inline-flex font-semibold   leading-6 text-gray-900 border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Nosotros
            </Link>
            <Link
              href="/nosotros"
              className="text-sm inline-flex font-semibold  leading-6 text-gray-900 border-b-2 border-white hover:border-gray-900  transition duration-300 ease-in-out mx-4">
              Contacto
            </Link>
            <Link
              href="/cart"
              className="inline-flex ml-12 items-center rounded-sm border border-transparent bg-gray-900 -button px-3 py-1 text-base font-semibold text-white shadow-sm hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <AiOutlineShoppingCart size={18} />
            </Link>
          </div>
        </div>
        <div
          className={
            nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white" : ""
          }>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <h1 className="text-gradient">The Guitarist</h1>
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4 pt-6">
                <p className="uppercase text-sm tracking-widest text-gray-600">
                  Somos tu mejor opcion
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Inicio
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Sobre nosotros
                  </li>
                </Link>

                <Link href="/tienda">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Tienda
                  </li>
                </Link>
                <Link href="/blog">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    blog
                  </li>
                </Link>
                <Link href="/nosotros">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contacto
                  </li>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex mt-4 items-center rounded-sm border border-transparent bg-gray-900 -button px-3 py-1 text-base font-semibold text-white shadow-sm hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <AiOutlineShoppingCart size={20} />
                </Link>
              </ul>
              <div className="mt-[40px]">
                <p className="uppercase tracking-widest text-gradient">
                  Conectemos
                </p>
                <div className="flex items-center justify-between py-6 my-4 w-full sm:w-[80%]">
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="boton rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="boton rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/">
                    <div
                      onClick={() => setNav(!nav)}
                      className="boton rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      onClick={() => setNav(!nav)}
                      className="boton rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between  lg:hidden  sm:flex-nowrap ">
          <div className="">
            <Link href="/" className=" ">
              <h1 className="text-2xl ">The Guit</h1>
            </Link>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
