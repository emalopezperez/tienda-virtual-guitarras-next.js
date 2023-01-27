import { useContext } from "react";
import Layout from "@/components/layout/Layout";
import Carrito from "@/components/cart/Carrito";
import { MyContext } from "@/context/MyContext";

const Cart = () => {
  const { carrito } = useContext(MyContext);

  return (
    <Layout title={"Carrito de compras"} description={"Carrito de compras"}>
      <div className=" mt-32 lg:mt-40 mb-30">
        <h2 className="flex justify-center text-2xl lg:text-3xl font-bold text-gray-900 sm:text-3xl">
          Carrito de compras
        </h2>

        <div>
          {carrito.map((elemento, key) => {
            <Carrito key={key.id} elemento={elemento} />;
          })}
        </div>
        <Carrito />
      </div>
    </Layout>
  );
};

export default Cart;
