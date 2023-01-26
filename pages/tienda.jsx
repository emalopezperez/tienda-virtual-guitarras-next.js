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
        "Tienda virtual de guitarras. Compra guitarras de alta calidad en nuestra tienda en línea. Amplia selección de marcas y modelos disponibles para todos los niveles de habilidad"
      }>
      <Header
        nombre={"Nuestra coleccion"}
        typewriter={[""]}
        img={bgTienda}
        descripcion={"Tienda virtual de guitarras. Compra guitarras de alta calidad en nuestra tienda en línea. Amplia selección "}
        writing={false}
      />

      <main className="mt-20">
        <h2 className="flex justify-center text-xl font-bold text-gray-900 sm:text-3xl">
          Nuestra coleccion
        </h2>
        <div className=" flex justify-center flex-row flex-wrap mx-auto gap-20 mt-10 mb-10">
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
