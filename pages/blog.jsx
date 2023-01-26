import Layout from "@/components/layout/Layout";
import Header from "@/components/header/Header";
import Blog from "@/components/blog/Blog";
import bgBlog from "../public/img/bg-blog/bg-blog.jpg";

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
      <Header nombre={"Blog"} typewriter={[""]} img={bgBlog} writing={false} />

      <div className="grid">
     
        {data?.map((posts) => (
          <Blog key={posts.id} posts={posts.attributes} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
