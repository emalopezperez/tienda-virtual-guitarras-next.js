import Link from "next/link";
import Image from "next/image";

export default function BlogSection({ post }) {
  const { nombre, descripcion, imagen, url } = post;
  return (
    <div className="my-4 mx-6 text-center rounded-lg shadow-lg">
      <Image
        className="h-48 w-full object-cover rounded-lg"
        src={imagen.data.attributes.formats.medium.url}
        alt="imagen de los instrumentos"
        width={300}
        height={200}
      />
      <div className="mt-4">
        <p className="text-xl font-semibold text-gray-800">{nombre}</p>
        <p className="mt-2 text-base text-gray-600 resumen">{descripcion}</p>
      </div>
      <Link href={`/blog/${url}`}>
        <button className="mt-5 mb-2 bg-black text-white py-1 px-12 hover:bg-gray-800">
          Leer mas
        </button>
      </Link>
    </div>
  );
}
