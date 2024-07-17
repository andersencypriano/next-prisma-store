import { useStoreMT } from "@/store/cart";
import ProductItem from "../../ProductItem";
import DeleteItemCart from "./../Buttons/DeleteItemCart";

export default function DrawerList () {
  const { cart } = useStoreMT();

  return (
    <>
      <div className="">
        {cart.map((product) => (
          <div className="relative" key={product.id}>
            <div className="absolute top-[20px] right-[20px]">
              <DeleteItemCart idProduct={product.id} size={15}/>
            </div>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
