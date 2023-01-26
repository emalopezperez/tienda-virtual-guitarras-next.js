import Layout from "@/components/layout/Layout";
import DetailPost from "@/components/blog/DetailPost";


export const getServerSideProps = async ({ query: { url } }) => {
  const respuesta = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`
  );

  const { data } = await respuesta.json();
  return {
    props: {
      data,
    },
  };
};

const detallePost = ({ data }) => {
  return (
    <Layout title={"post"} description={"detalle del post"}>
      <div className="">
        {data.map((element) => (
          <DetailPost key={element.attributes.id} element={element} />
        ))}
      </div>
    </Layout>
  );
};

export default detallePost;
