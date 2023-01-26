import Image from "next/image";
import Header from "../header/Header";

const DetailPost = ({ element }) => {
  const { nombre, imagen, descripcion, publishedAt } = element.attributes;

  return (
    <div>
      <Header fondoBlog={true} />
      <article className="mt-20 max-w-6xl mx-auto p-6 rounded-lg bg-white">
        <div className="flex justify-center">
          <Image
            src={imagen.data.attributes.formats.medium.url}
            alt="imagen de los instrumentos"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto pt-6">
          <h3 className="text-xl font-bold text-center pb-4 pt-4">{nombre}</h3>
          <p className="text-gray-700 ">{descripcion}</p>
          <p className="text-gray-700 pt-10">{descripcion}</p>
          <p className="text-gray-700 pt-10">{descripcion}</p>
          <p className="text-gray-600 text-sm text-center pt-6">
            {publishedAt}
          </p>
        </div>
      </article>
    </div>
  );
};

export default DetailPost;
