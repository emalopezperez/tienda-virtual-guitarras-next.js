import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import bgTienda from "../public/img/bg-tienda/bg-tienda.jpg";
import Guitarras from "@/components/guitarras/Guitarras";
import Feature from "@/components/feature/Feature";
import Incentive from "../components/Incentive/Incentive";

export const getStaticProps = async () => {
  const guitarrasPromise = fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  ).then((res) => res.json());

  const [{ data: guitarras }] = await Promise.all([guitarrasPromise]);

  return {
    props: {
      guitarras,
    },
  };
};

const tienda = ({ guitarras }) => {
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
      <div className=" mt-20 ">
        <h2 className="flex justify-center font-bold text-gray-900 text-2xl lg:text-3xl">
          Nuestra coleccion
        </h2>
      </div>
      <main className="mt-20">
        <div className=" flex justify-center flex-row flex-wrap mx-auto gap-20 mt-10 lg:mt-2 mb-10">
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
