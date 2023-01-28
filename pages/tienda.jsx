import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Guitarras from "@/components/guitarras/Guitarras";
import Feature from "@/components/feature/Feature";
import Incentive from "../components/Incentive/Incentive";

const Header = dynamic(() => import("@/components/header/Header"), {
  loading: () => <p>Loading...</p>,
  modules: ["@/components/header/Header"],
});

export const getStaticProps = async () => {
  const guitarrasPromise = fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  ).then((res) => res.json());

  const postsPromise = fetch(
    `${process.env.API_URL}/header-tienda?populate=imagen`
  ).then((res) => res.json());

  const [{ data: guitarras }, { data: headerTienda }] = await Promise.all([
    guitarrasPromise,
    postsPromise,
  ]);

  return {
    props: {
      guitarras,
      headerTienda,
    },
  };
};

const tienda = ({ guitarras, headerTienda }) => {
  const { imagen } = headerTienda.attributes;

  const bgTienda = imagen?.data?.attributes?.url;



  return (
    <Layout
      title={"Tienda Virtual"}
      description={
        "Tienda virtual de guitarras. Compra guitarras de alta calidad en nuestra tienda en línea."
      }>
      <Header
        nombre={"Nuestra coleccion"}
        typewriter={[""]}
        img={bgTienda}
        descripcion={
          "Tienda virtual de guitarras. Compra guitarras de alta calidad en nuestra tienda en línea. Amplia selección "
        }
        writing={false}
      />
      <div className="mt-20 ">
        <h2 className="flex justify-center text-2xl font-bold text-gray-900 lg:text-3xl">
          Nuestra coleccion
        </h2>
      </div>
      <main className="mt-20">
        <div className="flex flex-row flex-wrap justify-center gap-20 mx-auto mt-10 mb-10 lg:mt-2">
          {guitarras.map((guitarra, key) => (
            <Guitarras key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>

        <div>
          <Feature />
        </div>

        <Incentive />
      </main>
    </Layout>
  );
};

export default tienda;
