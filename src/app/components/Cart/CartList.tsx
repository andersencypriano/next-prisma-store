import { useStoreMT } from "@/store/cart";
import ProductItem from "../ProductItem";
import DeleteItemCart from "./Buttons/DeleteItemCart";

export default function CartList() {
  const { cart } = useStoreMT();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-9 gap-y-10">
        {cart.map((product) => (
          <div className="relative" key={product.id}>
            <div className="absolute top-[20px] right-[20px]">
              <DeleteItemCart idProduct={product.id} />
            </div>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
