import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import Blog from "@/components/blog/Blog";
import bgBlog from "../public/img/fondo-blog/fondoDeBlog.jpg";

export const getServerSideProps = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=imagen`);
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
};

const blog = ({ data }) => {
  return (
    <Layout title={"Blog"}>
      <Header nombre={"Blog"} typewriter={[""]} img={bgBlog} descripcion={false}/>

      <h2 className="flex justify-center font-bold text-gray-900 text-2xl lg:text-3xl mt-20">
          Nuestro blog
        </h2>
      <div className="grid">
        {data?.map((posts) => (
          <Blog key={posts.id} posts={posts.attributes} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
