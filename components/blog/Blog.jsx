import Image from "next/image";
import Link from "next/link";

const Blog = ({ posts }) => {
  const { descripcion, nombre, imagen, url, publishedAt } = posts;
  return (
    <div className="mx-6 my-4 text-center rounded-lg shadow-lg">
      <Image
        className="object-cover w-full h-48 rounded-lg"
        src={imagen.data.attributes.formats.medium.url}
        alt="imagen de los instrumentos"
        width={400}
        height={200}
      />
      <div className="mt-4">
        <p className="mt-4 mb-4 text-base text-gray-500">{publishedAt}</p>
        <p className="text-xl font-semibold text-gray-800">{nombre}</p>
        <p className="mt-2 text-base text-gray-600 resumen">{descripcion}</p>
      </div>
      <Link href={`/blog/${url}`}>
        <div className="flex justify-center">
          <button className="flex items-center px-12 py-1 mt-5 mb-2 text-white bg-black rounded-sm hover:bg-gray-800">
            Leer mas{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
