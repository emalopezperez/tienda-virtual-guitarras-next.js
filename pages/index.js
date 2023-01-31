import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
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

  const headerPromise = fetch(
    `${process.env.API_URL}/header-home?populate=imagen`
  ).then((res) => res.json());

  const descuentoPromise = fetch(
    `${process.env.API_URL}/promocion?populate=imagen`
  ).then((res) => res.json());

  const [
    { data: guitarras },
    { data: posts },
    { data: descuentos },
    { data: headerPost },
  ] = await Promise.all([
    guitarrasPromise,
    postsPromise,
    descuentoPromise,
    headerPromise,
  ]);

  return {
    props: {
      guitarras,
      posts,
      descuentos,
      headerPost,
    },
  };
};

export default function Index({ guitarras, posts, descuentos, headerPost }) {
  const { imagen } = headerPost.attributes;

  const bgHome = imagen?.data?.attributes?.url;

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
        <h2 className="flex justify-center text-2xl font-bold text-gray-900 lg:text-3xl ">
          Nuestra coleccion
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-10 mx-auto mt-20 mb-6 lg:gap-20 ">
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
          <h2 className="pb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
