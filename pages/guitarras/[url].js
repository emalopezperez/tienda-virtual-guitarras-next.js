import Detail from "@/components/guitarras/Detail";
import Layout from "@/components/layout/Layout";

export const getServerSideProps = async ({ query: { url } }) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );

  const { data } = await respuesta.json();
  return {
    props: {
      data,
    },
  };
};

const Guitarras = ({ data }) => {
  return (
    <Layout
      title={"Inicio"}
      description={
        "Descubre nuestra pasión por las guitarras y los instrumentos musicales en nuestra página. Como empresa especializada en venta de guitarras, ofrecemos una amplia variedad de marcas y modelos para todos los niveles de habilidad. Además, nuestro blog cuenta con consejos y tutoriales sobre cómo tocar y cuidar tu guitarra"
      }
    >
      <div className="post">
        {data.map((element, key) => (
          <Detail key={element.url} element={element} />
        ))}
      </div>
    </Layout>
  );
};

export default Guitarras;
