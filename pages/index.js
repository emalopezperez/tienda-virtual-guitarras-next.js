import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import bgHome from "../public/img/bg-home/bg-home.jpg";
import Guitarras from "@/components/guitarras/Guitarras";
import BlogSection from "@/components/blog/BlogSection";
import Incentive from "@/components/Incentive/Incentive";
import Descuentos from "@/components/feature/Descuentos";
import Feature from "@/components/feature/Feature";

export const getStaticProps = async () => {
  const guitarrasPromise = fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  ).then((res) => res.json());
  const postsPromise = fetch(
    `${process.env.API_URL}/blogs?populate=imagen`
  ).then((res) => res.json());

  const descuentoPromise = fetch(
    `${process.env.API_URL}/promocion?populate=imagen`
  ).then((res) => res.json());

  const [{ data: guitarras }, { data: posts }, { data: descuentos }] =
    await Promise.all([guitarrasPromise, postsPromise, descuentoPromise]);

  return {
    props: {
      guitarras,
      posts,
      descuentos,
    },
  };
};

export default function Index({ guitarras, posts, descuentos }) {
  return (
    <Layout
      title={"Inicio"}
      description={
        "Descubre nuestra pasión por las guitarras y los instrumentos musicales en nuestra página."
      }>
      <Header
        writing={true}
        nombre={"The Guitar"}
        typewriter={["calidad", "garantia", "confianza"]}
        img={bgHome}
        descripcion={
          " Nos enfocamos en crear sitios y aplicaciones web con diseño responsivo pa que se adapt"
        }
      />
      <main className="mt-20">
        <h2 className="flex justify-center font-bold text-gray-900 text-2xl lg:text-3xl ">
          Nuestra coleccion
        </h2>
        <div className=" flex justify-center flex-row flex-wrap mx-auto gap-20 mt-20 mb-10">
          {guitarras.map((guitarra) => (
            <Guitarras key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
      <div className="mt-20 mb-20">
        <Descuentos descuentos={descuentos} />
      </div>
      <section>
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-5">
            Nuestro blog
          </h2>
        </div>
        <div className="grid ">
          {posts.map((post) => (
            <BlogSection key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>

      <div>
        <Feature />
      </div>

      <div>
        <Incentive />
      </div>
    </Layout>
  );
}
