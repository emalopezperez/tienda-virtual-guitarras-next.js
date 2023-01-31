import Image from "next/image";
import Link from "next/link";

const Descuentos = ({ descuentos }) => {
  const { titulo, imagen } = descuentos.attributes;

  return (
    <section className="relative overflow-hidden rounded-lg shadow-2xl pb-80 lg:pb-0">
      <div className="p-8 ml-auto text-center sm:p-12 lg:w-2/3">
        <p className="text-sm font-semibold tracking-widest uppercase">
          Sona a tu ritmo
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-3xl font-black xl:text-6xl">{titulo}</span>
          <span className="block mt-2 text-sm">
            On your next order over $50
          </span>
        </h2>
        <Link href="/tienda">
          <button className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black">
            Get Discount
          </button>
        </Link>
        <p className="mt-12 text-xs font-medium text-gray-400 uppercase">
          Offer valid until 24th March, 2023 *
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={imagen?.data?.attributes?.url}
          alt="imagen de los instrumentos"
          width={400}
          height={200}
        />
      </div>
    </section>
  );
};

export default Descuentos;
