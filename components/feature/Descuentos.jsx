import Image from "next/image";
import Link from "next/link";

const Descuentos = ({ descuentos }) => {
  const { titulo, imagen } = descuentos.attributes;

  return (
    <section className="relative overflow-hidden rounded-lg pb-80 shadow-2xl lg:pb-0">
      <div className="ml-auto p-8 text-center sm:p-12 lg:w-2/3">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Sona a tu ritmo
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-5xl font-black sm:text-6xl">{titulo}</span>
          <span className="mt-2 block text-sm">
            On your next order over $50
          </span>
        </h2>
        <Link href="/tienda">
          <button className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white">
            Get Discount
          </button>
        </Link>
        <p className="mt-12 text-xs font-medium uppercase text-gray-400">
          Offer valid until 24th March, 2023 *
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-80 w-full lg:h-full lg:w-1/3">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={imagen?.data?.attributes?.url}
          alt="imagen de los instrumentos"
          width={800}
          height={400}
        />
      </div>
    </section>
  );
};

export default Descuentos;
