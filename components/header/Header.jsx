import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import fondoDeBlog from "/public/img/fondo-blog/fondoDeBlog.jpg";

function Header({ nombre, typewriter, img, descripcion, writing, fondoBlog }) {
  return (
    <main className="">
      {fondoBlog ? (
        <Image
          className="w-full max-h-[360px] lg:max-h-[540px] md:h-screen object-cover  "
          src={fondoDeBlog}
          width={700}
          height={400}
          alt="imagen header Blog"
        />
      ) : (
        <Image
          className="w-full max-h-[360px] lg:max-h-[540px] md:h-screen object-cover  "
          src={img}
          width={700}
          height={400}
          alt="imagen header guitarras"
        />
      )}

      <div className="w-full h-screen max-h-[360px] lg:max-h-[540px]  absolute top-0  bg-white/40"></div>
      <div className=" w-full h-4/6 md:h-screen absolute top-0">
        <div className="relative flex justify-center w-full px-20 mt-[20px] md:mt-40 ">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12  ">
            <div className="">
              <div>
                <h1 className="flex gap-2 font-semibold tracking-1 pb-18 text-4xl sm:text-6xl">
                  {nombre} <span></span>
                  {writing ? (
                    <div className="md:flex hidden">
                      <Typewriter
                        words={typewriter}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </h1>
                <p className="mt-5 pb-5 text-sm sm:text-xl  leading-0 tracking-2 md:leading-8  text-black">
                  {descripcion}
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
