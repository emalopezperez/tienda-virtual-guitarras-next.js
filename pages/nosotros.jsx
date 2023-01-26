import Layout from "@/components/layout/Layout";
import Nosotros from "@/components/nosotros/Nosotros";
import Header from "@/components/header/Header";
import bgNosotros from "../public/img/bg-nosotros/bg-nosotros.jpg";

const nosotros = () => {
  return (
    <Layout
      title={"Inicio"}
      description={
        "Descubre nuestra pasión por las guitarras y los instrumentos musicales en nuestra página. Como empresa especializada en venta de guitarras, ofrecemos una amplia variedad de marcas y modelos para todos los niveles de habilidad. Además, nuestro blog cuenta con consejos y tutoriales sobre cómo tocar y cuidar tu guitarra."
      }
    >
      <Header
        nombre={"Sobre nosotros"}
        typewriter={[""]}
        descripcion={""}
        img={bgNosotros}
      />
      <Nosotros />
    </Layout>
  );
};

export default nosotros;
